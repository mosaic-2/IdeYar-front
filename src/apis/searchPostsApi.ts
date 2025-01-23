import apiClient from "../services/api-client";

export interface postOverview {
  id: string;
  userId: string;
  username: string;
  profileImageUrl: string;
  title: string;
  description: string;
  image: string;
}

export interface SearchPostsResponse {
  postOverview: postOverview[];
}

export const searchPostsApi = async (
  title: string,
  page: number
): Promise<SearchPostsResponse> => {
  const response = await apiClient.post("/api/search-post", { title, page });
  return response.data;
};
