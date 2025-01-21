// uploadImageApi.ts
import apiClient from "../services/api-client";
// Function to upload the user image
export const uploadUserImageApi = (uploadFile) => {
    const formData = new FormData();
    formData.append("uploadFile", uploadFile);
    return apiClient.post("/api/user-image", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};
