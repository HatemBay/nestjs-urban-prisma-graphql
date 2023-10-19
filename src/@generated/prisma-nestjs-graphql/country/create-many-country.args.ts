import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CountryCreateManyInput } from './country-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCountryArgs {

    @Field(() => [CountryCreateManyInput], {nullable:false})
    @Type(() => CountryCreateManyInput)
    data!: Array<CountryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
