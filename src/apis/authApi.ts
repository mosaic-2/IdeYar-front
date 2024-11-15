import apiClient from "../services/api-client";

export interface LoginRequest {
  userNameOrEmail: string;
  password: string;
}

export interface LoginResponse {
  jwtToken: string;
  refreshToken: string;
}

export const loginApi = (userNameOrEmail: string, password: string) =>
  apiClient.post<LoginResponse>("/auth/login", {
    userNameOrEmail,
    password,
  });

// Signup API
export interface SignUpRequest {
  email: string;
  username: string;
  password: string;
}

export interface SignUpResponse {
  token: string;
}

export const signupInitializeApi = (
  username: string,
  email: string,
  password: string
) =>
  apiClient.post<SignUpResponse>("/auth/signup", {
    username,
    email,
    password,
  });

// Code Verification API
export interface CodeVerificationRequest {
  signUpToken: string;
  code: string;
}

export interface CodeVerificationResponse {
  jwtToken: string;
  refreshToken: string;
}

export const codeVerificationApi = (signUpToken: string, code: string) =>
  apiClient.post<CodeVerificationResponse>("/auth/code-verification", {
    signUpToken,
    code,
  });

// Export the Axios instance if needed elsewhere
export default apiClient;
