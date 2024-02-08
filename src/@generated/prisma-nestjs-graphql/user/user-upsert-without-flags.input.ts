import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutFlagsInput } from './user-update-without-flags.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutFlagsInput } from './user-create-without-flags.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutFlagsInput {

    @Field(() => UserUpdateWithoutFlagsInput, {nullable:false})
    @Type(() => UserUpdateWithoutFlagsInput)
    update!: UserUpdateWithoutFlagsInput;

    @Field(() => UserCreateWithoutFlagsInput, {nullable:false})
    @Type(() => UserCreateWithoutFlagsInput)
    create!: UserCreateWithoutFlagsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
