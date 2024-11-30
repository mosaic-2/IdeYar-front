// getImageApi.ts

import apiClient from "../services/api-client";

// Function to get the image by image ID
export const getImageApi = (imageId: string) => {
  // Use the imageId in the URL path
  return apiClient.get(`/api/image/${imageId}`, {
    responseType: 'blob', // Ensure the response is handled as a Blob (binary data)
  });
};
