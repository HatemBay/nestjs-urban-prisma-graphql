import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ExampleMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    contentArabic?: true;

    @Field(() => Boolean, {nullable:true})
    contentEnglish?: true;

    @Field(() => Boolean, {nullable:true})
    contentFrench?: true;

    @Field(() => Boolean, {nullable:true})
    postId?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
