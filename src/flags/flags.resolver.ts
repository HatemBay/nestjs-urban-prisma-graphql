import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { FlagsService } from './flags.service';
import { CheckAbilities } from '../common/decorators/ability.decorator';
import { SkipAuth } from '../common/decorators/skip-auth.decorator';
import { Action } from '../ability/ability.factory/ability.factory';
import { Flag } from '../@generated/prisma-nestjs-graphql/flag/flag.model';
import { FlagUncheckedCreateInput } from '../@generated/prisma-nestjs-graphql/flag/flag-unchecked-create.input';
import { Prisma } from '@prisma/client';
import { Post } from '../@generated/prisma-nestjs-graphql/post/post.model';
import { FlagUncheckedUpdateInput } from '../@generated/prisma-nestjs-graphql/flag/flag-unchecked-update.input';
import { ForbiddenError } from '@nestjs/apollo';
import { ForbiddenException } from '@nestjs/common';
import { User } from '../@generated/prisma-nestjs-graphql/user/user.model';

@Resolver('Flag')
export class FlagsResolver {
  constructor(private readonly flagsService: FlagsService) {}

  @CheckAbilities({ action: Action.Create, subject: Flag })
  @Mutation('createFlag')
  async create(
    @Args('createFlagInput') createFlagInput: FlagUncheckedCreateInput,
  ): Promise<Flag> {
    return await this.flagsService.create(createFlagInput);
  }

  @CheckAbilities({ action: Action.Read, subject: Flag })
  @Query('flags')
  @SkipAuth()
  async findAll(): Promise<Flag[]> {
    return await this.flagsService.findAll();
  }

  @CheckAbilities({ action: Action.Read, subject: Flag })
  @Query('flag')
  async findOne(
    @Args('findFlagInput', { type: () => Int })
    findFlagInput: Prisma.FlagWhereUniqueInput,
  ): Promise<Flag> {
    return await this.flagsService.findOne(findFlagInput);
  }

  @ResolveField(() => Post)
  async post(@Parent() flag: Flag): Promise<Post> {
    return await this.flagsService.getPost(flag.postId);
  }

  @ResolveField(() => User)
  async user(@Parent() flag: Flag): Promise<User> {
    return await this.flagsService.getUser(flag.userId);
  }

  @CheckAbilities({ action: Action.Update, subject: Flag })
  @Mutation(() => Flag, { name: 'updateFlag' })
  async update(
    @Args('updateFlagInput') updateFlagInput: FlagUncheckedUpdateInput,
    @Args('findFlagInput', { type: () => Int })
    findFlagInput: Prisma.FlagWhereUniqueInput,
  ): Promise<Flag> {
    try {
      return await this.flagsService.update({
        data: updateFlagInput,
        where: findFlagInput,
      });
    } catch (error) {
      if (error instanceof ForbiddenError) {
        throw new ForbiddenException(error.message);
      }
    }
  }

  @CheckAbilities({ action: Action.Delete, subject: Flag })
  @Mutation('removeFlag')
  async remove(
    @Args('findFlagInput', { type: () => Int })
    findFlagInput: Prisma.FlagWhereUniqueInput,
  ): Promise<Flag> {
    return await this.flagsService.remove(findFlagInput);
  }
  F;
}
