import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExampleWhereInput } from './example-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyExampleArgs {

    @Field(() => ExampleWhereInput, {nullable:true})
    @Type(() => ExampleWhereInput)
    where?: ExampleWhereInput;
}
