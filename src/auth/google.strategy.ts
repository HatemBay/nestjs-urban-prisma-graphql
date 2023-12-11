import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
// import { User } from '../@generated/prisma-nestjs-graphql/user/user.model';
import { Strategy } from 'passport-google-oauth20';
import { UsersService } from '../users/users.service';
import { PrismaService } from '../prisma/prisma.service';
import { Role } from '@prisma/client';
import { LoginResponse } from './dto/login-response';
import { EmailTakenException } from '../common/filters/email-taken-exception.filter';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      clientID: configService.get('GOOGLE_CLIENT_ID'),
      clientSecret: configService.get('GOOGLE_CLIENT_SECRET'),
      callbackURL: configService.get('GOOGLE_REDIRECT_URL'),
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
      where: { googleId: profile.id },
    });
    if (!user) {
      const googleEmail = emails[0].value;
      const exisistingUserWithGoogleEmail = await this.prisma.user.findFirst({
        where: {
          email: { equals: googleEmail, mode: 'insensitive' },
        },
      });
      if (exisistingUserWithGoogleEmail) {
        throw new EmailTakenException();
      }
      const usernameFromGoogle = name.givenName + name.familyName;
      const nameFromGoogle = name.givenName + ' ' + name.familyName;
      await this.usersService.create({
        username: usernameFromGoogle,
        name: nameFromGoogle,
        email: googleEmail,
        googleId: profile.id,
        googleProfile: profile._json,
        role: Role.USER,
      });

      user = await this.prisma.user.findFirst({
        where: { email: googleEmail },
      });
      Logger.log(`Registered new user via Google signup: ${googleEmail}`);
    } else {
      await this.prisma.user.update({
        data: { googleId: profile.id, googleProfile: profile._json },
        where: { id: user.id },
      });
    }

    const reqUser: LoginResponse = {
      accessToken: accessToken,
      user: user,
    };

    return reqUser;
  }
}
