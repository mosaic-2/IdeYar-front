import apiClient from "../services/api-client";

// API Constants
export interface ChangeEmailConfirmRequest {
  token: string;
}

export interface ChangeEmailConfirmResponse {}

export const changeEmailConfirmApi = (data: ChangeEmailConfirmRequest) =>
  apiClient.post<ChangeEmailConfirmResponse>("/user-profile/change-email-confirm", data);
