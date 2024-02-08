import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Reason } from '../prisma/reason.enum';
import { UserCreateNestedOneWithoutFlagsInput } from '../user/user-create-nested-one-without-flags.input';

@InputType()
export class FlagCreateWithoutPostInput {

    @Field(() => Reason, {nullable:false})
    reason!: keyof typeof Reason;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutFlagsInput, {nullable:true})
    User?: UserCreateNestedOneWithoutFlagsInput;
}
