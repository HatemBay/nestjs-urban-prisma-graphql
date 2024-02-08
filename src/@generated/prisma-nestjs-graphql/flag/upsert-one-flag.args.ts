import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FlagWhereUniqueInput } from './flag-where-unique.input';
import { Type } from 'class-transformer';
import { FlagCreateInput } from './flag-create.input';
import { FlagUpdateInput } from './flag-update.input';

@ArgsType()
export class UpsertOneFlagArgs {

    @Field(() => FlagWhereUniqueInput, {nullable:false})
    @Type(() => FlagWhereUniqueInput)
    where!: Prisma.AtLeast<FlagWhereUniqueInput, 'id'>;

    @Field(() => FlagCreateInput, {nullable:false})
    @Type(() => FlagCreateInput)
    create!: FlagCreateInput;

    @Field(() => FlagUpdateInput, {nullable:false})
    @Type(() => FlagUpdateInput)
    update!: FlagUpdateInput;
}
