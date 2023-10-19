import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CountryUpdateManyMutationInput } from './country-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CountryWhereInput } from './country-where.input';

@ArgsType()
export class UpdateManyCountryArgs {

    @Field(() => CountryUpdateManyMutationInput, {nullable:false})
    @Type(() => CountryUpdateManyMutationInput)
    data!: CountryUpdateManyMutationInput;

    @Field(() => CountryWhereInput, {nullable:true})
    @Type(() => CountryWhereInput)
    where?: CountryWhereInput;
}
