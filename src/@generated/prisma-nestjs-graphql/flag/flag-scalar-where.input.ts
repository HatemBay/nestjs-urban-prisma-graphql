import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumReasonFilter } from '../prisma/enum-reason-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class FlagScalarWhereInput {

    @Field(() => [FlagScalarWhereInput], {nullable:true})
    AND?: Array<FlagScalarWhereInput>;

    @Field(() => [FlagScalarWhereInput], {nullable:true})
    OR?: Array<FlagScalarWhereInput>;

    @Field(() => [FlagScalarWhereInput], {nullable:true})
    NOT?: Array<FlagScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
}
