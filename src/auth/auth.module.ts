import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PrismaModule } from '../prisma/prisma.module';
import { GoogleStrategy } from './google.strategy';
import { AuthController } from './auth.controller';
import { ConfigService } from '@nestjs/config';
import { EmailConfirmationModule } from '../email/email-confirmation.module';

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    UsersModule,
    EmailConfirmationModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        signOptions: {
          expiresIn: `${configService.get('SECRET_EXPIRATION_TIME')}s`,
        },
        secret: configService.get('SECRET'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    AuthResolver,
    AuthService,
    LocalStrategy,
    JwtStrategy,
    GoogleStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
