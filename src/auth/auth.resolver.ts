import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login-response';
import { LoginUserInput } from './dto/login-user.input';
import { GqlAuthGuard } from './gql-auth.guard';
import { UseGuards, Logger } from '@nestjs/common';
import { SkipAuth } from '../common/decorators/skip-auth.decorator';
import { User } from '../@generated/prisma-nestjs-graphql/user/user.model';
import { UserCreateInput } from '../@generated/prisma-nestjs-graphql/user/user-create.input';
import { EmailConfirmationService } from '../email/email-confirmation.service';

@Resolver()
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private readonly emailConfirmationService: EmailConfirmationService,
  ) {}

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
    const user = await this.authService.signup(signupUserInput);
    await this.emailConfirmationService
      .sendVerificationLink(user.email)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    Logger.log('Email sent');
    return user;
  }
}
