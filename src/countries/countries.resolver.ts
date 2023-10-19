import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CountriesService } from './countries.service';
import { CreateCountryInput } from './dto/create-country.input';
import { UpdateCountryInput } from './dto/update-country.input';

@Resolver('Country')
export class CountriesResolver {
  constructor(private readonly countriesService: CountriesService) {}

  @Mutation('createCountry')
  create(@Args('createCountryInput') createCountryInput: CreateCountryInput) {
    return this.countriesService.create(createCountryInput);
  }

  @Query('countries')
  findAll() {
    return this.countriesService.findAll();
  }

  @Query('country')
  findOne(@Args('id') id: number) {
    return this.countriesService.findOne(id);
  }

  @Mutation('updateCountry')
  update(@Args('updateCountryInput') updateCountryInput: UpdateCountryInput) {
    return this.countriesService.update(updateCountryInput.id, updateCountryInput);
  }

  @Mutation('removeCountry')
  remove(@Args('id') id: number) {
    return this.countriesService.remove(id);
  }
}
