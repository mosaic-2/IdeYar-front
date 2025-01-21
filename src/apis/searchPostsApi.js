import apiClient from "../services/api-client";
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
export const searchPostsApi = async (title, page) => {
    const response = await apiClient.post("/api/search-post", { title, page });
    return response.data;
};
