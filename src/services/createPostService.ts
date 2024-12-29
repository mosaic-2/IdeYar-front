import apiClient from "./api-client";

export interface PostDetails {
  title: string;
  description: string;
  order: number;
}

export interface CreatePostPayload {
  title: string;
  minimum_fund: string;
  deadline_date: string;
  post_details: PostDetails[];
}

export interface CreatePostResponse {
  id: number;
}

export const createPost = async (
  payload: CreatePostPayload
): Promise<CreatePostResponse> => {
  const response = await apiClient.post("/api/post", payload);
  console.log("createPost response: ", response);
  return response.data;
};
