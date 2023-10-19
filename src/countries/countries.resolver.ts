import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CountriesService } from './countries.service';
import { Country } from '../@generated/prisma-nestjs-graphql/country/country.model';
import { Prisma } from '@prisma/client';
import { CountryUncheckedUpdateInput } from '../@generated/prisma-nestjs-graphql/country/country-unchecked-update.input';
import { ForbiddenException } from '@nestjs/common';
import { ForbiddenError } from '@nestjs/apollo';
import { CountryUncheckedCreateInput } from '../@generated/prisma-nestjs-graphql/country/country-unchecked-create.input';
import { CheckAbilities } from '../common/decorators/ability.decorator';
import { Action } from '../ability/ability.factory/ability.factory';
import { ValidateOneKeyPipe } from '../common/pipes/validate-one-key.pipe';

@Resolver('Country')
export class CountriesResolver {
  constructor(private readonly countriesService: CountriesService) {}

  @CheckAbilities({ action: Action.Create, subject: Country })
  @Mutation('createCountry')
  async create(
    @Args('createCountryInput') createCountryInput: CountryUncheckedCreateInput,
  ): Promise<Country> {
    return await this.countriesService.create(createCountryInput);
  }

  @CheckAbilities({ action: Action.Read, subject: Country })
  @Query('countries')
  async findAll(): Promise<Country[]> {
    return await this.countriesService.findAll();
  }

  @CheckAbilities({ action: Action.Read, subject: Country })
  @Query('country')
  async findOne(
    @Args(
      'findCountryInput',
      { type: () => Int || String },
      new ValidateOneKeyPipe('country'),
    )
    findCountryInput: Prisma.CountryWhereUniqueInput,
  ): Promise<Country> {
    return await this.countriesService.findOne(findCountryInput);
  }

  @CheckAbilities({ action: Action.Update, subject: Country })
  @Mutation(() => Country, { name: 'updateCountry' })
  async update(
    @Args('updateCountryInput') updateCountryInput: CountryUncheckedUpdateInput,
    @Args(
      'findCountryInput',
      { type: () => Int || String },
      new ValidateOneKeyPipe('country'),
    )
    findCountryInput: Prisma.CountryWhereUniqueInput,
  ): Promise<Country> {
    try {
      return await this.countriesService.update({
        data: updateCountryInput,
        where: findCountryInput,
      });
    } catch (error) {
      if (error instanceof ForbiddenError) {
        throw new ForbiddenException(error.message);
      }
    }
  }

  @CheckAbilities({ action: Action.Delete, subject: Country })
  @Mutation('removeCountry')
  async remove(
    @Args(
      'findCountryInput',
      { type: () => Int || String },
      new ValidateOneKeyPipe('country'),
    )
    findCountryInput: Prisma.CountryWhereUniqueInput,
  ): Promise<Country> {
    return await this.countriesService.remove(findCountryInput);
  }
}
