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
