import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PostAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    likesCount?: true;

    @Field(() => Boolean, {nullable:true})
    dislikesCount?: true;

    @Field(() => Boolean, {nullable:true})
    authorId?: true;
}
