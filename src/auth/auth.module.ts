import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    UsersModule,
    JwtModule.register({
      signOptions: { expiresIn: '6000s' },
      secret: 'secret-to-be-hidden-as-env-variable', //TODO: hide
    }),
  ],
  providers: [AuthResolver, AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
