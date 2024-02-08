import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExampleUpdateWithoutPostInput } from './example-update-without-post.input';
import { Type } from 'class-transformer';
import { ExampleCreateWithoutPostInput } from './example-create-without-post.input';
import { ExampleWhereInput } from './example-where.input';

@InputType()
export class ExampleUpsertWithoutPostInput {

    @Field(() => ExampleUpdateWithoutPostInput, {nullable:false})
    @Type(() => ExampleUpdateWithoutPostInput)
    update!: ExampleUpdateWithoutPostInput;

    @Field(() => ExampleCreateWithoutPostInput, {nullable:false})
    @Type(() => ExampleCreateWithoutPostInput)
    create!: ExampleCreateWithoutPostInput;

    @Field(() => ExampleWhereInput, {nullable:true})
    @Type(() => ExampleWhereInput)
    where?: ExampleWhereInput;
}
