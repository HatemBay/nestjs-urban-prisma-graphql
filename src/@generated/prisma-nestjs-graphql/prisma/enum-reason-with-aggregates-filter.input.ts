import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Reason } from './reason.enum';
import { NestedEnumReasonWithAggregatesFilter } from './nested-enum-reason-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumReasonFilter } from './nested-enum-reason-filter.input';

@InputType()
export class EnumReasonWithAggregatesFilter {

    @Field(() => Reason, {nullable:true})
    equals?: keyof typeof Reason;

    @Field(() => [Reason], {nullable:true})
    in?: Array<keyof typeof Reason>;

    @Field(() => [Reason], {nullable:true})
    notIn?: Array<keyof typeof Reason>;

    @Field(() => NestedEnumReasonWithAggregatesFilter, {nullable:true})
    not?: NestedEnumReasonWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumReasonFilter, {nullable:true})
    _min?: NestedEnumReasonFilter;

    @Field(() => NestedEnumReasonFilter, {nullable:true})
    _max?: NestedEnumReasonFilter;
}
