import apiClient from "../services/api-client";
export const createPost = async (image, title, description, minimumFund, deadline) => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("minimumFund", minimumFund);
    formData.append("deadline", deadline);
    const response = await apiClient.post("/api/post", formData);
    return response.data;
};
export const createPostDetail = async (image, title, description, order, postId) => {
    const formData = new FormData();
    if (image)
        formData.append("image", image);
    if (title)
        formData.append("title", title);
    if (description)
        formData.append("description", description);
    formData.append("order", order.toString());
    formData.append("postID", postId);
    const response = await apiClient.post("/api/post-detail", formData);
    return response.data;
};
