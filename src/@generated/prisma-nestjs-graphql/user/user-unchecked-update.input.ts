import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { isOptional } from 'class-validator';
import { Role } from '../prisma/role.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { PostUncheckedUpdateManyWithoutAuthorNestedInput } from '../post/post-unchecked-update-many-without-author-nested.input';

@InputType()
export class UserUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    @Validator.MinLength(3)
    @isOptional()
    username?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    @isOptional()
    email?: string;

    @Field(() => String, {nullable:true})
    @isOptional()
    password?: string;

    @Field(() => String, {nullable:true})
    @isOptional()
    name?: string;

    @Field(() => Role, {nullable:true})
    @isOptional()
    role?: keyof typeof Role;

    @Field(() => Boolean, {nullable:true})
    @isOptional()
    isU18?: boolean;

    @Field(() => Boolean, {nullable:true})
    @isOptional()
    emailVerified?: boolean;

    @Field(() => Date, {nullable:true})
    @isOptional()
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    @isOptional()
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    @isOptional()
    googleId?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    @isOptional()
    googleProfile?: any;

    @Field(() => Int, {nullable:true})
    @isOptional()
    countryId?: number;

    @Field(() => PostUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    @isOptional()
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
}
