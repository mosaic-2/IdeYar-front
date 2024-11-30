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

export interface UploadPostImageResponse {
  success: boolean;
  message: string;
  imageUrl?: string; // Assuming the server responds with the image URL
}

export const createPostApi = (requestData: CreatePostRequest) =>
  apiClient.post<CreatePostResponse>("/api/post", requestData);

export const getPostImage = () =>
  apiClient.post<CreatePostResponse>("/api/image/1");

// export const uploadPostImageApi = (
//   file: File,
//   order: number,
//   postID: string
// ) => {
//   const formData = new FormData();
//   formData.append("uploadFile", file);
//   formData.append("order", order.toString());
//   formData.append("postID", postID);

//   return apiClient.post<UploadPostImageResponse>("/api/post-image", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
// };
