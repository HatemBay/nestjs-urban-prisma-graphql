import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ExampleWhereInput } from './example-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PostRelationFilter } from '../post/post-relation-filter.input';

@InputType()
export class ExampleWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    postId?: number;

    @Field(() => [ExampleWhereInput], {nullable:true})
    AND?: Array<ExampleWhereInput>;

    @Field(() => [ExampleWhereInput], {nullable:true})
    OR?: Array<ExampleWhereInput>;

    @Field(() => [ExampleWhereInput], {nullable:true})
    NOT?: Array<ExampleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    contentArabic?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    contentEnglish?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    contentFrench?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => PostRelationFilter, {nullable:true})
    post?: PostRelationFilter;
}
