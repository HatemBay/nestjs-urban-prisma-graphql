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
      cannot(Action.Update, User).because('can only  edit self');
      can(Action.Update, User, { id: { $eq: user.id } });
      can(Action.Update, User, { email: { $eq: user.email } });
      can(Action.Update, User, { username: { $eq: user.username } });
      can(Action.Update, User, { google_id: { $eq: user.google_id } });
      // cannot(Action.Update, User, {$or: [{ id: { $ne: user.id }]} }).because(
      //   'can only  edit self',
      // );
      // cannot(Action.Update, User, { email: { $ne: user.email } }).because(
      //   'can only  edit self',
      // );
      // cannot(Action.Update, User, { username: { $ne: user.username } }).because(
      //   'can only  edit self',
      // );
      // cannot(Action.Update, User, {
      //   google_id: { $ne: user.google_id },
      // }).because('can only  edit self');
      // cannot(Action.Read, User).because('only admin can');
    }
    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
