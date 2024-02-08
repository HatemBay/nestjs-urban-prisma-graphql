import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { FlagListRelationFilter } from '../flag/flag-list-relation-filter.input';
import { ExampleNullableRelationFilter } from '../example/example-nullable-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';

@InputType()
export class PostWhereInput {

    @Field(() => [PostWhereInput], {nullable:true})
    AND?: Array<PostWhereInput>;

    @Field(() => [PostWhereInput], {nullable:true})
    OR?: Array<PostWhereInput>;

    @Field(() => [PostWhereInput], {nullable:true})
    NOT?: Array<PostWhereInput>;

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

    @Field(() => UserRelationFilter, {nullable:true})
    author?: UserRelationFilter;

    @Field(() => FlagListRelationFilter, {nullable:true})
    flags?: FlagListRelationFilter;

    @Field(() => ExampleNullableRelationFilter, {nullable:true})
    example?: ExampleNullableRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    likedBy?: UserListRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    dislikedBy?: UserListRelationFilter;
}
