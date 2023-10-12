import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Tag } from './tag.enum';

@InputType()
export class EnumTagNullableListFilter {

    @Field(() => [Tag], {nullable:true})
    equals?: Array<keyof typeof Tag>;

    @Field(() => Tag, {nullable:true})
    has?: keyof typeof Tag;

    @Field(() => [Tag], {nullable:true})
    hasEvery?: Array<keyof typeof Tag>;

    @Field(() => [Tag], {nullable:true})
    hasSome?: Array<keyof typeof Tag>;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;
}
