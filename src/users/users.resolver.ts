import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';
import { ValidateOneKeyPipe } from '../common/pipes/validate-one-key.pipe';
import { CheckAbilities } from '../common/decorators/ability.decorator';
import { Action } from '../ability/ability.factory/ability.factory';
import { ForbiddenError } from '@casl/ability';
import {
  BadRequestException,
  ForbiddenException,
  Logger,
} from '@nestjs/common';
import { UserUncheckedUpdateInput } from '../@generated/prisma-nestjs-graphql/user/user-unchecked-update.input';
import { UserCreateInput } from '../@generated/prisma-nestjs-graphql/user/user-create.input';
import { User } from '../@generated/prisma-nestjs-graphql/user/user.model';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
@Resolver('User')
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  @CheckAbilities({ action: Action.Create, subject: User })
  @Mutation('createUser')
  async create(
    @Args('createUserInput') createUserInput: UserCreateInput,
  ): Promise<User | void> {
    // return new Promise((resolve) => {
    //   this.usersService.create(createUserInput);
    // });
    return await this.usersService.create(createUserInput).then((res) => {
      this.mailerService
        .sendMail({
          to: this.configService.get('EMAIL_USER'), // list of receivers
          from: this.configService.get('EMAIL_USER'), // sender address
          subject: 'Confirm your email ✔', // Subject line
          text: 'welcome', // plaintext body
          html: '<b>slm</b>', // HTML body content
        })
        .then(() => {
          Logger.log('Email sent');
        })
        .catch((err) => {
          throw new BadRequestException(err.message);
        });
      return res;
    });
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
