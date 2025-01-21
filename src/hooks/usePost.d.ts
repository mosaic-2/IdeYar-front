import { PostDetail, PostResponse } from "../apis/postApi";
declare const usePost: (id: number) => {
    post: PostResponse | undefined;
    postDetails: PostDetail[] | undefined;
    loading: boolean;
};
export default usePost;
