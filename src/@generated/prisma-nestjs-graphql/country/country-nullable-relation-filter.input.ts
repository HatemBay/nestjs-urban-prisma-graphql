import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryWhereInput } from './country-where.input';

@InputType()
export class CountryNullableRelationFilter {

    @Field(() => CountryWhereInput, {nullable:true})
    is?: CountryWhereInput;

    @Field(() => CountryWhereInput, {nullable:true})
    isNot?: CountryWhereInput;
}
