import apiClient from "../services/api-client";

// API Constants
export interface ForgetPasswordFinalizeRequest {
  newPassword: string;
  resetToken: string;
}

export interface ForgetPasswordFinalizeResponse {}

export const forgetPasswordFinalizeApi = (
  data: ForgetPasswordFinalizeRequest
) =>
  apiClient.post<ForgetPasswordFinalizeResponse>(
    "/auth/forget-password-finalize",
    data
  );
