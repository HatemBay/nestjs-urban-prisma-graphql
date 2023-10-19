import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyCountryInput } from './user-create-many-country.input';
import { Type } from 'class-transformer';

@InputType()
export class UserCreateManyCountryInputEnvelope {

    @Field(() => [UserCreateManyCountryInput], {nullable:false})
    @Type(() => UserCreateManyCountryInput)
    data!: Array<UserCreateManyCountryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
