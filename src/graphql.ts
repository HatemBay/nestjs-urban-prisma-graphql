/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  GUEST = 'GUEST',
}

export class CreateUserInput {
  exampleField?: Nullable<number>;
}

export class UpdateUserInput {
  id: number;
}

export class User {
  id?: Nullable<string>;
  username: string;
  email: string;
  password: string;
  name?: Nullable<string>;
  role: Role;
  is_u_18?: Nullable<boolean>;
}

export abstract class IQuery {
  abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

  abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
  abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

  abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

  abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
