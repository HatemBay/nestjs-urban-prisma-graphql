import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    username = "username",
    email = "email",
    password = "password",
    name = "name",
    role = "role",
    isU18 = "isU18",
    emailVerified = "emailVerified",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    googleId = "googleId",
    googleProfile = "googleProfile",
    countryId = "countryId"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
