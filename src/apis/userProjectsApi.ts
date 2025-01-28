// src/apis/userProjectsApi.ts
import apiClient from "../services/api-client";

/**
 * Match the shape that PostPreview expects.
 * If your backend returns these as strings, use `string`.
 * If it returns numeric IDs, use `number`.
 * Just be consistent across your code!
 */
export interface Project {
  id: string;
  userId: string;
  username: string;
  profileImageUrl?: string;
  title: string;
  description: string;
  minimumFund: string;
  fundRaised: string;
  deadlineDate?: string;
  image?: string;
  createdAt?: string;
  isBookmarked: boolean;
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
