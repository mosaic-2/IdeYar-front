import apiClient from "../services/api-client";
export const loginApi = (userNameOrEmail, password) => apiClient.post("/auth/login", {
    userNameOrEmail,
    password,
});
