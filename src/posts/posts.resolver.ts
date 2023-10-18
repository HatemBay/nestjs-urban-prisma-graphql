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
import { CheckAbilities } from '../common/decorators/ability.decorator';
import { Action } from '../ability/ability.factory/ability.factory';

@Resolver('Post')
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @CheckAbilities({ action: Action.Create, subject: Post })
  @Mutation('createPost')
  async create(
    @Args('createPostInput') createPostInput: PostUncheckedCreateInput,
    @CurrentUser() user: User,
  ): Promise<Post> {
    createPostInput.author_id = user.id;
    return await this.postsService.create(createPostInput);
  }

  @CheckAbilities({ action: Action.Read, subject: Post })
  @Query('posts')
  async findAll(): Promise<Post[]> {
    return await this.postsService.findAll();
  }

  @CheckAbilities({ action: Action.Read, subject: Post })
  @Query('post')
  async findOne(
    @Args('findPostInput', { type: () => Int })
    findPostInput: Prisma.PostWhereUniqueInput,
  ): Promise<Post> {
    return await this.postsService.findOne(findPostInput);
  }

  @ResolveField(() => User)
  async author(@Parent() post: Post): Promise<User> {
    return await this.postsService.getAuthor(post.author_id);
  }

  @CheckAbilities({ action: Action.Update, subject: Post })
  @Mutation(() => Post, { name: 'updatePost' })
  async update(
    @Args('updatePostInput') updatePostInput: PostUncheckedUpdateInput,
    @Args('findPostInput')
    findPostInput: Prisma.PostWhereUniqueInput,
  ): Promise<Post> {
    try {
      console.log('12');
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

  @CheckAbilities({ action: Action.Delete, subject: Post })
  @Mutation('removePost')
  async remove(
    @Args('findPostInput', { type: () => Int })
    findPostInput: Prisma.PostWhereUniqueInput,
  ): Promise<Post> {
    return await this.postsService.remove(findPostInput);
  }
}
