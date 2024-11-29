// uploadImageApi.ts

import apiClient from "../services/api-client";

// Define the response interface based on your API response
export interface UploadImageResponse {
  // Add response fields if available
}

// Function to upload the image
export const uploadPostImageApi = (
  uploadFile: File,
  order: number = 0,
  postID: string = ""
) => {
  const formData = new FormData();
  formData.append("uploadFile", uploadFile);
  formData.append("order", order.toString());
  formData.append("postID", postID);

  return apiClient.post<UploadImageResponse>("/api/post-image", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
