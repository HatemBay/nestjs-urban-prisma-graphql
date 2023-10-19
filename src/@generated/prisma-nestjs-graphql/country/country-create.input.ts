import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutCountryInput } from '../user/user-create-nested-many-without-country.input';

@InputType()
export class CountryCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => UserCreateNestedManyWithoutCountryInput, {nullable:true})
    users?: UserCreateNestedManyWithoutCountryInput;
}
