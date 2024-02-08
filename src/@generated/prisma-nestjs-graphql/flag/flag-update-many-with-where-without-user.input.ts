import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FlagScalarWhereInput } from './flag-scalar-where.input';
import { Type } from 'class-transformer';
import { FlagUpdateManyMutationInput } from './flag-update-many-mutation.input';

@InputType()
export class FlagUpdateManyWithWhereWithoutUserInput {

    @Field(() => FlagScalarWhereInput, {nullable:false})
    @Type(() => FlagScalarWhereInput)
    where!: FlagScalarWhereInput;

    @Field(() => FlagUpdateManyMutationInput, {nullable:false})
    @Type(() => FlagUpdateManyMutationInput)
    data!: FlagUpdateManyMutationInput;
}
