import apiClient from "../services/api-client";

// SearchPosts API
export interface SearchPostsRequest {
  title: string;
  page: number;
}

export interface SearchPostsResponse {
  posts: Array<{
    id: string;
    title: string;
    description: string;
    createdAt: string;
    // Add other post fields if present in the response
  }>;
  total: number;
  page: number;
}

// export const searchPostsApi = (title: string, page: number) =>
//   apiClient.post<SearchPostsResponse>("/api/search-post", {
//     title,
//     page,
//   });

// export const searchPostsApi = (title: string, page: number) =>
//   apiClient.post<SearchPostsResponse>("/api/search-post", {
//     title,
//     page,
//   });

export const searchPostsApi = (
  title: string,
  page: number
): Promise<SearchPostsResponse> =>
  apiClient.post("/api/search-post", { title, page });
