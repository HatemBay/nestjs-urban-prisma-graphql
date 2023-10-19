import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateManyWithoutCountryNestedInput } from '../user/user-update-many-without-country-nested.input';

@InputType()
export class CountryUpdateInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => UserUpdateManyWithoutCountryNestedInput, {nullable:true})
    users?: UserUpdateManyWithoutCountryNestedInput;
}
