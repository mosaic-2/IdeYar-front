// src/apis/userProjectsApi.ts
import apiClient from "../services/api-client";
export const getUserProjects = async () => {
    const response = await apiClient.get("/api/user-projects");
    return response.data;
};
