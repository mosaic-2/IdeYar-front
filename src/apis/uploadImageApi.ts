// uploadImageApi.ts

import apiClient from "../services/api-client";

// Define the response interface based on your API response
export interface UploadImageResponse {
  // Add response fields if available
}

// Function to upload the user image
export const uploadUserImageApi = (uploadFile: File) => {
  const formData = new FormData();
  formData.append("uploadFile", uploadFile);

  return apiClient.post<UploadImageResponse>("/api/user-image", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
