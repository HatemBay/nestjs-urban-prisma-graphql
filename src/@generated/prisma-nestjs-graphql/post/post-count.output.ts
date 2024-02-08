import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PostCount {

    @Field(() => Int, {nullable:false})
    flags?: number;

    @Field(() => Int, {nullable:false})
    likedBy?: number;

    @Field(() => Int, {nullable:false})
    dislikedBy?: number;
}
