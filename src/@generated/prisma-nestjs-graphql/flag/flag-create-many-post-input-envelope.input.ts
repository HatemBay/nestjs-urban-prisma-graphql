import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FlagCreateManyPostInput } from './flag-create-many-post.input';
import { Type } from 'class-transformer';

@InputType()
export class FlagCreateManyPostInputEnvelope {

    @Field(() => [FlagCreateManyPostInput], {nullable:false})
    @Type(() => FlagCreateManyPostInput)
    data!: Array<FlagCreateManyPostInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
