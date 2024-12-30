import apiClient from "../services/api-client";

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
  return response.data;
};

export const uploadPostImage = async (
  imageFile: File,
  order: number,
  postId: number
): Promise<CreatePostResponse> => {
  const formData = new FormData();
  formData.append("uploadFile", imageFile);
  formData.append("order", order.toString());
  formData.append("postID", postId.toString());
  const response = await apiClient.post("/api/post-image", formData);
  return response.data;
};
