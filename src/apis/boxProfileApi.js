import apiClient from "../services/api-client";
export const updateProfileApi = (data) => apiClient.post("/api/updateProfile", data);
