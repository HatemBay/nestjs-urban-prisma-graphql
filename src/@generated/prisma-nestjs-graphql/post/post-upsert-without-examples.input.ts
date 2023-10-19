import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostUpdateWithoutExamplesInput } from './post-update-without-examples.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutExamplesInput } from './post-create-without-examples.input';
import { PostWhereInput } from './post-where.input';

@InputType()
export class PostUpsertWithoutExamplesInput {

    @Field(() => PostUpdateWithoutExamplesInput, {nullable:false})
    @Type(() => PostUpdateWithoutExamplesInput)
    update!: PostUpdateWithoutExamplesInput;

    @Field(() => PostCreateWithoutExamplesInput, {nullable:false})
    @Type(() => PostCreateWithoutExamplesInput)
    create!: PostCreateWithoutExamplesInput;

    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    where?: PostWhereInput;
}
