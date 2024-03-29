import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Role } from '../prisma/role.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { PostUncheckedCreateNestedManyWithoutLikedByInput } from '../post/post-unchecked-create-nested-many-without-liked-by.input';
import { PostUncheckedCreateNestedManyWithoutDislikedByInput } from '../post/post-unchecked-create-nested-many-without-disliked-by.input';
import { FlagUncheckedCreateNestedManyWithoutUserInput } from '../flag/flag-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutPostsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    username!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

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

    @Field(() => PostUncheckedCreateNestedManyWithoutLikedByInput, {nullable:true})
    likedPosts?: PostUncheckedCreateNestedManyWithoutLikedByInput;

    @Field(() => PostUncheckedCreateNestedManyWithoutDislikedByInput, {nullable:true})
    dislikedPosts?: PostUncheckedCreateNestedManyWithoutDislikedByInput;

    @Field(() => FlagUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    flags?: FlagUncheckedCreateNestedManyWithoutUserInput;
}
