import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FlagCreateManyUserInput } from './flag-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class FlagCreateManyUserInputEnvelope {

    @Field(() => [FlagCreateManyUserInput], {nullable:false})
    @Type(() => FlagCreateManyUserInput)
    data!: Array<FlagCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
