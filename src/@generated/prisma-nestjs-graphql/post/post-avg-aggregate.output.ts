import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PostAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    likesCount?: number;

    @Field(() => Float, {nullable:true})
    dislikesCount?: number;

    @Field(() => Float, {nullable:true})
    authorId?: number;
}
