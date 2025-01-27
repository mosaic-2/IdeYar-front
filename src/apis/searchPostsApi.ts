import apiClient from "../services/api-client";

export interface Post {
  id: string;
  userId: string;
  username: string;
  profileImageUrl: string;
  title: string;
  description: string;
  minimumFund: string;
  fundRaised: string;
  deadline_date: string;
  image: string;
  createdAt: string;
}

export interface SearchPostsResponse {
  posts: Post[];
}

export interface SearchFilter {
  categories: string[];
  ascending: boolean;
  sort_by: "SORT_BY_UNSPECIFIED" | "CREATED_TIME" | "DEADLINE" | null;
}

export const searchPostsApi = async (
  title: string | null,
  page: number,
  filter: SearchFilter | null
): Promise<SearchPostsResponse> => {
  const response = await apiClient.post("/api/search-post", {
    title,
    page,
    filter,
  });
  return response.data;
};
