import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Tag } from '../prisma/tag.enum';

@InputType()
export class PostCreatetagsInput {
  @Field(() => [Tag], { nullable: false })
  set!: Array<keyof typeof Tag>;
}
