// src/apis/userProjectsApi.ts
import apiClient from "../services/api-client";

export interface Project {
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
}

export interface UserProjectsResponse {
  posts: Project[];
}

export const getUserProjects = async (): Promise<UserProjectsResponse> => {
  const response = await apiClient.get<UserProjectsResponse>(
    "/api/user-projects"
  );
  return response.data;
};
