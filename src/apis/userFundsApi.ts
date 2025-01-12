// src/apis/userFundsApi.ts
import apiClient from "../services/api-client";

export interface FundOverview {
  post: {
    id: string;
    userId: string;
    username: string;
    profileImageUrl: string;
    title: string;
    description: string;
    minimumFund: string;
    fundRaised: string;
    deadlineDate: string;
    image: string;
    createdAt: string;
  };
  amount: string;
}

export interface UserFundsResponse {
  fundOverviews: FundOverview[];
}

export const getUserFunds = async (): Promise<UserFundsResponse> => {
  const response = await apiClient.get<UserFundsResponse>("/api/user-funds");
  return response.data;
};
