import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FlagWhereUniqueInput } from './flag-where-unique.input';
import { Type } from 'class-transformer';
import { FlagUpdateWithoutUserInput } from './flag-update-without-user.input';
import { FlagCreateWithoutUserInput } from './flag-create-without-user.input';

@InputType()
export class FlagUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => FlagWhereUniqueInput, {nullable:false})
    @Type(() => FlagWhereUniqueInput)
    where!: Prisma.AtLeast<FlagWhereUniqueInput, 'id'>;

    @Field(() => FlagUpdateWithoutUserInput, {nullable:false})
    @Type(() => FlagUpdateWithoutUserInput)
    update!: FlagUpdateWithoutUserInput;

    @Field(() => FlagCreateWithoutUserInput, {nullable:false})
    @Type(() => FlagCreateWithoutUserInput)
    create!: FlagCreateWithoutUserInput;
}
