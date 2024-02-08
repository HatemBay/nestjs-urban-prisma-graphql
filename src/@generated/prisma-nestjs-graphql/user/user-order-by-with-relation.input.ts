import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PostOrderByRelationAggregateInput } from '../post/post-order-by-relation-aggregate.input';
import { CountryOrderByWithRelationInput } from '../country/country-order-by-with-relation.input';
import { FlagOrderByRelationAggregateInput } from '../flag/flag-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    password?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    name?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isU18?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    emailVerified?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    googleId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    googleProfile?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    countryId?: SortOrderInput;

    @Field(() => PostOrderByRelationAggregateInput, {nullable:true})
    posts?: PostOrderByRelationAggregateInput;

    @Field(() => PostOrderByRelationAggregateInput, {nullable:true})
    likedPosts?: PostOrderByRelationAggregateInput;

    @Field(() => PostOrderByRelationAggregateInput, {nullable:true})
    dislikedPosts?: PostOrderByRelationAggregateInput;

    @Field(() => CountryOrderByWithRelationInput, {nullable:true})
    country?: CountryOrderByWithRelationInput;

    @Field(() => FlagOrderByRelationAggregateInput, {nullable:true})
    flags?: FlagOrderByRelationAggregateInput;
}
