import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { ForbiddenError } from '@casl/ability';
import {
  Action,
  AbilityFactory,
} from '../ability/ability.factory/ability.factory';
import { User } from '../@generated/prisma-nestjs-graphql/user/user.model';
import { Prisma } from '@prisma/client';
import { UserUncheckedCreateInput } from '../@generated/prisma-nestjs-graphql/user/user-unchecked-create.input';
@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private abilityFactory: AbilityFactory,
  ) {}

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
        if (error.code === 'P2002') {
          console.log(
            'There is a unique constraint violation, a new user cannot be created with this email',
          );
        }
        if (error.code === 'P2025') {
          throw new NotFoundException('Please provide correct information');
        }
      }
      throw error;
    }
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(where: Prisma.UserWhereUniqueInput): Promise<User> {
    try {
      return await this.prisma.user.findUniqueOrThrow({ where });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException('User Not found');
        }
      }
      throw error;
    }
  }

  //TODO: email shouldn't be updated and should be verified
  async update(
    params: {
      data: Prisma.UserUncheckedUpdateInput;
      where: Prisma.UserWhereUniqueInput;
    },
    currentUser?: User,
  ): Promise<User> {
    try {
      const { data, where } = params;
      const ability = this.abilityFactory.defineAbility(currentUser);
      const getUser = await this.findOne(where);
      const userToUpdate = new User();
      Object.assign(userToUpdate, getUser);

      // * if we don't specify cannot() and because('') in the factory we instead use .SetMessage('') after .from()
      if (userToUpdate) {
        ForbiddenError.from(ability).throwUnlessCan(
          Action.Update,
          userToUpdate,
        );

        if (data.password) {
          data.password = await bcrypt.hash(data.password as string, 10);
        }

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

  async remove(where: Prisma.UserWhereUniqueInput) {
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
}
