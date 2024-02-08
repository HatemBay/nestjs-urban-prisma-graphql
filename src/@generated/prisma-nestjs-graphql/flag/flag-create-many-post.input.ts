import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Reason } from '../prisma/reason.enum';

@InputType()
export class FlagCreateManyPostInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Reason, {nullable:false})
    reason!: keyof typeof Reason;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
