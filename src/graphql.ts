
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
    post_id: number;
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
    is_u_18?: Nullable<boolean>;
}

export class UpdatePostInput {
    title?: Nullable<string>;
    content?: Nullable<string>;
}

export class FindPostInput {
    id: number;
}

export class CreateUserInput {
    username: string;
    email: string;
    password?: Nullable<string>;
    name?: Nullable<string>;
    role?: Nullable<Role>;
    is_u_18?: Nullable<boolean>;
    email_verified?: Nullable<boolean>;
    created_at?: Nullable<DateTime>;
    updated_at?: Nullable<DateTime>;
    google_id?: Nullable<string>;
    google_profile?: Nullable<JSON>;
}

export class UpdateUserInput {
    username?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<string>;
    name?: Nullable<string>;
    role?: Nullable<Role>;
    email_verified?: Nullable<boolean>;
    is_u_18?: Nullable<boolean>;
    updated_at?: Nullable<DateTime>;
    google_id?: Nullable<string>;
    google_profile?: Nullable<JSON>;
}

export class LoginUserInput {
    username: string;
    password: string;
}

export class FindUserInput {
    id?: Nullable<number>;
    username?: Nullable<string>;
    email?: Nullable<string>;
    google_id?: Nullable<string>;
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

    abstract posts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;

    abstract post(id: number): Nullable<Post> | Promise<Nullable<Post>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

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
    post_id: number;
    created_at: DateTime;
    updated_at: DateTime;
}

export class Post {
    id: number;
    author?: Nullable<User>;
    author_id: number;
    title: string;
    content: string;
    published?: Nullable<boolean>;
    is_u_18?: Nullable<boolean>;
    email_verified?: Nullable<boolean>;
    likes_count?: Nullable<number>;
    dislikes_count?: Nullable<number>;
    created_at: DateTime;
    updated_at: DateTime;
}

export class User {
    id: number;
    username: string;
    email: string;
    password?: Nullable<string>;
    name?: Nullable<string>;
    role?: Nullable<Role>;
    is_u_18?: Nullable<boolean>;
    email_verified?: Nullable<boolean>;
    created_at: DateTime;
    updated_at: DateTime;
    posts?: Nullable<Nullable<Post>[]>;
    country?: Nullable<Country>;
    country_id: number;
    google_id?: Nullable<string>;
    google_profile?: Nullable<JSON>;
}

export class LoginResponse {
    access_token: string;
    user: UserLoginResponse;
}

export class UserLoginResponse {
    id: number;
    username: string;
    email: string;
    password?: Nullable<string>;
    name?: Nullable<string>;
    role?: Nullable<Role>;
    is_u_18?: Nullable<boolean>;
    email_verified?: Nullable<boolean>;
    created_at: DateTime;
    updated_at: DateTime;
    google_id?: Nullable<string>;
    google_profile?: Nullable<JSON>;
}

export type DateTime = any;
export type JSON = any;
type Nullable<T> = T | null;
