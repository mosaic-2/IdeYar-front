import apiClient from "../services/api-client";

// export interface LoginRequest {
//   userNameOrEmail: string;
//   password: string;
// }

// export interface LoginResponse {
//   jwtToken: string;
//   refreshToken: string;
// }

// export const loginApi = (userNameOrEmail: string, password: string) =>
//   apiClient.post<LoginResponse>("/auth/login", {
//     userNameOrEmail,
//     password,
//   });


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
