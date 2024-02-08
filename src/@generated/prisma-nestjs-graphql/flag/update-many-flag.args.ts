import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlagUpdateManyMutationInput } from './flag-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FlagWhereInput } from './flag-where.input';

@ArgsType()
export class UpdateManyFlagArgs {

    @Field(() => FlagUpdateManyMutationInput, {nullable:false})
    @Type(() => FlagUpdateManyMutationInput)
    data!: FlagUpdateManyMutationInput;

    @Field(() => FlagWhereInput, {nullable:true})
    @Type(() => FlagWhereInput)
    where?: FlagWhereInput;
}
