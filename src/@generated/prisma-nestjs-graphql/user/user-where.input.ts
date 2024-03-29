import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { PostListRelationFilter } from '../post/post-list-relation-filter.input';
import { CountryNullableRelationFilter } from '../country/country-nullable-relation-filter.input';
import { FlagListRelationFilter } from '../flag/flag-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    username?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    password?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    role?: EnumRoleFilter;

    @Field(() => BoolFilter, {nullable:true})
    isU18?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    emailVerified?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    googleId?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    googleProfile?: JsonNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    countryId?: IntNullableFilter;

    @Field(() => PostListRelationFilter, {nullable:true})
    posts?: PostListRelationFilter;

    @Field(() => PostListRelationFilter, {nullable:true})
    likedPosts?: PostListRelationFilter;

    @Field(() => PostListRelationFilter, {nullable:true})
    dislikedPosts?: PostListRelationFilter;

    @Field(() => CountryNullableRelationFilter, {nullable:true})
    country?: CountryNullableRelationFilter;

    @Field(() => FlagListRelationFilter, {nullable:true})
    flags?: FlagListRelationFilter;
}
