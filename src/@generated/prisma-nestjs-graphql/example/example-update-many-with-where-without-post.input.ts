import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExampleScalarWhereInput } from './example-scalar-where.input';
import { Type } from 'class-transformer';
import { ExampleUpdateManyMutationInput } from './example-update-many-mutation.input';

@InputType()
export class ExampleUpdateManyWithWhereWithoutPostInput {

    @Field(() => ExampleScalarWhereInput, {nullable:false})
    @Type(() => ExampleScalarWhereInput)
    where!: ExampleScalarWhereInput;

    @Field(() => ExampleUpdateManyMutationInput, {nullable:false})
    @Type(() => ExampleUpdateManyMutationInput)
    data!: ExampleUpdateManyMutationInput;
}
