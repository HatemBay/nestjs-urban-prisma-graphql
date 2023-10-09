import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
// import { User } from '../@generated/prisma-nestjs-graphql/user/user.model';
import { Strategy } from 'passport-google-oauth20';
import { UsersService } from '../users/users.service';
import { PrismaService } from '../prisma/prisma.service';
import { Role } from '@prisma/client';
import { LoginResponse } from './dto/login-response';
@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private readonly usersService: UsersService,
    private prisma: PrismaService,
  ) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google/google-redirect',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
  ): Promise<any> {
    const { name, emails } = profile;
    let user = await this.prisma.user.findFirst({
      where: { google_id: profile.id },
    });
    if (!user) {
      const googleEmail = emails[0].value;
      const exisistingUserWithGoogleEmail = await this.prisma.user.findFirst({
        where: {
          email: { equals: googleEmail, mode: 'insensitive' },
        },
      });
      if (exisistingUserWithGoogleEmail) {
        console.log('jep');
        
        // TODO: log him in with that email
      }
      const usernameFromGoogle = name.givenName + name.familyName;
      const nameFromGoogle = name.givenName + ' ' + name.familyName;
      await this.usersService.create({
        username: usernameFromGoogle,
        name: nameFromGoogle,
        email: googleEmail,
        google_id: profile.id,
        google_profile: profile._json,
        role: Role.USER,
      });

      user = await this.prisma.user.findFirst({
        where: { email: googleEmail },
      });
      Logger.log(`Registered new user via Google signup: ${googleEmail}`);
    } else {
      await this.prisma.user.update({
        data: { google_id: profile.id, google_profile: profile._json },
        where: { id: user.id },
      });
    }

    const reqUser: LoginResponse = {
      access_token: accessToken,
      user: user,
    };

    return reqUser;
  }
}
