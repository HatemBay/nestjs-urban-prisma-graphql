
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

export class CreateCountryInput {
    name: string;
}

export class UpdateCountryInput {
    id: number;
    name: string;
}

export class FindCountryInput {
    id?: Nullable<number>;
    name?: Nullable<string>;
}

export class CreateExampleInput {
    content: string;
    postId: number;
}

export class UpdateExampleInput {
    content?: Nullable<string>;
}

export class FindExampleInput {
    id: number;
}

export class CreatePostInput {
    title: string;
    content: string;
    isU18?: Nullable<boolean>;
}

export class UpdatePostInput {
    title?: Nullable<string>;
    content?: Nullable<string>;
}

export class FindPostInput {
    id: number;
}

export class OrderByParams {
    field?: Nullable<string>;
    direction?: Nullable<string>;
}

export class PaginationParams {
    page?: Nullable<number>;
    take?: Nullable<number>;
    filter?: Nullable<string>;
}

export class CreateUserInput {
    username: string;
    email: string;
    password?: Nullable<string>;
    name?: Nullable<string>;
    role?: Nullable<Role>;
    isU18?: Nullable<boolean>;
    emailVerified?: Nullable<boolean>;
    createdAt?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    googleId?: Nullable<string>;
    googleProfile?: Nullable<JSON>;
}

export class UpdateUserInput {
    username?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    name?: Nullable<string>;
    role?: Nullable<Role>;
    emailVerified?: Nullable<boolean>;
    isU18?: Nullable<boolean>;
    updatedAt?: Nullable<DateTime>;
    googleId?: Nullable<string>;
    googleProfile?: Nullable<JSON>;
}

export class LoginUserInput {
    username: string;
    password: string;
}

export class FindUserInput {
    id?: Nullable<number>;
    username?: Nullable<string>;
    email?: Nullable<string>;
    googleId?: Nullable<string>;
}

export class GoogleAuthInput {
    email?: Nullable<string>;
}

export class Country {
    id: number;
    name: string;
    users?: Nullable<Nullable<User>[]>;
}

export abstract class IQuery {
    abstract countries(): Nullable<Country>[] | Promise<Nullable<Country>[]>;

    abstract country(id: number): Nullable<Country> | Promise<Nullable<Country>>;

    abstract examples(): Nullable<Example>[] | Promise<Nullable<Example>[]>;

    abstract example(id: number): Nullable<Example> | Promise<Nullable<Example>>;

    abstract posts(orderBy?: Nullable<OrderByParams>, pagination?: Nullable<PaginationParams>): Nullable<Post>[] | Promise<Nullable<Post>[]>;

    abstract post(id: number): Nullable<Post> | Promise<Nullable<Post>>;

    abstract users(orderBy?: Nullable<OrderByParams>, pagination?: Nullable<PaginationParams>): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(findUserInput: FindUserInput): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createCountry(createCountryInput: CreateCountryInput): Country | Promise<Country>;

    abstract updateCountry(findCountryInput: FindCountryInput, updateCountryInput: UpdateCountryInput): Country | Promise<Country>;

    abstract removeCountry(id: number): Nullable<Country> | Promise<Nullable<Country>>;

    abstract createExample(createExampleInput: CreateExampleInput): Example | Promise<Example>;

    abstract updateExample(findExampleInput: FindExampleInput, updateExampleInput: UpdateExampleInput): Example | Promise<Example>;

    abstract removeExample(id: number): Nullable<Example> | Promise<Nullable<Example>>;

    abstract createPost(createPostInput: CreatePostInput): Post | Promise<Post>;

    abstract updatePost(findPostInput: FindPostInput, updatePostInput: UpdatePostInput): Post | Promise<Post>;

    abstract removePost(id: number): Nullable<Post> | Promise<Nullable<Post>>;

    abstract login(LoginUserInput: LoginUserInput): LoginResponse | Promise<LoginResponse>;

    abstract signup(createUserInput: CreateUserInput): User | Promise<User>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(findUserInput: FindUserInput, updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(findUserInput: FindUserInput): Nullable<User> | Promise<Nullable<User>>;

    abstract googleAuth(googleAuthInput: GoogleAuthInput): LoginResponse | Promise<LoginResponse>;
}

export class Example {
    id: number;
    content: string;
    post?: Nullable<Post>;
    postId: number;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class Post {
    id: number;
    author?: Nullable<User>;
    authorId: number;
    title: string;
    content: string;
    published?: Nullable<boolean>;
    isU18?: Nullable<boolean>;
    likesCount?: Nullable<number>;
    dislikesCount?: Nullable<number>;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class User {
    id: number;
    username: string;
    email: string;
    password?: Nullable<string>;
    name?: Nullable<string>;
    role?: Nullable<Role>;
    isU18?: Nullable<boolean>;
    emailVerified?: Nullable<boolean>;
    createdAt: DateTime;
    updatedAt: DateTime;
    posts?: Nullable<Nullable<Post>[]>;
    country?: Nullable<Country>;
    countryId?: Nullable<number>;
    googleId?: Nullable<string>;
    googleProfile?: Nullable<JSON>;
}

export class LoginResponse {
    accessToken: string;
    user: UserLoginResponse;
}

export class UserLoginResponse {
    id: number;
    username: string;
    email: string;
    password?: Nullable<string>;
    name?: Nullable<string>;
    role?: Nullable<Role>;
    isU18?: Nullable<boolean>;
    emailVerified?: Nullable<boolean>;
    createdAt: DateTime;
    updatedAt: DateTime;
    googleId?: Nullable<string>;
    googleProfile?: Nullable<JSON>;
}

export type DateTime = any;
export type JSON = any;
type Nullable<T> = T | null;
