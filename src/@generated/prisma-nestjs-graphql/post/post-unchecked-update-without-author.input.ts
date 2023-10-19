import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ExampleUncheckedUpdateManyWithoutPostNestedInput } from '../example/example-unchecked-update-many-without-post-nested.input';

@InputType()
export class PostUncheckedUpdateWithoutAuthorInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Boolean, {nullable:true})
    published?: boolean;

    @Field(() => Int, {nullable:true})
    likes_count?: number;

    @Field(() => Int, {nullable:true})
    dislikes_count?: number;

    @Field(() => Boolean, {nullable:true})
    is_u_18?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ExampleUncheckedUpdateManyWithoutPostNestedInput, {nullable:true})
    examples?: ExampleUncheckedUpdateManyWithoutPostNestedInput;
}
