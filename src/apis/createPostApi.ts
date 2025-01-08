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
  deadline: string
): Promise<CreatePostResponse> => {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("title", title);
  formData.append("description", description);
  formData.append("minimumFund", minimumFund);
  formData.append("deadline", deadline);
  const response = await apiClient.post("/api/post", formData);
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
