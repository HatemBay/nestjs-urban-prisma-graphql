import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { PostUncheckedCreateInput } from '../@generated/prisma-nestjs-graphql/post/post-unchecked-create.input';
import { Post } from '../@generated/prisma-nestjs-graphql/post/post.model';
import { User } from '../@generated/prisma-nestjs-graphql/user/user.model';
import { UsersService } from '../users/users.service';
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
        if (error.code === 'P2025') {
          throw new NotFoundException('Please provide correct information');
        }
      }
      throw error;
    }
  }

  async findAll(): Promise<Post[]> {
    return await this.prisma.post.findMany({
      include: {
        // Nb: true means that all properties will be included, otherwise we just specify the shape and conditions in options
        author: true,
      },
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

  async getAuthor(author_id: number): Promise<User> {
    return await this.usersService.findOne({ id: author_id });
  }

  async update(params: {
    where: Prisma.PostWhereUniqueInput;
    data: Prisma.PostUncheckedUpdateInput;
  }): Promise<Post> {
    const { data, where } = params;
    try {
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
