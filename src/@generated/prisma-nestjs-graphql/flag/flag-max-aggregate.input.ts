import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class FlagMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    reason?: true;

    @Field(() => Boolean, {nullable:true})
    content?: true;

    @Field(() => Boolean, {nullable:true})
    postId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}
