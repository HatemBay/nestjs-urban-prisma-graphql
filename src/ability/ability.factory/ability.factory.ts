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

export enum Action {
  Manage = 'manage',
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
}

// export const SubjectList = [User, Post, Example];

export const SubjectList = {
  User: User,
  Post: Post,
  Example: Example,
};
// export const SubjectList = new Map<any, any>();
// SubjectList.set(User, User);
// SubjectList.set(Post, Post);
// SubjectList.set(Example, Example);

type SubjectListType = typeof SubjectList;
// export type Subjects = InferSubjects<SubjectList> | 'all';

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

    console.log('user_id');
    console.log(user.id);

    const ids_of_posts = user.posts?.map((post) => post.id);
    console.log('ids_of_posts');
    console.log(ids_of_posts);

    const userIsAdmin = role === Role.ADMIN;

    if (userIsAdmin) {
      can(Action.Manage, 'all');
    } else {
      // ********** users **********
      cannot(Action.Create, User).because('only admin can');
      cannot(Action.Read, User).because('only admin can');
      can(Action.Read, User, { id: { $in: [19, 9] } });
      cannot(Action.Update, User).because('can only edit self');
      can(Action.Update, User, { id: { $eq: user.id } });
      can(Action.Update, User, { email: { $eq: user.email } });
      can(Action.Update, User, { username: { $eq: user.username } });
      can(Action.Update, User, { google_id: { $eq: user.google_id } });
      cannot(Action.Delete, User).because('can only edit self');
      // ********** users **********
      // ********** posts **********
      can(Action.Create, Post);
      can(Action.Read, Post);
      cannot(Action.Update, Post).because('can only edit own posts');
      can(Action.Update, Post, { author_id: { $eq: user.id } });
      cannot(Action.Delete, Post).because('can only delete own posts');
      can(Action.Delete, Post, { author_id: { $eq: user.id } });
      // ********** posts **********
      // ********** examples **********
      cannot(Action.Create, Example).because('only admin can');
      can(Action.Create, Example, { post_id: { $in: ids_of_posts } });
      cannot(Action.Update, Example).because('only admin can');
      can(Action.Update, Example, { post_id: { $in: ids_of_posts } });
      // ********** examples **********
    }
    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
