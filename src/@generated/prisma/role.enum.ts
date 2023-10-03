import { registerEnumType } from '@nestjs/graphql';

export enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
    GUEST = "GUEST"
}


registerEnumType(Role, { name: 'Role', description: undefined })
