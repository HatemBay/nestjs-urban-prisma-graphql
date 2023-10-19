import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesResolver } from './countries.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [CountriesResolver, CountriesService],
  exports: [CountriesService],
})
export class CountriesModule {}
