import { useEffect, useState } from "react";
import { fetchPost } from "../apis/postApi";
const usePost = (id) => {
    const [post, setPost] = useState();
    const [postDetails, setPostDetails] = useState();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetchPost(id)
            .then(({ post, postDetails }) => {
            setPost(post);
            setPostDetails(postDetails.sort((a, b) => (a.order || 0) - (b.order || 0)));
        })
            .catch((err) => console.log("FetchPost error: ", err))
            .finally(() => setLoading(false));
    }, [id]);
    return { post, postDetails, loading };
};
export default usePost;
