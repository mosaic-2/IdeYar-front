import { createPost, CreatePostPayload } from "../services/createPostService";

export const useCreatePost = () => {
  const handleCreatePost = async (payload: CreatePostPayload) => {
    try {
      const {} = await createPost(payload);
      console.log("Post created.");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return { handleCreatePost };
};
