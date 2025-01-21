import apiClient from "../services/api-client";
export const fetchPost = async (id) => {
    const response = await apiClient.get(`/api/post/${id}`);
    return response.data;
};
