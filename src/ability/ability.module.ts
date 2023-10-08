import { Module } from '@nestjs/common';
import { JwtStrategy } from '../auth/jwt.strategy';
import { AbilityFactory } from './ability.factory/ability.factory';

@Module({
  providers: [AbilityFactory, JwtStrategy],
  exports: [AbilityFactory],
})
export class AbilityModule {}
