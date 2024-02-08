import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlagCreateManyInput } from './flag-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFlagArgs {

    @Field(() => [FlagCreateManyInput], {nullable:false})
    @Type(() => FlagCreateManyInput)
    data!: Array<FlagCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
