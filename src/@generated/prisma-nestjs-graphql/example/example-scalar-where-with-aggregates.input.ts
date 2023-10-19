import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ExampleScalarWhereWithAggregatesInput {

    @Field(() => [ExampleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ExampleScalarWhereWithAggregatesInput>;

    @Field(() => [ExampleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ExampleScalarWhereWithAggregatesInput>;

    @Field(() => [ExampleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ExampleScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    content?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    post_id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
