import apiClient from "../services/api-client";
// API Function
export const ForgotPassApi = (data) => apiClient.post("/auth/forget-password", data);
