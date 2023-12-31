import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';
import { ValidateOneKeyPipe } from '../common/pipes/validate-one-key.pipe';
import { CheckAbilities } from '../common/decorators/ability.decorator';
import { Action } from '../ability/ability.factory/ability.factory';
import { ForbiddenError } from '@casl/ability';
import { ForbiddenException } from '@nestjs/common';
import { UserUncheckedUpdateInput } from '../@generated/prisma-nestjs-graphql/user/user-unchecked-update.input';
import { UserCreateInput } from '../@generated/prisma-nestjs-graphql/user/user-create.input';
import { User } from '../@generated/prisma-nestjs-graphql/user/user.model';
import { Country } from '../@generated/prisma-nestjs-graphql/country/country.model';
import { SkipAuth } from '../common/decorators/skip-auth.decorator';
import { SkipAbility } from '../common/decorators/skip-ability.decorator';
import { OrderByParams, PaginationParams } from '../graphql';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @CheckAbilities({ action: Action.Create, subject: User })
  @Mutation('createUser')
  async create(
    @Args('createUserInput') createUserInput: UserCreateInput,
  ): Promise<User | void> {
    const user = await this.usersService.create(createUserInput);

    return user;
  }

  @SkipAuth()
  @SkipAbility()
  // @CheckAbilities({ action: Action.Read, subject: User })
  @Query('users')
  async findAll(
    @Args('orderBy') orderBy?: OrderByParams,
    @Args('pagination') pagination?: PaginationParams,
  ): Promise<User[]> {
    return await this.usersService.findAll(orderBy, pagination);
  }

  @CheckAbilities({ action: Action.Read, subject: User })
  @Query('user')
  async findOne(
    @Args(
      'findUserInput',
      { type: () => Int || String },
      new ValidateOneKeyPipe('user'),
    )
    findUserInput: Prisma.UserWhereUniqueInput,
  ): Promise<User> {
    return await this.usersService.findOne(findUserInput);
  }

  @ResolveField(() => Country)
  async country(@Parent() user: User): Promise<Country> {
    return await this.usersService.getCountry(user.countryId);
  }

  @CheckAbilities({ action: Action.Update, subject: User })
  @Mutation(() => User, { name: 'updateUser' })
  async update(
    @Args('updateUserInput') updateUserInput: UserUncheckedUpdateInput,
    @Args(
      'findUserInput',
      { type: () => Int || String },
      new ValidateOneKeyPipe('user'),
    )
    findUserInput: Prisma.UserWhereUniqueInput,
  ): Promise<User> {
    try {
      console.log('data');
      console.log(updateUserInput);
      return await this.usersService.update({
        data: updateUserInput,
        where: findUserInput,
      });
    } catch (error) {
      if (error instanceof ForbiddenError) {
        throw new ForbiddenException(error.message);
      }
    }
  }

  @CheckAbilities({ action: Action.Delete, subject: User })
  @Mutation('removeUser')
  async remove(
    @Args(
      'findUserInput',
      { type: () => Int || String },
      new ValidateOneKeyPipe('user'),
    )
    findUserInput: Prisma.UserWhereUniqueInput,
  ): Promise<User> {
    return await this.usersService.remove(findUserInput);
  }
}
