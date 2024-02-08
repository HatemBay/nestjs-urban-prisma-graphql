import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Reason } from '../prisma/reason.enum';

@InputType()
export class FlagUncheckedUpdateManyWithoutUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Reason, {nullable:true})
    reason?: keyof typeof Reason;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Int, {nullable:true})
    postId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
