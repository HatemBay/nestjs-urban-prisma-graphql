import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserUncheckedUpdateManyWithoutCountryNestedInput } from '../user/user-unchecked-update-many-without-country-nested.input';

@InputType()
export class CountryUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => UserUncheckedUpdateManyWithoutCountryNestedInput, {nullable:true})
    users?: UserUncheckedUpdateManyWithoutCountryNestedInput;
}
