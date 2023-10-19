import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CountryWhereInput } from './country-where.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';

@InputType()
export class CountryWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => [CountryWhereInput], {nullable:true})
    AND?: Array<CountryWhereInput>;

    @Field(() => [CountryWhereInput], {nullable:true})
    OR?: Array<CountryWhereInput>;

    @Field(() => [CountryWhereInput], {nullable:true})
    NOT?: Array<CountryWhereInput>;

    @Field(() => UserListRelationFilter, {nullable:true})
    users?: UserListRelationFilter;
}
