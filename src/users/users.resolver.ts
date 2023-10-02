import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { Prisma, User } from '@prisma/client';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation('createUser')
  async create(
    @Args('createUserInput') createUserInput: Prisma.UserCreateInput,
  ): Promise<User> {
    return await this.usersService.create(createUserInput);
  }

  @Query('users')
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  /**
   * 'where' is the variety of unique attributes that the user has the choice to implement
   * this makes searching more flexible as you're not only bound to one attribute like id
   */

  @Query('user')
  async findOne(
    @Args('where', { type: () => Int || String })
    where: Prisma.UserWhereUniqueInput,
  ): Promise<User> {
    return await this.usersService.findOne(where);
  }

  @Mutation('updateUser')
  async update(
    @Args('updateUserInput') updateUserInput: Prisma.UserUncheckedUpdateInput,
    @Args('where', { type: () => Int || String })
    where: Prisma.UserWhereUniqueInput,
  ): Promise<User> {
    return await this.usersService.update({ data: updateUserInput, where });
  }

  @Mutation('removeUser')
  async remove(
    @Args('where', { type: () => Int || String })
    where: Prisma.UserWhereUniqueInput,
  ): Promise<User> {
    return await this.usersService.remove(where);
  }
}
