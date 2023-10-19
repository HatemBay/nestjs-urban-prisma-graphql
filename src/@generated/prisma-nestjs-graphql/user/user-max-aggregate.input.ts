import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    username?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    password?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    role?: true;

    @Field(() => Boolean, {nullable:true})
    is_u_18?: true;

    @Field(() => Boolean, {nullable:true})
    email_verified?: true;

    @Field(() => Boolean, {nullable:true})
    created_at?: true;

    @Field(() => Boolean, {nullable:true})
    updated_at?: true;

    @Field(() => Boolean, {nullable:true})
    google_id?: true;

    @Field(() => Boolean, {nullable:true})
    country_id?: true;
}
