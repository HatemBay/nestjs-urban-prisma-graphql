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
        // TODO: if the query gets too big, import it as a function with parameters
        posts = await this.prisma.$queryRaw`SELECT p.*, jsonb_build_object(
            'id', e."id",
            'contentArabic', e."contentArabic",
            'contentEnglish', e."contentEnglish",
            'contentFrench', e."contentFrench"
          ) AS "example" FROM "Post" As p join "User" As u ON p."authorId" = u."id" left join "Example" As e ON p."id" = e."postId" ORDER BY random() LIMIT 7`;
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
          include: {
            // Nb: true means that all properties will be included, otherwise we just specify the shape and conditions in options
            author: true,
            example: true,
          },
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
      return await this.prisma.post.findUniqueOrThrow({ where });
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

  async update(params: {
    where: Prisma.PostWhereUniqueInput;
    data: Prisma.PostUncheckedUpdateInput;
  }): Promise<Post> {
    const { data, where } = params;
    try {
      const dateTime = new Date();
      dateTime.setHours(dateTime.getHours() + 1);
      data.updatedAt = dateTime;
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
