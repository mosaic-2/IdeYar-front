import apiClient from "../services/api-client";

// ChangeEmail API
export interface ChangeEmailRequest {
  email: string;
}

export interface ChangeEmailResponse {}

export const changeEmailApi = (email: string) =>
  apiClient.post<ChangeEmailResponse>("/user-profile/change-email", {
    email,
  });

// ChangePassword API
export interface ChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
}

export interface ChangePasswordResponse {}

export const changePasswordApi = (oldPassword: string, newPassword: string) =>
  apiClient.post<ChangePasswordResponse>("/user-profile/change-password", {
    oldPassword,
    newPassword,
  });

// GetProfileInfo API
export interface GetProfileInfoResponse {
  username: string;
  phone: string;
  bio: string;
  birthday: string;
  profile_image_url: string;
}

export const getProfileInfoApi = () =>
  apiClient.get<GetProfileInfoResponse>("/user-profile/get-profile");

// UpdateProfileInfo API
export interface UpdateProfileInfoRequest {
  username: string;
  phone: string;
  bio: string;
  birthday: string;
}

export interface UpdateProfileInfoResponse {
  username: string;
  phone: string;
  bio: string;
  birthday: string;
  profile_image_url: string;
}

export const updateProfileInfoApi = (
  username: string,
  phone: string,
  bio: string,
  birthday: string
) =>
  apiClient.post<UpdateProfileInfoResponse>("/user-profile/update-profile", {
    username,
    phone,
    bio,
    birthday,
  });
