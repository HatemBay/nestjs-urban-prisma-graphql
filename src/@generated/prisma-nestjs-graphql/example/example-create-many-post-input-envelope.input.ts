import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ExampleCreateManyPostInput } from './example-create-many-post.input';
import { Type } from 'class-transformer';

@InputType()
export class ExampleCreateManyPostInputEnvelope {

    @Field(() => [ExampleCreateManyPostInput], {nullable:false})
    @Type(() => ExampleCreateManyPostInput)
    data!: Array<ExampleCreateManyPostInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
