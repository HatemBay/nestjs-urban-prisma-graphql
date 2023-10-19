import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { AbilityModule } from '../ability/ability.module';
import { CountriesModule } from '../countries/countries.module';

@Module({
  imports: [PrismaModule, AbilityModule, CountriesModule],
  providers: [UsersResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
