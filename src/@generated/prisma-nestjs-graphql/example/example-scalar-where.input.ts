import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ExampleScalarWhereInput {

    @Field(() => [ExampleScalarWhereInput], {nullable:true})
    AND?: Array<ExampleScalarWhereInput>;

    @Field(() => [ExampleScalarWhereInput], {nullable:true})
    OR?: Array<ExampleScalarWhereInput>;

    @Field(() => [ExampleScalarWhereInput], {nullable:true})
    NOT?: Array<ExampleScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    post_id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
