import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PostRelationFilter } from '../post/post-relation-filter.input';

@InputType()
export class ExampleWhereInput {

    @Field(() => [ExampleWhereInput], {nullable:true})
    AND?: Array<ExampleWhereInput>;

    @Field(() => [ExampleWhereInput], {nullable:true})
    OR?: Array<ExampleWhereInput>;

    @Field(() => [ExampleWhereInput], {nullable:true})
    NOT?: Array<ExampleWhereInput>;

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

    @Field(() => PostRelationFilter, {nullable:true})
    post?: PostRelationFilter;
}
