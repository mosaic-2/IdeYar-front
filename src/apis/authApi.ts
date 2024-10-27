import AuthResponse from "../models/AuthResponse";
import apiClient from "../services/api-client";

export const loginApi = (email: string, password: string) =>
  apiClient.post<AuthResponse>("/auth/login", {
    email: email,
    password: password,
  });

export const signupInitializeApi = (
  username: string,
  email: string,
  password: string
) =>
  apiClient.post("/auth/signup/initialize", {
    username: username,
    email: email,
    password: password,
  });

export const signupCompleteApi = (email: string, code: string) =>
  apiClient.post<AuthResponse>("/auth/signup/complete", {
    email: email,
    code: code,
  });

export const oauth2Api = (token: string) =>
  apiClient.post<AuthResponse>("/auth/oauth2", null, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

export const logoutApi = () => apiClient.post("/auth/logout");

export const promise = (email: string) =>
  apiClient.post("forgetPassword. ", {
    email: email,
  });
