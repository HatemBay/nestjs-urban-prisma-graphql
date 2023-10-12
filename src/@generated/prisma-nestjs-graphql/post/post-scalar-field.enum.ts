import { registerEnumType } from '@nestjs/graphql';

export enum PostScalarFieldEnum {
    id = "id",
    title = "title",
    content = "content",
    published = "published",
    likes_count = "likes_count",
    dislikes_count = "dislikes_count",
    author_id = "author_id",
    is_u_18 = "is_u_18",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(PostScalarFieldEnum, { name: 'PostScalarFieldEnum', description: undefined })
