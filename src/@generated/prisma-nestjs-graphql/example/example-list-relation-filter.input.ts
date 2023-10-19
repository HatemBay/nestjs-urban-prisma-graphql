import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExampleWhereInput } from './example-where.input';

@InputType()
export class ExampleListRelationFilter {

    @Field(() => ExampleWhereInput, {nullable:true})
    every?: ExampleWhereInput;

    @Field(() => ExampleWhereInput, {nullable:true})
    some?: ExampleWhereInput;

    @Field(() => ExampleWhereInput, {nullable:true})
    none?: ExampleWhereInput;
}
