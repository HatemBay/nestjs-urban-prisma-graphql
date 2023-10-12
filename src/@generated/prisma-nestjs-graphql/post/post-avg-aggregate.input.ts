import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PostAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    likes_count?: true;

    @Field(() => Boolean, {nullable:true})
    dislikes_count?: true;

    @Field(() => Boolean, {nullable:true})
    author_id?: true;
}
