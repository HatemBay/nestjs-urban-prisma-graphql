import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExampleCreateInput } from './example-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneExampleArgs {

    @Field(() => ExampleCreateInput, {nullable:false})
    @Type(() => ExampleCreateInput)
    data!: ExampleCreateInput;
}
