import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Reason } from '../prisma/reason.enum';
import { PostCreateNestedOneWithoutFlagsInput } from '../post/post-create-nested-one-without-flags.input';

@InputType()
export class FlagCreateWithoutUserInput {

    @Field(() => Reason, {nullable:false})
    reason!: keyof typeof Reason;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => PostCreateNestedOneWithoutFlagsInput, {nullable:false})
    Post!: PostCreateNestedOneWithoutFlagsInput;
}
