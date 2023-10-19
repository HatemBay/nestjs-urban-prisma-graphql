import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryUpdateWithoutUsersInput } from './country-update-without-users.input';
import { Type } from 'class-transformer';
import { CountryCreateWithoutUsersInput } from './country-create-without-users.input';
import { CountryWhereInput } from './country-where.input';

@InputType()
export class CountryUpsertWithoutUsersInput {

    @Field(() => CountryUpdateWithoutUsersInput, {nullable:false})
    @Type(() => CountryUpdateWithoutUsersInput)
    update!: CountryUpdateWithoutUsersInput;

    @Field(() => CountryCreateWithoutUsersInput, {nullable:false})
    @Type(() => CountryCreateWithoutUsersInput)
    create!: CountryCreateWithoutUsersInput;

    @Field(() => CountryWhereInput, {nullable:true})
    @Type(() => CountryWhereInput)
    where?: CountryWhereInput;
}
