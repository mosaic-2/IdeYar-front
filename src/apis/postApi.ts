import apiClient from "../services/api-client";

export interface PostDetails {
  title: string;
  description: string;
  order?: number;
}

export interface CreatePostRequest {
  title: string;
  minimum_fund: string;
  post_details: PostDetails[];
}

export interface CreatePostResponse {
  success: boolean;
  postId?: string;
  message?: string;
}

export const createPostApi = (requestData: CreatePostRequest) =>
  apiClient.post<CreatePostResponse>("/api/post", requestData);
