import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExampleWhereInput } from './example-where.input';

@InputType()
export class ExampleNullableRelationFilter {

    @Field(() => ExampleWhereInput, {nullable:true})
    is?: ExampleWhereInput;

    @Field(() => ExampleWhereInput, {nullable:true})
    isNot?: ExampleWhereInput;
}
