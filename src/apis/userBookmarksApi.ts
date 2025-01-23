// src/apis/userBookmarksApi.ts
import apiClient from "../services/api-client";
import { Project } from "./userProjectsApi";

/**
 * If your user-bookmarks returns the same shape as "Project,"
 * you can just re-use that.
 * Otherwise, define a separate interface.
 */
export interface UserBookmarksResponse {
  posts: Project[];
}

export const getUserBookmarksApi = async (): Promise<UserBookmarksResponse> => {
  const response = await apiClient.get<UserBookmarksResponse>(
    "/api/user-bookmarks"
  );
  return response.data;
};
