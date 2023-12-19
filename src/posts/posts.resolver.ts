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
import { OrderByParams, PaginationParams } from '../graphql';
import { SkipAuth } from '../common/decorators/skip-auth.decorator';
import { SkipAbility } from '../common/decorators/skip-ability.decorator';
import { PaginatedEntities } from 'src/common/types/paginatedEntities';

@Resolver('Post')
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @CheckAbilities({ action: Action.Create, subject: Post })
  @Mutation('createPost')
  async create(
    @Args('createPostInput') createPostInput: PostUncheckedCreateInput,
    @CurrentUser() user: User,
  ): Promise<Post> {
    createPostInput.authorId = user.id;
    createPostInput.likedBy = {
      connect: [{ id: user.id }],
    };
    return await this.postsService.create(createPostInput);
  }

  @SkipAuth()
  @SkipAbility()
  @CheckAbilities({ action: Action.Read, subject: Post })
  @Query('posts')
  async findAll(
    @Args('orderBy') orderBy?: OrderByParams,
    @Args('pagination') pagination?: PaginationParams,
    @Args('randomize') randomize?: boolean,
    @Args('authorId') authorId?: number,
  ): Promise<PaginatedEntities<Post>> {
    return await this.postsService.findAll(
      orderBy,
      pagination,
      randomize,
      authorId,
    );
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
    return await this.postsService.getAuthor(post.authorId);
  }

  @CheckAbilities({ action: Action.Update, subject: Post })
  @Mutation(() => Post, { name: 'updatePost' })
  async update(
    @Args('updatePostInput') updatePostInput: PostUncheckedUpdateInput,
    @Args('findPostInput')
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

  @CheckAbilities({ action: Action.Delete, subject: Post })
  @Mutation('removePost')
  async remove(
    @Args('findPostInput') findPostInput: Prisma.PostWhereUniqueInput,
  ): Promise<Post> {
    return await this.postsService.remove(findPostInput);
  }

  //*************************** POST REACTIONS ***************************/
  //TODO: put constraints to existing users (like when a user has already liked a post then he can't like again and connect to the likedBy array)
  @CheckAbilities({ action: Action.Update, subject: Post })
  @Mutation(() => Post, { name: 'likePost' })
  async likePost(
    reactToPostInput: PostUncheckedUpdateInput,
    @Args('findPostInput') findPostInput: Prisma.PostWhereUniqueInput,
    @CurrentUser() user: User,
  ): Promise<Post> {
    try {
      const post = await this.findOne(findPostInput);
      reactToPostInput = {};
      reactToPostInput.likedBy = {
        connect: [{ id: user.id }],
      };
      reactToPostInput.likesCount = post.likesCount + 1;

      return await this.postsService.update({
        data: reactToPostInput,
        where: findPostInput,
      });
    } catch (error) {
      if (error instanceof ForbiddenError) {
        throw new ForbiddenException(error.message);
      }
    }
  }
  @CheckAbilities({ action: Action.Update, subject: Post })
  @Mutation(() => Post, { name: 'dislikePost' })
  async dislikePost(
    reactToPostInput: PostUncheckedUpdateInput,
    @Args('findPostInput') findPostInput: Prisma.PostWhereUniqueInput,
    @CurrentUser() user: User,
  ): Promise<Post> {
    try {
      const post = await this.findOne(findPostInput);
      reactToPostInput = {};
      reactToPostInput.dislikedBy = {
        connect: [{ id: user.id }],
      };
      reactToPostInput.dislikesCount = post.dislikesCount + 1;

      return await this.postsService.update({
        data: reactToPostInput,
        where: findPostInput,
      });
    } catch (error) {
      if (error instanceof ForbiddenError) {
        throw new ForbiddenException(error.message);
      }
    }
  }
  @CheckAbilities({ action: Action.Update, subject: Post })
  @Mutation(() => Post, { name: 'unlikePost' })
  async unlikePost(
    @Args('findPostInput') findPostInput: Prisma.PostWhereUniqueInput,
    reactToPostInput: PostUncheckedUpdateInput,
    @CurrentUser() user: User,
  ): Promise<Post> {
    try {
      const post = await this.findOne(findPostInput);
      reactToPostInput = {};
      reactToPostInput.likedBy = {
        disconnect: [{ id: user.id }],
      };
      reactToPostInput.likesCount = post.likesCount - 1;

      return await this.postsService.update({
        data: reactToPostInput,
        where: findPostInput,
      });
    } catch (error) {
      console.log(error);

      if (error instanceof ForbiddenError) {
        throw new ForbiddenException(error.message);
      }
    }
  }

  @CheckAbilities({ action: Action.Update, subject: Post })
  @Mutation(() => Post, { name: 'undislikePost' })
  async undislikePost(
    reactToPostInput: PostUncheckedUpdateInput,
    @Args('findPostInput') findPostInput: Prisma.PostWhereUniqueInput,
    @CurrentUser() user: User,
  ): Promise<Post> {
    try {
      const post = await this.findOne(findPostInput);
      reactToPostInput = {};
      reactToPostInput.dislikedBy = {
        disconnect: [{ id: user.id }],
      };
      reactToPostInput.dislikesCount = post.dislikesCount - 1;

      return await this.postsService.update({
        data: reactToPostInput,
        where: findPostInput,
      });
    } catch (error) {
      if (error instanceof ForbiddenError) {
        throw new ForbiddenException(error.message);
      }
    }
  }
}
