import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryWhereInput } from './country-where.input';
import { Type } from 'class-transformer';
import { CountryUpdateWithoutUsersInput } from './country-update-without-users.input';

@InputType()
export class CountryUpdateToOneWithWhereWithoutUsersInput {

    @Field(() => CountryWhereInput, {nullable:true})
    @Type(() => CountryWhereInput)
    where?: CountryWhereInput;

    @Field(() => CountryUpdateWithoutUsersInput, {nullable:false})
    @Type(() => CountryUpdateWithoutUsersInput)
    data!: CountryUpdateWithoutUsersInput;
}
