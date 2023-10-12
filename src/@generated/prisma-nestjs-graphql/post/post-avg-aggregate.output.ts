import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PostAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    likes_count?: number;

    @Field(() => Float, {nullable:true})
    dislikes_count?: number;

    @Field(() => Float, {nullable:true})
    author_id?: number;
}
