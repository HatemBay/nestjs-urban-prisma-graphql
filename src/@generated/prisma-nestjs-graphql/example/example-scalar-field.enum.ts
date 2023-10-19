import { registerEnumType } from '@nestjs/graphql';

export enum ExampleScalarFieldEnum {
    id = "id",
    content = "content",
    post_id = "post_id",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(ExampleScalarFieldEnum, { name: 'ExampleScalarFieldEnum', description: undefined })
