import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PostSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    likes_count?: number;

    @Field(() => Int, {nullable:true})
    dislikes_count?: number;

    @Field(() => Int, {nullable:true})
    author_id?: number;
}
