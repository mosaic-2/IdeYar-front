import apiClient from "../services/api-client";
export const forgetPasswordFinalizeApi = (data) => apiClient.post("/auth/forget-password-finalize", data);
