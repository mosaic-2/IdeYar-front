import apiClient from "../services/api-client";
export const getProfileInfoApi = () => apiClient.get("/user-profile/get-profile");
export const updateProfileInfoApi = (username, phone, bio, birthday) => apiClient.post("/user-profile/update-profile", {
    username,
    phone,
    bio,
    birthday,
});
