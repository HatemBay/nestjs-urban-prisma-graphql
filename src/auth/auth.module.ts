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

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    UsersModule,
    JwtModule.register({
      signOptions: { expiresIn: '6000s' },
      secret: process.env.SECRET, //TODO: hide
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
