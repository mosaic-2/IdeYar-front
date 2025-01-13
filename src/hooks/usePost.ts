import { useEffect, useState } from "react";
import { fetchPost, PostDetail, PostResponse } from "../apis/postApi";

const usePost = (id: number) => {
  const [post, setPost] = useState<PostResponse>();
  const [postDetails, setPostDetails] = useState<PostDetail[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetchPost(id)
      .then(({ post, postDetails }) => {
        setPost(post);
        setPostDetails(
          postDetails.sort((a, b) => (a.order || 0) - (b.order || 0))
        );
      })
      .catch((err) => console.log("FetchPost error: ", err))
      .finally(() => setLoading(false));
  }, [id]);

  return { post, postDetails, loading };
};

export default usePost;
