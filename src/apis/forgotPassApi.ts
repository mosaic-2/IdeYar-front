// src/apis/forgotPassApi.ts
import apiClient from "../services/api-client";

// API Interfaces
export interface ForgetPasswordRequest {
  email: string;
}

export interface ForgetPasswordResponse {
  message: string;
}

// API Function
export const forgetPasswordApi = async (
  data: ForgetPasswordRequest
): Promise<ForgetPasswordResponse> => {
  try {
    const response = await apiClient.post<ForgetPasswordResponse>(
      "/auth/forget-password",
      data
    );
    return response.data; // Return only the data property
  } catch (error) {
    // Optionally, handle errors here or let them propagate
    throw error;
  }
};
