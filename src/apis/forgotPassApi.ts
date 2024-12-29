import apiClient from "../services/api-client";

// API Constants
export interface ForgotPasswordRequest {
  email: string;
}

export interface ForgotPasswordResponse {}

// API Function
export const ForgotPassApi = (
  data: ForgotPasswordRequest
): Promise<ForgotPasswordResponse> =>
  apiClient.post("/auth/forget-password", data);
