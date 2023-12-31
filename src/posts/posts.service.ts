import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { PostUncheckedCreateInput } from '../@generated/prisma-nestjs-graphql/post/post-unchecked-create.input';
import { Post } from '../@generated/prisma-nestjs-graphql/post/post.model';
import { User } from '../@generated/prisma-nestjs-graphql/user/user.model';
import { UsersService } from '../users/users.service';
import { OrderByParams, PaginationParams } from '../graphql';
import { PaginatedEntities } from 'src/common/types/paginatedEntities';
@Injectable()
export class PostsService {
  include: Prisma.PostInclude = {
    author: true,
    example: true,
    likedBy: true,
    dislikedBy: true,
    flags: true,
  };
  constructor(
    private prisma: PrismaService,
    private usersService: UsersService,
  ) {}

  async create(createPostDto: PostUncheckedCreateInput): Promise<Post> {
    try {
      return await this.prisma.post.create({ data: { ...createPostDto } });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          console.log('There is a unique constraint violation');
        }
        if (error.code === 'P2025') {
          throw new NotFoundException('Please provide correct information');
        }
      }
      throw error;
    }
  }

  async shuffle(array: any[]): Promise<any[]> {
    const shuffled = array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    return shuffled;
  }

  async findAll(
    orderBy?: OrderByParams,
    pagination?: PaginationParams,
    randomize?: boolean,
    authorId?: number,
  ): Promise<PaginatedEntities<Post>> {
    console.log(pagination);

    const { field = 'createdAt', direction = 'desc' } = orderBy || {};
    const { page = 1, take = 10, filter } = pagination || {};

    const skip = (page - 1) * take;

    return await this.prisma.$transaction(async () => {
      let posts: Post[];

      if (randomize) {
        const randomIds: any[] = await this.prisma
          .$queryRaw`SELECT id from "Post" ORDER BY random() LIMIT 7`;

        posts = await this.prisma.post.findMany({
          where: {
            id: { in: randomIds.map((val: any) => val.id) },
          },
          include: this.include,
        });

        posts = await this.shuffle(posts);

        console.log('toShuffled');
        console.log(posts);
      } else {
        posts = await this.prisma.post.findMany({
          skip,
          take,
          where: {
            //TODO: add condition on title arabic
            titleLatin: {
              startsWith: filter,
              mode: 'insensitive',
            },
            authorId,
          },
          orderBy: { [field]: direction },
          include: this.include,
        });
      }
      const totalCount = await this.prisma.post.count({
        where: {
          titleLatin: {
            startsWith: filter,
            mode: 'insensitive',
          },
          authorId,
        },
      });

      const result: PaginatedEntities<Post> = {
        pagination: { totalCount },
        data: posts,
      };

      return result;
    });
  }

  async findOne(where: Prisma.PostWhereUniqueInput): Promise<Post> {
    try {
      return await this.prisma.post.findUniqueOrThrow({
        where,
        include: this.include,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException('Post Not found');
        }
      }
      throw error;
    }
  }

  async getAuthor(authorId: number): Promise<User> {
    return await this.usersService.findOne({ id: authorId });
  }

  async getLikedBy(where: Prisma.PostWhereUniqueInput): Promise<User[]> {
    const post = await this.prisma.post.findFirstOrThrow({
      where,
      include: {
        likedBy: true,
      },
    });

    console.log(post.likedBy);

    return post.likedBy;
  }

  async getDislikedBy(where: Prisma.PostWhereUniqueInput): Promise<User[]> {
    const post = await this.prisma.post.findFirstOrThrow({
      where,
      include: {
        dislikedBy: true,
      },
    });

    return post.dislikedBy;
  }

  async updateTime(): Promise<Date> {
    const dateTime = new Date();
    dateTime.setHours(dateTime.getHours() + 1);
    return dateTime;
  }

  async update(params: {
    where: Prisma.PostWhereUniqueInput;
    data: Prisma.PostUncheckedUpdateInput;
  }): Promise<Post> {
    const { data, where } = params;
    try {
      data.updatedAt = await this.updateTime();
      return await this.prisma.post.update({
        data,
        where,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException('Please provide correct information');
        }
      }
      throw error;
    }
  }

  async remove(where: Prisma.PostWhereUniqueInput): Promise<Post> {
    try {
      return await this.prisma.post.delete({
        where,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException('Post Not found');
        }
      }
      throw error;
    }
  }
}
