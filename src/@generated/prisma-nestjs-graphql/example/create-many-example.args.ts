import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ExampleCreateManyInput } from './example-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyExampleArgs {

    @Field(() => [ExampleCreateManyInput], {nullable:false})
    @Type(() => ExampleCreateManyInput)
    data!: Array<ExampleCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
