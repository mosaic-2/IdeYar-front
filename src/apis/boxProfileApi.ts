import apiClient from "../services/api-client";

// API Constants
export interface UpdateProfileRequest {
  email: string;
  phone: string;
  bio: string;
  birthday: string | null;
}

export const updateProfileApi = (data: UpdateProfileRequest) =>
  apiClient.post("/api/updateProfile", data);
