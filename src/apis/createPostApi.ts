import apiClient from "../services/api-client";

export interface PostDetails {
  title: string;
  description: string;
  order: number;
}

export interface CreatePostResponse {
  id: number;
}

export const createPost = async (
  image: File,
  title: string,
  description: string,
  minimumFund: string,
  deadline: string,
  category: string | null
): Promise<CreatePostResponse> => {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("title", title);
  formData.append("description", description);
  formData.append("minimumFund", minimumFund);
  formData.append("deadline", deadline);
  if (category !== null) formData.append("category", category);
  const response = await apiClient.post("/api/post", formData);
  return response.data;
};

export const createPostDetail = async (
  image: File | null,
  title: string | null,
  description: string | null,
  order: number,
  postId: string
): Promise<CreatePostResponse> => {
  const formData = new FormData();
  if (image) formData.append("image", image);
  if (title) formData.append("title", title);
  if (description) formData.append("description", description);
  formData.append("order", order.toString());
  formData.append("postID", postId);
  const response = await apiClient.post("/api/post-detail", formData);
  return response.data;
};
