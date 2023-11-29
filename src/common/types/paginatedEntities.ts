export type PaginatedEntities<T> = {
    pagination: {
        totalCount: number;
    }
} & {
    data: T[];
};