
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
    GUEST = "GUEST"
}

export class CreateUserInput {
    username: string;
    email: string;
    password: string;
    name?: Nullable<string>;
    role: Role;
    is_u_18?: Nullable<boolean>;
    created_at?: Nullable<DateTime>;
    updated_at?: Nullable<DateTime>;
}

export class UpdateUserInput {
    username?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    name?: Nullable<string>;
    role?: Nullable<Role>;
    is_u_18?: Nullable<boolean>;
    updated_at?: Nullable<DateTime>;
}

export class FindUserInput {
    id?: Nullable<number>;
    username?: Nullable<string>;
    email?: Nullable<string>;
}

export class User {
    id: number;
    username: string;
    email: string;
    password: string;
    name?: Nullable<string>;
    role: Role;
    is_u_18?: Nullable<boolean>;
    created_at: DateTime;
    updated_at: DateTime;
}

export abstract class IQuery {
    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(findUserInput: FindUserInput): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(findUserInput: FindUserInput, updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(findUserInput: FindUserInput): Nullable<User> | Promise<Nullable<User>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
