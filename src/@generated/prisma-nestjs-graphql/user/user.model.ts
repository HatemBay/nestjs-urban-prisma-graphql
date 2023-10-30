import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { Post } from '../post/post.model';
import { Country } from '../country/country.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    username!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    password!: string | null;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => Role, {nullable:false,defaultValue:'USER'})
    role!: keyof typeof Role;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isU18!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    emailVerified!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    googleId!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    googleProfile!: any | null;

    @Field(() => Int, {nullable:true})
    countryId!: number | null;

    @Field(() => [Post], {nullable:true})
    posts?: Array<Post>;

    @Field(() => Country, {nullable:true})
    country?: Country | null;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
