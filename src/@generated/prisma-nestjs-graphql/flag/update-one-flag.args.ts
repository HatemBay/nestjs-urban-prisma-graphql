import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FlagUpdateInput } from './flag-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FlagWhereUniqueInput } from './flag-where-unique.input';

@ArgsType()
export class UpdateOneFlagArgs {

    @Field(() => FlagUpdateInput, {nullable:false})
    @Type(() => FlagUpdateInput)
    data!: FlagUpdateInput;

    @Field(() => FlagWhereUniqueInput, {nullable:false})
    @Type(() => FlagWhereUniqueInput)
    where!: Prisma.AtLeast<FlagWhereUniqueInput, 'id'>;
}
