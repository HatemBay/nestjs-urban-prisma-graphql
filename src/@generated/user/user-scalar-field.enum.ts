import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    username = "username",
    email = "email",
    password = "password",
    name = "name",
    role = "role",
    is_u_18 = "is_u_18",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
