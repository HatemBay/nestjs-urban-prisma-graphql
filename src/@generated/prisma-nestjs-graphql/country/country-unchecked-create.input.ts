import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutCountryInput } from '../user/user-unchecked-create-nested-many-without-country.input';

@InputType()
export class CountryUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => UserUncheckedCreateNestedManyWithoutCountryInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutCountryInput;
}
