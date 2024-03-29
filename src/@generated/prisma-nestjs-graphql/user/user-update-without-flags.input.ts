import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Role } from '../prisma/role.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { PostUpdateManyWithoutAuthorNestedInput } from '../post/post-update-many-without-author-nested.input';
import { PostUpdateManyWithoutLikedByNestedInput } from '../post/post-update-many-without-liked-by-nested.input';
import { PostUpdateManyWithoutDislikedByNestedInput } from '../post/post-update-many-without-disliked-by-nested.input';
import { CountryUpdateOneWithoutUsersNestedInput } from '../country/country-update-one-without-users-nested.input';

@InputType()
export class UserUpdateWithoutFlagsInput {

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

    @Field(() => PostUpdateManyWithoutAuthorNestedInput, {nullable:true})
    posts?: PostUpdateManyWithoutAuthorNestedInput;

    @Field(() => PostUpdateManyWithoutLikedByNestedInput, {nullable:true})
    likedPosts?: PostUpdateManyWithoutLikedByNestedInput;

    @Field(() => PostUpdateManyWithoutDislikedByNestedInput, {nullable:true})
    dislikedPosts?: PostUpdateManyWithoutDislikedByNestedInput;

    @Field(() => CountryUpdateOneWithoutUsersNestedInput, {nullable:true})
    country?: CountryUpdateOneWithoutUsersNestedInput;
}
