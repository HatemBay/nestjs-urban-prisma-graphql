import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    posts?: number;

    @Field(() => Int, {nullable:false})
    likedPosts?: number;

    @Field(() => Int, {nullable:false})
    dislikedPosts?: number;

    @Field(() => Int, {nullable:false})
    flags?: number;
}
