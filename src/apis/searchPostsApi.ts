import apiClient from "../services/api-client";

export interface Post {
  id: string;
  user_id: string;
  username: string;
  profile_image_url: string;
  title: string;
  description: string;
  minimum_fund: string;
  fund_raised: string;
  deadline_date: string;
  image: string;
  created_at: string;
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
