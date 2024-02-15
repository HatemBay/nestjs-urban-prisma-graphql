import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CountryUncheckedCreateInput } from '../@generated/prisma-nestjs-graphql/country/country-unchecked-create.input';
import { Country } from '../@generated/prisma-nestjs-graphql/country/country.model';

@Injectable()
export class CountriesService {
  include: Prisma.CountryInclude = {
    users: true,
  };
  constructor(private prisma: PrismaService) {}

  async create(
    createCountryDto: CountryUncheckedCreateInput,
  ): Promise<Country> {
    try {
      return await this.prisma.country.create({
        data: { ...createCountryDto },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          console.log('There is a unique constraint violation');
        }
        if (error.code === 'P2025') {
          throw new NotFoundException('Please provide correct information');
        }
      }
      throw error;
    }
  }

  async findAll(): Promise<Country[]> {
    return await this.prisma.country.findMany({ include: this.include });
  }

  async findOne(where: Prisma.CountryWhereUniqueInput): Promise<Country> {
    try {
      return await this.prisma.country.findUniqueOrThrow({
        where,
        include: this.include,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException('Country Not found');
        }
      }
      throw error;
    }
  }

  async update(params: {
    where: Prisma.CountryWhereUniqueInput;
    data: Prisma.CountryUncheckedUpdateInput;
  }): Promise<Country> {
    const { data, where } = params;
    try {
      return await this.prisma.country.update({
        data,
        where,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          console.log('There is a unique constraint violation');
        }
        if (error.code === 'P2025') {
          throw new NotFoundException('Please provide correct information');
        }
      }
      throw error;
    }
  }

  async remove(where: Prisma.CountryWhereUniqueInput): Promise<Country> {
    try {
      return await this.prisma.country.delete({
        where,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException('Country Not found');
        }
      }
      throw error;
    }
  }
}
