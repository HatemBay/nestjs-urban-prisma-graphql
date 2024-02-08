import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlagWhereInput } from './flag-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFlagArgs {

    @Field(() => FlagWhereInput, {nullable:true})
    @Type(() => FlagWhereInput)
    where?: FlagWhereInput;
}
