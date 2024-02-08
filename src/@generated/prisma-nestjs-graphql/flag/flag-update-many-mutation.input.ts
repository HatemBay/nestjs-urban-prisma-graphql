import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Reason } from '../prisma/reason.enum';

@InputType()
export class FlagUpdateManyMutationInput {

    @Field(() => Reason, {nullable:true})
    reason?: keyof typeof Reason;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
