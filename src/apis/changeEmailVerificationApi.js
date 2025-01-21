import apiClient from "../services/api-client";
export const changeEmailConfirmApi = (data) => apiClient.post("/user-profile/change-email-confirm", data);
