import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    username = "username",
    email = "email",
    password = "password",
    name = "name",
    role = "role",
    is_u_18 = "is_u_18",
    email_verified = "email_verified",
    created_at = "created_at",
    updated_at = "updated_at",
    google_id = "google_id",
    google_profile = "google_profile"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
