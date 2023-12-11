import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PostScalarWhereInput {

    @Field(() => [PostScalarWhereInput], {nullable:true})
    AND?: Array<PostScalarWhereInput>;

    @Field(() => [PostScalarWhereInput], {nullable:true})
    OR?: Array<PostScalarWhereInput>;

    @Field(() => [PostScalarWhereInput], {nullable:true})
    NOT?: Array<PostScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    titleArabic?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    titleLatin?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    contentArabic?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    contentEnglish?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    contentFrench?: StringFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    published?: BoolNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    likesCount?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    dislikesCount?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    authorId?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    isU18?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
