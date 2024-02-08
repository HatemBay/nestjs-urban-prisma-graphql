import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Reason } from '../prisma/reason.enum';

@ObjectType()
export class FlagMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Reason, {nullable:true})
    reason?: keyof typeof Reason;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Int, {nullable:true})
    postId?: number;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
