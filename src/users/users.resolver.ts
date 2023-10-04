import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';
import { UserCreateInput } from '../@generated/user/user-create.input';
import { User } from '../@generated/user/user.model';
import { ValidateOneKeyPipe } from '../common/pipes/validate-one-key.pipe';
import { UserUncheckedUpdateInput } from '../@generated/user/user-unchecked-update.input';
import { CheckAbilities } from '../common/decorators/ability.decorator';
import { Action } from '../ability/ability.factory/ability.factory';
@Resolver('User')
@CheckAbilities({ action: Action.Create, subject: User })
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation('createUser')
  async create(
    @Args('createUserInput') createUserInput: UserCreateInput,
    @Context() context,
  ): Promise<User> {
    const user = context.user;

    return await this.usersService.create(createUserInput, user, false);
  }

  @CheckAbilities({ action: Action.Read, subject: User })
  @Query('users')
  async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
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

  @CheckAbilities({ action: Action.Update, subject: User })
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
      'findUserInput',
      { type: () => Int || String },
      new ValidateOneKeyPipe('user'),
    )
    findUserInput: Prisma.UserWhereUniqueInput,
  ): Promise<User> {
    return await this.usersService.remove(findUserInput);
  }
}
