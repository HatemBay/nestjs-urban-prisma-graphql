import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Reason } from '../prisma/reason.enum';
import { PostUpdateOneRequiredWithoutFlagsNestedInput } from '../post/post-update-one-required-without-flags-nested.input';

@InputType()
export class FlagUpdateWithoutUserInput {

    @Field(() => Reason, {nullable:true})
    reason?: keyof typeof Reason;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => PostUpdateOneRequiredWithoutFlagsNestedInput, {nullable:true})
    Post?: PostUpdateOneRequiredWithoutFlagsNestedInput;
}
