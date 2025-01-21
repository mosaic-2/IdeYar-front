// src/apis/userFundsApi.ts
import apiClient from "../services/api-client";
export const getUserFunds = async () => {
    const response = await apiClient.get("/api/user-funds");
    return response.data;
};
