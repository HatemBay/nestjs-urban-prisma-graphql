import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Tag } from '../prisma/tag.enum';

@InputType()
export class PostUpdatetagsInput {

    @Field(() => [Tag], {nullable:true})
    set?: Array<keyof typeof Tag>;

    @Field(() => [Tag], {nullable:true})
    push?: Array<keyof typeof Tag>;
}
