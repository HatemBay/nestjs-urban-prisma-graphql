import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FlagWhereInput } from './flag-where.input';
import { EnumReasonFilter } from '../prisma/enum-reason-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PostRelationFilter } from '../post/post-relation-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';

@InputType()
export class FlagWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [FlagWhereInput], {nullable:true})
    AND?: Array<FlagWhereInput>;

    @Field(() => [FlagWhereInput], {nullable:true})
    OR?: Array<FlagWhereInput>;

    @Field(() => [FlagWhereInput], {nullable:true})
    NOT?: Array<FlagWhereInput>;

    @Field(() => EnumReasonFilter, {nullable:true})
    reason?: EnumReasonFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    content?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    postId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => PostRelationFilter, {nullable:true})
    Post?: PostRelationFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    User?: UserNullableRelationFilter;
}
