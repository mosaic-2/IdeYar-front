export interface SearchPostsRequest {
    title: string;
    page: number;
}
export interface SearchPostsResponse {
    posts: Array<{
        id: string;
        title: string;
        description: string;
        createdAt: string;
        username: string;
        image: string;
    }>;
    total: number;
    page: number;
}
export declare const searchPostsApi: (title: string, page: number) => Promise<SearchPostsResponse>;
