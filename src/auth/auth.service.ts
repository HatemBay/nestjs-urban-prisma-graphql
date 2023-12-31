import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../@generated/prisma-nestjs-graphql/user/user.model';
import { UserCreateInput } from '../@generated/prisma-nestjs-graphql/user/user-create.input';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne({ email });

    const valid = await bcrypt.compare(password, user?.password);

    if (user && valid) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  async login(user: User) {
    const accessToken = this.jwtService.sign({
      username: user.username,
      sub: user.id,
      role: user.role,
    });

    const res = {
      accessToken,
      user: user,
    };

    return res;
  }

  async signup(signupUserInput: UserCreateInput): Promise<User> {
    return await this.usersService.create(signupUserInput);
  }

  //TODO: improve (make case for if user exists or no)
  async googleLogin(req: any) {
    if (!req.user) {
      return 'No user from google';
    }
    return await this.login(req.user.user);
  }
}
