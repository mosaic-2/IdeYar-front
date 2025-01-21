export interface PostDetails {
    title: string;
    description: string;
    order: number;
}
export interface CreatePostResponse {
    id: number;
}
export declare const createPost: (image: File, title: string, description: string, minimumFund: string, deadline: string) => Promise<CreatePostResponse>;
export declare const createPostDetail: (image: File | null, title: string | null, description: string | null, order: number, postId: string) => Promise<CreatePostResponse>;
