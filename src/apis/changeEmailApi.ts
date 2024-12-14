import apiClient from "../services/api-client";

// API Constants
export interface ChangeEmailRequest {
  email: string;
}

export interface ChangeEmailResponse {}

// API Function
export const changeEmailApi = (
  data: ChangeEmailRequest
): Promise<ChangeEmailResponse> =>
  apiClient.post("/user-profile/change-email", data);
