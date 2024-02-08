import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Role } from '../prisma/role.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { PostCreateNestedManyWithoutAuthorInput } from '../post/post-create-nested-many-without-author.input';
import { PostCreateNestedManyWithoutLikedByInput } from '../post/post-create-nested-many-without-liked-by.input';
import { PostCreateNestedManyWithoutDislikedByInput } from '../post/post-create-nested-many-without-disliked-by.input';
import { CountryCreateNestedOneWithoutUsersInput } from '../country/country-create-nested-one-without-users.input';

@InputType()
export class UserCreateWithoutFlagsInput {

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

    @Field(() => PostCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: PostCreateNestedManyWithoutAuthorInput;

    @Field(() => PostCreateNestedManyWithoutLikedByInput, {nullable:true})
    likedPosts?: PostCreateNestedManyWithoutLikedByInput;

    @Field(() => PostCreateNestedManyWithoutDislikedByInput, {nullable:true})
    dislikedPosts?: PostCreateNestedManyWithoutDislikedByInput;

    @Field(() => CountryCreateNestedOneWithoutUsersInput, {nullable:true})
    country?: CountryCreateNestedOneWithoutUsersInput;
}
