import apiClient from "../services/api-client";
export const signupInitializeApi = (username, email, password) => apiClient.post("/auth/signup", {
    username,
    email,
    password,
});
