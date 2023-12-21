import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ExamplesService } from './examples.service';
import { Example } from '../@generated/prisma-nestjs-graphql/example/example.model';
import { Prisma } from '@prisma/client';
import { ExampleUncheckedUpdateInput } from '../@generated/prisma-nestjs-graphql/example/example-unchecked-update.input';
import { ForbiddenException } from '@nestjs/common';
import { ForbiddenError } from '@nestjs/apollo';
import { Post } from '../@generated/prisma-nestjs-graphql/post/post.model';
import { ExampleUncheckedCreateInput } from '../@generated/prisma-nestjs-graphql/example/example-unchecked-create.input';
import { CheckAbilities } from '../common/decorators/ability.decorator';
import { Action } from '../ability/ability.factory/ability.factory';
import { SkipAuth } from 'src/common/decorators/skip-auth.decorator';

@Resolver('Example')
export class ExamplesResolver {
  constructor(private readonly examplesService: ExamplesService) {}

  @CheckAbilities({ action: Action.Create, subject: Example })
  @Mutation('createExample')
  async create(
    @Args('createExampleInput') createExampleInput: ExampleUncheckedCreateInput,
  ): Promise<Example> {
    return await this.examplesService.create(createExampleInput);
  }

  @CheckAbilities({ action: Action.Read, subject: Example })
  @Query('examples')
  @SkipAuth()
  async findAll(): Promise<Example[]> {
    return await this.examplesService.findAll();
  }

  @CheckAbilities({ action: Action.Read, subject: Example })
  @Query('example')
  async findOne(
    @Args('findExampleInput', { type: () => Int })
    findExampleInput: Prisma.ExampleWhereUniqueInput,
  ): Promise<Example> {
    return await this.examplesService.findOne(findExampleInput);
  }

  @ResolveField(() => Post)
  async post(@Parent() example: Example): Promise<Post> {
    return await this.examplesService.getPost(example.postId);
  }

  @CheckAbilities({ action: Action.Update, subject: Example })
  @Mutation(() => Example, { name: 'updateExample' })
  async update(
    @Args('updateExampleInput') updateExampleInput: ExampleUncheckedUpdateInput,
    @Args('findExampleInput', { type: () => Int })
    findExampleInput: Prisma.ExampleWhereUniqueInput,
  ): Promise<Example> {
    try {
      return await this.examplesService.update({
        data: updateExampleInput,
        where: findExampleInput,
      });
    } catch (error) {
      if (error instanceof ForbiddenError) {
        throw new ForbiddenException(error.message);
      }
    }
  }

  @CheckAbilities({ action: Action.Delete, subject: Example })
  @Mutation('removeExample')
  async remove(
    @Args('findExampleInput', { type: () => Int })
    findExampleInput: Prisma.ExampleWhereUniqueInput,
  ): Promise<Example> {
    return await this.examplesService.remove(findExampleInput);
  }
}
