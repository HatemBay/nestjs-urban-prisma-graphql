import {
  AbilityBuilder,
  ExtractSubjectType,
  InferSubjects,
  MongoAbility,
  createMongoAbility,
} from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { Role } from '@prisma/client';
import { User } from '../../@generated/prisma-nestjs-graphql/user/user.model';

export enum Action {
  Manage = 'manage',
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
}

export type Subjects = InferSubjects<typeof User> | 'all';

export type AppAbility = MongoAbility<[Action, Subjects]>;

@Injectable()
export class AbilityFactory {
  defineAbility(user: User) {
    // *this should make the builder unable to allow the use of different actions or subjects than what we have defined
    // const builder = new AbilityBuilder(createMongoAbility as AbilityClass<AppAbility>);
    const { can, cannot, build } = new AbilityBuilder<AppAbility>(
      createMongoAbility,
    );

    // const roles = Object.values(Role);
    const role = user.role;

    const userIsAdmin = role === Role.ADMIN;

    if (userIsAdmin) {
      can(Action.Manage, 'all');
    } else {
      can(Action.Read, User);
      cannot(Action.Create, User).because('only admin can');
      can(Action.Update, User);
      cannot(Action.Update, User, { id: { $ne: user.id } }).because(
        'can only  edit self',
      );
      // cannot(Action.Read, User).because('only admin can');
    }
    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
