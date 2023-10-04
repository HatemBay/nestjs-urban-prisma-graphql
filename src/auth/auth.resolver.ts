import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login-response';
import { LoginUserInput } from './dto/login-user.input';
import { GqlAuthGuard } from './gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { User } from '../@generated/user/user.model';
import { Prisma } from '@prisma/client';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  async login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context,
  ) {
    console.log('loginUserInput');
    console.log(context.user);

    return await this.authService.login(context.user);
  }

  @Mutation(() => User)
  async signup(
    @Args('createUserInput') signupUserInput: Prisma.UserCreateInput,
  ) {
    return await this.authService.signup(signupUserInput);
  }
}
