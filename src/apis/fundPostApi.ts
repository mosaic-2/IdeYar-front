// src/api/fundPostApi.ts

import apiClient from "../services/api-client";

// Interface for the request payload
export interface FundPostRequest {
  amount: string;
}

// Function to call the fund-post API with a dynamic ID
export const fundPostApi = (id: number, amount: string) =>
  apiClient.post(`/api/fund-post/${id}`, {
    amount,
  });
