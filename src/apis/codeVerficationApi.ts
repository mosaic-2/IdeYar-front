import apiClient from "../services/api-client";

// API Constants
export interface CodeVerificationRequest {
  signUpToken: string;
  code: string;
}

export const codeVerificationApi = (data: CodeVerificationRequest) =>
  apiClient.post("/auth/code-verification", data);
