import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExampleWhereInput } from './example-where.input';
import { Type } from 'class-transformer';
import { ExampleUpdateWithoutPostInput } from './example-update-without-post.input';

@InputType()
export class ExampleUpdateToOneWithWhereWithoutPostInput {

    @Field(() => ExampleWhereInput, {nullable:true})
    @Type(() => ExampleWhereInput)
    where?: ExampleWhereInput;

    @Field(() => ExampleUpdateWithoutPostInput, {nullable:false})
    @Type(() => ExampleUpdateWithoutPostInput)
    data!: ExampleUpdateWithoutPostInput;
}
