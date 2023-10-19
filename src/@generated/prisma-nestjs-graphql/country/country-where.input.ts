import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';

@InputType()
export class CountryWhereInput {

    @Field(() => [CountryWhereInput], {nullable:true})
    AND?: Array<CountryWhereInput>;

    @Field(() => [CountryWhereInput], {nullable:true})
    OR?: Array<CountryWhereInput>;

    @Field(() => [CountryWhereInput], {nullable:true})
    NOT?: Array<CountryWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    users?: UserListRelationFilter;
}
