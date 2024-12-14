import apiClient from "../services/api-client";

// API Constants
export interface ChangePasswordRequest {
  newPassword: string;
}

export interface ChangePasswordResponse {}

// API Function
export const changePasswordApi = (
  data: ChangePasswordRequest
): Promise<ChangePasswordResponse> =>
  apiClient.post("/user-profile/change-password", data);
