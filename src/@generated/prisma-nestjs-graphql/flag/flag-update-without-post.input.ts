import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Reason } from '../prisma/reason.enum';
import { UserUpdateOneWithoutFlagsNestedInput } from '../user/user-update-one-without-flags-nested.input';

@InputType()
export class FlagUpdateWithoutPostInput {

    @Field(() => Reason, {nullable:true})
    reason?: keyof typeof Reason;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserUpdateOneWithoutFlagsNestedInput, {nullable:true})
    User?: UserUpdateOneWithoutFlagsNestedInput;
}
