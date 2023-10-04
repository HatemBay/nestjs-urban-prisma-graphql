import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import {
  AbilityFactory,
  Action,
} from '../ability/ability.factory/ability.factory';
import { ForbiddenError } from '@casl/ability';
import { User } from '../@generated/user/user.model';
@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private abilityFactory: AbilityFactory,
  ) {}

  async create(
    createUserInput: Prisma.UserUncheckedCreateInput,
    currentUser: User,
    isSignup: boolean,
  ): Promise<User> {
    try {
      const password = await bcrypt.hash(createUserInput.password, 10);
      const user = {
        data: {
          ...createUserInput,
          password,
        },
      };

      if (isSignup) {
        const mockUser = new User();
        const ability = this.abilityFactory.defineAbility(currentUser);
        ForbiddenError.from(ability).throwUnlessCan(Action.Create, mockUser);
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

  async findOne(where: Prisma.UserWhereUniqueInput) {
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

  async update(params: {
    data: Prisma.UserUncheckedUpdateInput;
    where: Prisma.UserWhereUniqueInput;
  }) {
    const { data, where } = params;
    try {
      return await this.prisma.user.update({
        data,
        where,
      });
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
