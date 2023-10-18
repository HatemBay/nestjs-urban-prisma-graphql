import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { ExampleUncheckedCreateInput } from '../@generated/prisma-nestjs-graphql/example/example-unchecked-create.input';
import { Example } from '../@generated/prisma-nestjs-graphql/example/example.model';
import { PostsService } from '../posts/posts.service';
import { Post } from '../@generated/prisma-nestjs-graphql/post/post.model';

@Injectable()
export class ExamplesService {
  constructor(
    private prisma: PrismaService,
    private postsService: PostsService,
  ) {}

  async create(
    createExampleDto: ExampleUncheckedCreateInput,
  ): Promise<Example> {
    try {
      return await this.prisma.example.create({
        data: { ...createExampleDto },
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

  async findAll(): Promise<Example[]> {
    return await this.prisma.example.findMany({
      include: {
        post: true,
      },
    });
  }

  async findOne(where: Prisma.ExampleWhereUniqueInput): Promise<Example> {
    try {
      return await this.prisma.example.findUniqueOrThrow({ where });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException('Example Not found');
        }
      }
      throw error;
    }
  }

  async getPost(post_id: number): Promise<Post> {
    return await this.postsService.findOne({ id: post_id });
  }

  async update(params: {
    where: Prisma.ExampleWhereUniqueInput;
    data: Prisma.ExampleUncheckedUpdateInput;
  }): Promise<Example> {
    const { data, where } = params;
    try {
      const dateTime = new Date();
      dateTime.setHours(dateTime.getHours() + 1);
      data.updated_at = dateTime;

      return await this.prisma.example.update({
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

  async remove(where: Prisma.ExampleWhereUniqueInput): Promise<Example> {
    try {
      return await this.prisma.example.delete({
        where,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException('Example Not found');
        }
      }
      throw error;
    }
  }
}
