import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostsService } from 'src/posts/posts.service';
import { Post, Prisma } from '@prisma/client';
import { Flag } from 'src/@generated/prisma-nestjs-graphql/flag/flag.model';
import { FlagUncheckedCreateInput } from 'src/@generated/prisma-nestjs-graphql/flag/flag-unchecked-create.input';

@Injectable()
export class FlagsService {
  constructor(
    private prisma: PrismaService,
    private postsService: PostsService,
  ) {}

  async create(createFlagDto: FlagUncheckedCreateInput): Promise<Flag> {
    try {
      return await this.prisma.flag.create({
        data: { ...createFlagDto },
      });
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

  async findAll(): Promise<Flag[]> {
    return await this.prisma.flag.findMany();
  }

  async findOne(where: Prisma.FlagWhereUniqueInput): Promise<Flag> {
    try {
      return await this.prisma.flag.findUniqueOrThrow({ where });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException('Flag Not found');
        }
      }
      throw error;
    }
  }

  async getPost(postId: number): Promise<Post> {
    return await this.postsService.findOne({ id: postId });
  }

  async update(params: {
    where: Prisma.FlagWhereUniqueInput;
    data: Prisma.FlagUncheckedUpdateInput;
  }): Promise<Flag> {
    const { data, where } = params;
    try {
      return await this.prisma.flag.update({
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

  async remove(where: Prisma.FlagWhereUniqueInput): Promise<Flag> {
    try {
      return await this.prisma.flag.delete({
        where,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException('Flag Not found');
        }
      }
      throw error;
    }
  }
}
