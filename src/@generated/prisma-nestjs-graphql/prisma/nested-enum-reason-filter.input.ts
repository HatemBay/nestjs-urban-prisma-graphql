import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Reason } from './reason.enum';

@InputType()
export class NestedEnumReasonFilter {

    @Field(() => Reason, {nullable:true})
    equals?: keyof typeof Reason;

    @Field(() => [Reason], {nullable:true})
    in?: Array<keyof typeof Reason>;

    @Field(() => [Reason], {nullable:true})
    notIn?: Array<keyof typeof Reason>;

    @Field(() => NestedEnumReasonFilter, {nullable:true})
    not?: NestedEnumReasonFilter;
}
