import apiClient from "../services/api-client";
// API Function
export const changeEmailApi = (data) => apiClient.post("/user-profile/change-email", data);
