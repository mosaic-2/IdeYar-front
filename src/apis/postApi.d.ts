export interface PostResponse {
    id: number;
    userId: number;
    username: string;
    profileImageUrl: string;
    title: string;
    description: string;
    minimumFund: number;
    fundRaised: number;
    deadlineDate: string;
    image: string;
    createdAt: string;
}
export interface PostDetail {
    title: string;
    description: string;
    order?: number;
    image?: string;
}
export interface FetchPostResponse {
    post: PostResponse;
    postDetails: PostDetail[];
}
export declare const fetchPost: (id: number) => Promise<FetchPostResponse>;
