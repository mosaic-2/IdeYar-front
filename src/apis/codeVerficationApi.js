import apiClient from "../services/api-client";
export const codeVerificationApi = (data) => apiClient.post("/auth/code-verification", data);
