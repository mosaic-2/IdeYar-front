// src/api/fundPostApi.ts
import apiClient from "../services/api-client";
// Function to call the fund-post API with a dynamic ID
export const fundPostApi = (id, amount) => apiClient.post(`/api/fund-post/${id}`, {
    amount,
});
