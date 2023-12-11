import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ExampleUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    contentArabic?: string;

    @Field(() => String, {nullable:true})
    contentEnglish?: string;

    @Field(() => String, {nullable:true})
    contentFrench?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
