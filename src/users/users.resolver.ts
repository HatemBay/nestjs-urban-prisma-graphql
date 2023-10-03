import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';
import { UserCreateInput } from '../@generated/user/user-create.input';
import { User } from '../@generated/user/user.model';
import { ValidateOneKeyPipe } from '../common/pipes/validate-one-key.pipe';
import { UserUncheckedUpdateInput } from '../@generated/user/user-unchecked-update.input';
@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation('createUser')
  async create(
    @Args('createUserInput') createUserInput: UserCreateInput,
  ): Promise<User> {
    return await this.usersService.create(createUserInput);
  }

  @Query('users')
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

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

  @Mutation('updateUser')
  async update(
    @Args('updateUserInput') updateUserInput: UserUncheckedUpdateInput,
    @Args(
      'findUserInput',
      { type: () => Int || String },
      new ValidateOneKeyPipe('user'),
    )
    findUserInput: Prisma.UserWhereUniqueInput,
  ): Promise<User> {
    return await this.usersService.update({
      data: updateUserInput,
      where: findUserInput,
    });
  }

  @Mutation('removeUser')
  async remove(
    @Args(
      'where',
      { type: () => Int || String },
      new ValidateOneKeyPipe('user'),
    )
    findUserInput: Prisma.UserWhereUniqueInput,
  ): Promise<User> {
    return await this.usersService.remove(findUserInput);
  }
}
