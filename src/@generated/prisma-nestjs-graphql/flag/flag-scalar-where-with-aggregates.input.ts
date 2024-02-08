import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumReasonWithAggregatesFilter } from '../prisma/enum-reason-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class FlagScalarWhereWithAggregatesInput {

    @Field(() => [FlagScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FlagScalarWhereWithAggregatesInput>;

    @Field(() => [FlagScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FlagScalarWhereWithAggregatesInput>;

    @Field(() => [FlagScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FlagScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => EnumReasonWithAggregatesFilter, {nullable:true})
    reason?: EnumReasonWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    content?: StringNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    postId?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    userId?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
