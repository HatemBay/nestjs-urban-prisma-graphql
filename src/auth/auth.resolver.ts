import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login-response';
import { LoginUserInput } from './dto/login-user.input';
import { GqlAuthGuard } from './gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { SkipAuth } from '../common/decorators/skip-auth.decorator';
import { User } from '../@generated/prisma-nestjs-graphql/user/user.model';
import { UserCreateInput } from '../@generated/prisma-nestjs-graphql/user/user-create.input';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @SkipAuth()
  @Mutation(() => LoginResponse, { name: 'login' })
  @UseGuards(GqlAuthGuard)
  async login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context,
  ) {
    return await this.authService.login(context.user);
  }

  @Mutation(() => User)
  @SkipAuth()
  async signup(@Args('createUserInput') signupUserInput: UserCreateInput) {
    return await this.authService.signup(signupUserInput);
  }
}
