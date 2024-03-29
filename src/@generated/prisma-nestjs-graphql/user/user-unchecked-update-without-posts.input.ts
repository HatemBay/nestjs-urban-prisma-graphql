import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Role } from '../prisma/role.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { PostUncheckedUpdateManyWithoutLikedByNestedInput } from '../post/post-unchecked-update-many-without-liked-by-nested.input';
import { PostUncheckedUpdateManyWithoutDislikedByNestedInput } from '../post/post-unchecked-update-many-without-disliked-by-nested.input';
import { FlagUncheckedUpdateManyWithoutUserNestedInput } from '../flag/flag-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutPostsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    @Validator.MinLength(3)
    username?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;

    @Field(() => Boolean, {nullable:true})
    isU18?: boolean;

    @Field(() => Boolean, {nullable:true})
    emailVerified?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    googleId?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    googleProfile?: any;

    @Field(() => Int, {nullable:true})
    countryId?: number;

    @Field(() => PostUncheckedUpdateManyWithoutLikedByNestedInput, {nullable:true})
    likedPosts?: PostUncheckedUpdateManyWithoutLikedByNestedInput;

    @Field(() => PostUncheckedUpdateManyWithoutDislikedByNestedInput, {nullable:true})
    dislikedPosts?: PostUncheckedUpdateManyWithoutDislikedByNestedInput;

    @Field(() => FlagUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    flags?: FlagUncheckedUpdateManyWithoutUserNestedInput;
}
