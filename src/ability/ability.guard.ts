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
import { AbilityFactory, Action } from './ability.factory/ability.factory';
import { UsersService } from '../users/users.service';
import { User } from '../@generated/prisma-nestjs-graphql/user/user.model';

@Injectable()
export class AbilityGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private caslAbilityFactory: AbilityFactory,
    private usersService: UsersService,
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

    const { user } = ctx.getContext().req;
    console.log('user in ability guard');
    console.log(user);

    let userToUpdate;
    if (rules && rules[0].action === Action.Update) {
      // const fullUser = await this.usersService.findOne({ id: user.id });
      const args = ctx.getArgs();
      console.log('args: ');
      console.log(args);

      // console.log(args.findUserInput);
      const getUser = await this.usersService.findOne(args.findUserInput);

      userToUpdate = new User();
      Object.assign(userToUpdate, getUser);
    }

    // * In case i somehow decided to put global ability guard first
    // if (!user) {
    //   throw new ForbiddenException('User not authenticated');
    // }

    const ability = this.caslAbilityFactory.defineAbility(user);

    try {
      // TODO: improve like A LOT
      rules.forEach((rule) => {
        console.log(rule.action, ' &&& ', rule.subject);

        if (rule.action === Action.Update) {
          ForbiddenError.from(ability).throwUnlessCan(
            rule.action,
            userToUpdate,
          );
        } else {
          ForbiddenError.from(ability).throwUnlessCan(
            rule.action,
            rule.subject,
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
