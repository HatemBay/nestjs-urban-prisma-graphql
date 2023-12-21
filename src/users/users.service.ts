import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { User } from '../@generated/prisma-nestjs-graphql/user/user.model';
import { Prisma } from '@prisma/client';
import { UserUncheckedCreateInput } from '../@generated/prisma-nestjs-graphql/user/user-unchecked-create.input';
import { Country } from '../@generated/prisma-nestjs-graphql/country/country.model';
import { CountriesService } from '../countries/countries.service';
import { UserUncheckedUpdateInput } from '../@generated/prisma-nestjs-graphql/user/user-unchecked-update.input';
import { CustomError } from '../common/errors/custom.error';
import { OrderByParams, PaginationParams } from '../graphql';
@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly countriesService: CountriesService,
  ) {}

  // TODO: make an error handler for prisma error codes
  async create(createUserInput: UserUncheckedCreateInput): Promise<User> {
    try {
      let user;
      if (createUserInput.password) {
        const password = await bcrypt.hash(createUserInput.password, 10);
        user = {
          data: {
            ...createUserInput,
            password,
          },
        };
      } else {
        user = {
          data: {
            ...createUserInput,
          },
        };
      }

      return await this.prisma.user.create(user);
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        switch (error.code) {
          case 'P2002':
            // handling duplicate key errors
            throw new CustomError(
              `Duplicate field value: ${error.meta.target}`,
              400,
            );
          case 'P2014':
            // handling invalid id errors
            throw new CustomError(`Invalid ID: ${error.meta.target}`, 400);
          case 'P2003':
            // handling invalid data errors
            throw new CustomError(
              `Invalid input data: ${error.meta.target}`,
              400,
            );
          default:
            throw new CustomError(
              `Something went wrong: ${error.message}`,
              500,
            );
        }
      }
      throw error;
    }
  }

  async findAll(
    orderBy?: OrderByParams,
    pagination?: PaginationParams,
  ): Promise<User[]> {
    const { field = 'createdAt', direction = 'desc' } = orderBy || {};
    const { page = 1, take = 10, filter } = pagination || {};

    const skip = (page - 1) * take;
    let where = {};

    if (filter !== null && filter !== undefined) {
      where = {
        OR: [
          {
            username: { startsWith: filter },
          },
          {
            email: { startsWith: filter },
          },
        ],
      };
    }

    return await this.prisma.user.findMany({
      skip,
      take,
      where: where,
      orderBy: { [field]: direction },
      include: {
        posts: true,
        likedPosts: true,
        dislikedPosts: true,
      },
    });
  }

  async findOne(where: Prisma.UserWhereUniqueInput): Promise<User> {
    try {
      return await this.prisma.user.findUniqueOrThrow({
        where,
        include: {
          posts: true,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException('User Not found');
        }
      }
      throw error;
    }
  }

  async getCountry(countryId: number): Promise<Country> {
    return await this.countriesService.findOne({ id: countryId });
  }

  // TODO: email shouldn't be updated and should be verified (verification is done, update to go)
  async update(params: {
    data: UserUncheckedUpdateInput;
    where: Prisma.UserWhereUniqueInput;
  }): Promise<User> {
    try {
      // TODO: remove because we've created the logic in the guard
      const { data, where } = params;

      // const ability = this.abilityFactory.defineAbility(currentUser);
      const getUser = await this.findOne(where);
      const userToUpdate = new User();
      Object.assign(userToUpdate, getUser);

      // * if we don't specify cannot() and because('') in the factory we instead use .SetMessage('') after .from()
      if (userToUpdate) {
        // ForbiddenError.from(ability).throwUnlessCan(
        //   Action.Update,
        //   userToUpdate,
        // );

        if (data.password) {
          data.password = await bcrypt.hash(data.password as string, 10);
        }

        const dateTime = new Date();
        dateTime.setHours(dateTime.getHours() + 1);
        data.updatedAt = dateTime;

        return await this.prisma.user.update({
          data,
          where,
        });
      }
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException('Please provide correct information');
        }
      }
      throw error;
    }
  }

  async remove(where: Prisma.UserWhereUniqueInput): Promise<User> {
    try {
      return await this.prisma.user.delete({
        where,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException('User Not found');
        }
      }
      throw error;
    }
  }

  async markEmailAsConfirmed(email: string) {
    const dateTime = new Date();
    dateTime.setHours(dateTime.getHours() + 1);
    await this.prisma.user
      .update({
        data: { emailVerified: true, updatedAt: dateTime },
        where: { email },
      })
      .catch((err) => {
        throw err.message;
      });
  }
}
