import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ForbiddenError } from '@casl/ability';
import {
  CHECK_ABILITY,
  RequiredRule,
} from '../common/decorators/ability.decorator';
import { GqlExecutionContext } from '@nestjs/graphql';
import {
  AbilityFactory,
  Action,
  SubjectList,
} from './ability.factory/ability.factory';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AbilityGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private caslAbilityFactory: AbilityFactory,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);

    const rules =
      this.reflector.get<RequiredRule[]>(CHECK_ABILITY, context.getHandler()) ||
      null;

    const skipAuth =
      this.reflector.get<boolean>('skipAuth', context.getHandler()) || false;
    if (skipAuth) return true;

    const skipAbility =
      this.reflector.get<boolean>('skipAbility', context.getHandler()) || false;

    if (skipAuth || skipAbility) return true;

    // Retrieving the subject of the ability
    const subject = rules[0].subject;
    const action = rules[0].action;

    // The subject of ability within our list of subjects from ability factory and assigning its string key to a var
    let entity: string;
    Object.keys(SubjectList).forEach((element) => {
      if (SubjectList[element] === subject) {
        entity = element;
        console.log(element);
      }
    });

    const prisma = new PrismaClient();

    // TODO: find a way to make it that i don't have to include every relationship to the connected user
    let { user } = ctx.getContext().req;
    user = await prisma['user'].findUnique({
      where: { id: user.id },
      include: {
        posts: true,
      },
    });
    console.log('userrrrrrr');
    console.log(user);

    let entityToUpdate;
    let getEntity;
    const args = ctx.getArgs();

    // Looking for the argument with where condition
    const arg = Object.keys(args).filter((element) => {
      return element.includes('find');
    });

    if (rules) {
      // Mapping ability subjects to their original classes and then used as a generic class with dynamic string
      const entityClassMap: { [key: string]: any } = {
        ...SubjectList,
      };

      const isFindAll =
        action === Action.Read &&
        (Object.keys(args).length === 0 || args === undefined);

      if (!isFindAll) {
        if (
          // Applies to update and delete and findOne (i can't extract conditions from rules so i have to include all CRUD's)
          action === Action.Update ||
          action === Action.Delete ||
          (action === Action.Read && Object.keys(args).length > 0)
        ) {
          getEntity = await prisma[entity.toLowerCase()].findUnique({
            where: { ...args[arg[0]] },
          });
        } else if (action === Action.Create) {
          const createArg = Object.keys(args).filter((element) => {
            return element.includes('create');
          })[0];
          getEntity = args[createArg];
        }

        // new class with dynamic name mapped from our subjects list in ability factory
        entityToUpdate = new entityClassMap[entity]();

        Object.assign(entityToUpdate, getEntity);
      } // TODO: look at the rest casl code and check if findAll works with conditions
      // else {
      //   const getEntities = await prisma[entity.toLowerCase()].findMany();

      //   const entitiesToUpdate: User[] = [];
      //   getEntities.forEach((element) => {
      //     console.log(element);
      //     const entityToUpdate = new entityClassMap[entity]();
      //     // const { name, ...whatever } = element;
      //     Object.assign(entityToUpdate, element);
      //     entitiesToUpdate.push(entityToUpdate);
      //   });
      //   console.log('entitiesToUpdate');
      //   console.log(entitiesToUpdate);
      // }
      // }

      // * In case i somehow decided to put global ability guard first
      // if (!user) {
      //   throw new ForbiddenException('User not authenticated');
    }

    const ability = this.caslAbilityFactory.defineAbility(user);

    try {
      rules.forEach((rule) => {
        // console.log(rule.action, ' &&& ', rule.subject);

        const isFindAll =
          rule.action === Action.Read &&
          (Object.keys(args).length === 0 || args === undefined);
        if (isFindAll) {
          ForbiddenError.from(ability).throwUnlessCan(
            rule.action,
            rule.subject,
          );
        } else {
          ForbiddenError.from(ability).throwUnlessCan(
            rule.action,
            entityToUpdate,
          );
        }
      });

      return true;
    } catch (error) {
      if (error instanceof ForbiddenError) {
        throw new ForbiddenException(error.message);
      }
    }
    return true;
  }
}
