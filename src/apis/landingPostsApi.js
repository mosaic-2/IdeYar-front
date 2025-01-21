import apiClient from "../services/api-client";
export const getLandingPostsApi = () => {
    return apiClient.get(`/api/landing-posts`, {});
};
