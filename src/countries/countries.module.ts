import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { CountriesResolver } from './countries.resolver';

@Module({
  providers: [CountriesResolver, CountriesService],
})
export class CountriesModule {}
