import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FlagWhereInput } from './flag-where.input';

@InputType()
export class FlagListRelationFilter {

    @Field(() => FlagWhereInput, {nullable:true})
    every?: FlagWhereInput;

    @Field(() => FlagWhereInput, {nullable:true})
    some?: FlagWhereInput;

    @Field(() => FlagWhereInput, {nullable:true})
    none?: FlagWhereInput;
}
