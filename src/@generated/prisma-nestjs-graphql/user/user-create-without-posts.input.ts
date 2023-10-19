import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Role } from '../prisma/role.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { CountryCreateNestedOneWithoutUsersInput } from '../country/country-create-nested-one-without-users.input';

@InputType()
export class UserCreateWithoutPostsInput {

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
    is_u_18?: boolean;

    @Field(() => Boolean, {nullable:true})
    email_verified?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    google_id?: string;

    @Field(() => GraphQLJSON, {nullable:true})
    google_profile?: any;

    @Field(() => CountryCreateNestedOneWithoutUsersInput, {nullable:true})
    country?: CountryCreateNestedOneWithoutUsersInput;
}
