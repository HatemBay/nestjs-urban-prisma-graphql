import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CountryCreateWithoutUsersInput {

    @Field(() => String, {nullable:false})
    name!: string;
}
