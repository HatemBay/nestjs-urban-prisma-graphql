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
import { Post } from '../../@generated/prisma-nestjs-graphql/post/post.model';
import { Example } from '../../@generated/prisma-nestjs-graphql/example/example.model';
import { Country } from '../../@generated/prisma-nestjs-graphql/country/country.model';

export enum Action {
  Manage = 'manage',
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
}

export const SubjectList = {
  User,
  Post,
  Example,
  Country,
};

export const PluralSubjectList = {
  User: 'users',
  Post: 'posts',
  Example: 'examples',
  Country: 'countries',
};

type SubjectListType = typeof SubjectList;

export type Subjects =
  | InferSubjects<SubjectListType[keyof SubjectListType]>
  | 'all';

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

    const ids_of_posts = user.posts?.map((post) => post.id) || [];

    const userIsAdmin = role === Role.ADMIN;

    if (userIsAdmin) {
      can(Action.Manage, 'all');
    } else {
      // ********** users **********
      cannot(Action.Create, User).because('only admin can');
      // cannot(Action.Read, User).because('only admin can');
      can(Action.Read, User);
      cannot(Action.Update, User).because('can only edit self');
      can(Action.Update, User, { id: { $eq: user.id } });
      can(Action.Update, User, { email: { $eq: user.email } });
      can(Action.Update, User, { username: { $eq: user.username } });
      can(Action.Update, User, { googleId: { $eq: user.googleId } });
      cannot(Action.Delete, User).because('can only edit self');
      // ********** users **********
      // ********** posts **********
      can(Action.Create, Post);
      can(Action.Read, Post);
      cannot(Action.Update, Post).because('can only edit own posts');
      can(Action.Update, Post, { authorId: { $eq: user.id } });
      cannot(Action.Delete, Post).because('can only delete own posts');
      can(Action.Delete, Post, { authorId: { $eq: user.id } });
      // ********** posts **********
      // ********** examples **********
      can(Action.Read, Example);
      cannot(Action.Create, Example).because('only admin can');
      can(Action.Create, Example, { postId: { $in: ids_of_posts } });
      cannot(Action.Update, Example).because('only admin can');
      can(Action.Update, Example, { postId: { $in: ids_of_posts } });
      // ********** examples **********
      // ********** countries **********
      can(Action.Read, Country);
      cannot(Action.Create, Country).because('only admin can');
      cannot(Action.Update, Country).because('only admin can');
      cannot(Action.Delete, Country).because('only admin can');
      // ********** countries **********
    }
    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
