// src/apis/userFundsApi.ts
import apiClient from "../services/api-client";
import { Project } from "./userProjectsApi";

/**
 * We assume your /api/user-funds returns an object with
 * fundOverviews: FundOverview[]
 * Each FundOverview has:
 *   - post: Project
 *   - amount: string (since your error messages suggest it's a string)
 */
export interface FundOverview {
  post: Project;
  amount: string; // keep as string to match API (avoid type errors)
}

export interface UserFundsResponse {
  fundOverviews: FundOverview[];
}

export const getUserFunds = async (): Promise<UserFundsResponse> => {
  const response = await apiClient.get<UserFundsResponse>("/api/user-funds");
  return response.data;
};
