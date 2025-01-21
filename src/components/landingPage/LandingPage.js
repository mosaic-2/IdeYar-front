import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import Categories from "../categories/Categories";
import HomePage from "../homePage/HomePage";
import IntroductionSection from "../homePage/Introduction";
import { getLandingPostsApi } from "../../apis/landingPostsApi";
import axios from "axios";
const LandingPage = () => {
    const [landingPosts, setLandingPosts] = useState([]);
    useEffect(() => {
        getLandingPostsApi()
            .then((res) => {
            console.log("getLandingPostsApi response:", res.data.posts);
            const postsWithRandomIds = res.data.posts.map((post, index) => ({
                ...post,
                id: (index + 1).toString(),
            }));
            setLandingPosts(postsWithRandomIds);
        })
            .catch((err) => {
            console.log("getLandingPostsApi error: ", err);
            if (axios.isAxiosError(err)) {
            }
        });
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(Categories, {}), _jsx(HomePage, { posts: landingPosts }), _jsx(IntroductionSection, {})] }));
};
export default LandingPage;
