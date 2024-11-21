import apiClient from "../services/api-client";

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
