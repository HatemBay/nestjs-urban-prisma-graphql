/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Reason {
  PRIVATE = 'PRIVATE',
  OFFENSIVE = 'OFFENSIVE',
  TABOO = 'TABOO',
  OTHER = 'OTHER',
}

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  GUEST = 'GUEST',
}

export class CreateCountryInput {
  name: string;
}

export class CreateExampleInput {
  contentArabic: string;
  contentEnglish?: Nullable<string>;
  contentFrench?: Nullable<string>;
  postId: number;
}

export class CreateFlagInput {
  reason: Reason;
  content?: Nullable<string>;
  postId: number;
  userId: number;
}

export class CreatePostInput {
  titleArabic: string;
  titleLatin?: Nullable<string>;
  contentArabic: string;
  contentEnglish?: Nullable<string>;
  contentFrench?: Nullable<string>;
  isU18?: Nullable<boolean>;
  likedBy?: Nullable<FindUserInput[]>;
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

export class FindCountryInput {
  id?: Nullable<number>;
  name?: Nullable<string>;
}

export class FindExampleInput {
  id: number;
}

export class FindFlagInput {
  id: number;
}

export class FindPostInput {
  id: number;
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

export class LoginUserInput {
  username: string;
  password: string;
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

export class ReactToPostInput {
  likesCount?: Nullable<number>;
  dislikesCount?: Nullable<number>;
  likedBy?: Nullable<FindUserInput[]>;
  dislikedBy?: Nullable<FindUserInput[]>;
}

export class UpdateCountryInput {
  id: number;
  name: string;
}

export class UpdateExampleInput {
  contentArabic?: Nullable<string>;
  contentEnglish?: Nullable<string>;
  contentFrench?: Nullable<string>;
}

export class UpdateFlagInput {
  reason?: Nullable<Reason>;
  content?: Nullable<string>;
}

export class UpdatePostInput {
  titleArabic?: Nullable<string>;
  titleLatin?: Nullable<string>;
  contentArabic?: Nullable<string>;
  contentEnglish?: Nullable<string>;
  contentFrench?: Nullable<string>;
  likesCount?: Nullable<number>;
  dislikesCount?: Nullable<number>;
  likedBy?: Nullable<FindUserInput[]>;
  dislikedBy?: Nullable<FindUserInput[]>;
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
  likedPosts?: Nullable<Nullable<FindPostInput>[]>;
  dislikedPosts?: Nullable<Nullable<FindPostInput>[]>;
}

export class Country {
  id: number;
  name: string;
  users?: Nullable<Nullable<User>[]>;
}

export class Example {
  id: number;
  contentArabic: string;
  contentEnglish?: Nullable<string>;
  contentFrench?: Nullable<string>;
  post?: Nullable<Post>;
  postId: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export class Flag {
  id: number;
  reason: Reason;
  content?: Nullable<string>;
  post: Post;
  postId: number;
  user?: Nullable<User>;
  userId?: Nullable<number>;
  createdAt: DateTime;
}

export class LoginResponse {
  accessToken: string;
  user: UserLoginResponse;
}

export abstract class IMutation {
  abstract createCountry(
    createCountryInput: CreateCountryInput,
  ): Country | Promise<Country>;

  abstract updateCountry(
    findCountryInput: FindCountryInput,
    updateCountryInput: UpdateCountryInput,
  ): Country | Promise<Country>;

  abstract removeCountry(
    id: number,
  ): Nullable<Country> | Promise<Nullable<Country>>;

  abstract createExample(
    createExampleInput: CreateExampleInput,
  ): Example | Promise<Example>;

  abstract updateExample(
    findExampleInput: FindExampleInput,
    updateExampleInput: UpdateExampleInput,
  ): Example | Promise<Example>;

  abstract removeExample(
    findExampleInput: FindExampleInput,
  ): Nullable<Example> | Promise<Nullable<Example>>;

  abstract createFlag(createFlagInput: CreateFlagInput): Flag | Promise<Flag>;

  abstract updateFlag(
    findFlagInput: FindFlagInput,
    updateFlagInput: UpdateFlagInput,
  ): Flag | Promise<Flag>;

  abstract removeFlag(
    findFlagInput: FindFlagInput,
  ): Nullable<Flag> | Promise<Nullable<Flag>>;

  abstract createPost(createPostInput: CreatePostInput): Post | Promise<Post>;

  abstract updatePost(
    findPostInput: FindPostInput,
    updatePostInput: UpdatePostInput,
  ): Post | Promise<Post>;

  abstract removePost(
    findPostInput: FindPostInput,
  ): Nullable<Post> | Promise<Nullable<Post>>;

  abstract likePost(
    findPostInput: FindPostInput,
  ): Nullable<Post> | Promise<Nullable<Post>>;

  abstract unlikePost(
    findPostInput: FindPostInput,
  ): Nullable<Post> | Promise<Nullable<Post>>;

  abstract dislikePost(
    findPostInput: FindPostInput,
  ): Nullable<Post> | Promise<Nullable<Post>>;

  abstract undislikePost(
    findPostInput: FindPostInput,
  ): Nullable<Post> | Promise<Nullable<Post>>;

  abstract login(
    LoginUserInput: LoginUserInput,
  ): LoginResponse | Promise<LoginResponse>;

  abstract signup(createUserInput: CreateUserInput): User | Promise<User>;

  abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

  abstract updateUser(
    findUserInput: FindUserInput,
    updateUserInput: UpdateUserInput,
  ): User | Promise<User>;

  abstract removeUser(
    findUserInput: FindUserInput,
  ): Nullable<User> | Promise<Nullable<User>>;

  abstract googleAuth(
    googleAuthInput: GoogleAuthInput,
  ): LoginResponse | Promise<LoginResponse>;
}

export class PaginatedPosts {
  pagination: PaginationOptions;
  data: Nullable<Post>[];
}

export class PaginationOptions {
  totalCount: number;
}

export class Post {
  id: number;
  author?: Nullable<User>;
  authorId: number;
  titleArabic: string;
  titleLatin?: Nullable<string>;
  contentArabic: string;
  contentEnglish?: Nullable<string>;
  contentFrench?: Nullable<string>;
  published?: Nullable<boolean>;
  isU18?: Nullable<boolean>;
  likesCount?: Nullable<number>;
  dislikesCount?: Nullable<number>;
  example?: Nullable<Example>;
  createdAt: DateTime;
  updatedAt: DateTime;
  likedBy?: Nullable<Nullable<User>[]>;
  dislikedBy?: Nullable<Nullable<User>[]>;
  flags?: Nullable<Nullable<Flag>[]>;
}

export abstract class IQuery {
  abstract countries(): Nullable<Country>[] | Promise<Nullable<Country>[]>;

  abstract country(id: number): Nullable<Country> | Promise<Nullable<Country>>;

  abstract examples(): Nullable<Example>[] | Promise<Nullable<Example>[]>;

  abstract example(id: number): Nullable<Example> | Promise<Nullable<Example>>;

  abstract flags(): Nullable<Flag>[] | Promise<Nullable<Flag>[]>;

  abstract flag(id: number): Nullable<Flag> | Promise<Nullable<Flag>>;

  abstract posts(
    orderBy?: Nullable<OrderByParams>,
    pagination?: Nullable<PaginationParams>,
    randomize?: Nullable<boolean>,
    authorId?: Nullable<number>,
  ): PaginatedPosts | Promise<PaginatedPosts>;

  abstract post(id: number): Nullable<Post> | Promise<Nullable<Post>>;

  abstract users(
    orderBy?: Nullable<OrderByParams>,
    pagination?: Nullable<PaginationParams>,
  ): Nullable<User>[] | Promise<Nullable<User>[]>;

  abstract user(
    findUserInput: FindUserInput,
  ): Nullable<User> | Promise<Nullable<User>>;
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
  likedPosts?: Nullable<Nullable<Post>[]>;
  dislikedPosts?: Nullable<Nullable<Post>[]>;
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
