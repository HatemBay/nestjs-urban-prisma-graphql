import { Module } from '@nestjs/common';
import { AbilityFactory } from './ability.factory/ability.factory';
import { JwtStrategy } from '../auth/jwt.strategy';

@Module({
  providers: [AbilityFactory, JwtStrategy],
  exports: [AbilityFactory],
})
export class AbilityModule {}
