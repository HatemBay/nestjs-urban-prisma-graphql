import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExampleUpdateManyMutationInput } from './example-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ExampleWhereInput } from './example-where.input';

@ArgsType()
export class UpdateManyExampleArgs {

    @Field(() => ExampleUpdateManyMutationInput, {nullable:false})
    @Type(() => ExampleUpdateManyMutationInput)
    data!: ExampleUpdateManyMutationInput;

    @Field(() => ExampleWhereInput, {nullable:true})
    @Type(() => ExampleWhereInput)
    where?: ExampleWhereInput;
}
