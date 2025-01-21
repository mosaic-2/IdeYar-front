import apiClient from "../services/api-client";
// API Function
export const changePasswordApi = (data) => apiClient.post("/user-profile/change-password", data);
