import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from '../@generated/prisma-nestjs-graphql/post/post.model';
import { Prisma } from '@prisma/client';
import { PostUncheckedUpdateInput } from '../@generated/prisma-nestjs-graphql/post/post-unchecked-update.input';
import { ForbiddenException } from '@nestjs/common';
import { ForbiddenError } from '@nestjs/apollo';
import { User } from '../@generated/prisma-nestjs-graphql/user/user.model';
import { PostUncheckedCreateInput } from '../@generated/prisma-nestjs-graphql/post/post-unchecked-create.input';
import { CurrentUser } from '../common/decorators/current-user.decorator';

@Resolver('Post')
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Mutation('createPost')
  async create(
    @Args('createPostInput') createPostInput: PostUncheckedCreateInput,
    @CurrentUser() user: User,
  ): Promise<Post> {
    createPostInput.author_id = user.id;
    return await this.postsService.create(createPostInput);
  }

  @Query('posts')
  async findAll(): Promise<Post[]> {
    return await this.postsService.findAll();
  }

  @Query('post')
  async findOne(
    @Args('findPostInput', { type: () => Int })
    findPostInput: Prisma.PostWhereUniqueInput,
  ): Promise<Post> {
    return await this.postsService.findOne(findPostInput);
  }

  // resolution to the owner field within the pet entity using ownerId field
  @ResolveField(() => User)
  async author(@Parent() post: Post): Promise<User> {
    return await this.postsService.getAuthor(post.author_id);
  }

  @Mutation(() => Post, { name: 'updatePost' })
  async update(
    @Args('updatePostInput') updatePostInput: PostUncheckedUpdateInput,
    @Args('findPostInput', { type: () => Int })
    findPostInput: Prisma.PostWhereUniqueInput,
  ): Promise<Post> {
    try {
      return await this.postsService.update({
        data: updatePostInput,
        where: findPostInput,
      });
    } catch (error) {
      if (error instanceof ForbiddenError) {
        throw new ForbiddenException(error.message);
      }
    }
  }

  @Mutation('removePost')
  async remove(
    @Args('findPostInput', { type: () => Int || String })
    findPostInput: Prisma.PostWhereUniqueInput,
  ): Promise<Post> {
    return await this.postsService.remove(findPostInput);
  }
}
