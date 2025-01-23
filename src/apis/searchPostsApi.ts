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
  console.log("title: ", title, ", filter: ", filter);
  const response = await apiClient.post("/api/search-post", {
    title,
    page,
    filter,
  });
  return response.data;
};
