import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutFlagsInput } from './user-update-without-flags.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutFlagsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutFlagsInput, {nullable:false})
    @Type(() => UserUpdateWithoutFlagsInput)
    data!: UserUpdateWithoutFlagsInput;
}
