import apiClient from "../services/api-client";
export const getAccountApi = () => apiClient.get("/user/account");
export const deleteAccount = () => apiClient.delete("/user/account");
