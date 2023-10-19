import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ExampleMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    content?: true;

    @Field(() => Boolean, {nullable:true})
    post_id?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;
}
