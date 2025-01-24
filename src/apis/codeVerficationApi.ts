// src/apis/codeVerificationApi.ts
import apiClient from "../services/api-client";

// API Interfaces
export interface CodeVerificationRequest {
  signUpToken: string;
  code: string;
}

export interface CodeVerificationResponse {
  message: string;
  // Add other response fields if necessary
}

// API Function
export const codeVerificationApi = async (
  data: CodeVerificationRequest
): Promise<CodeVerificationResponse> => {
  try {
    const response = await apiClient.post<CodeVerificationResponse>(
      "/auth/code-verification",
      data
    );
    return response.data; // Return only the data property
  } catch (error) {
    // Optionally, handle errors here or let them propagate
    throw error;
  }
};
