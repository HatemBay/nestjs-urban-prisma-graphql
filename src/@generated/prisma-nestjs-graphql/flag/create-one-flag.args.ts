import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlagCreateInput } from './flag-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFlagArgs {

    @Field(() => FlagCreateInput, {nullable:false})
    @Type(() => FlagCreateInput)
    data!: FlagCreateInput;
}
