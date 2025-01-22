import React, { useEffect, useState } from "react";
import Categories from "../categories/Categories";
import HomePage from "../homePage/HomePage";
import IntroductionSection from "../homePage/Introduction";
import { getLandingPostsApi } from "../../apis/landingPostsApi";
import axios from "axios";
type Post = {
  createdAt: string;
  deadlineDate: string;
  description: string;
  fundRaised: number;
  id: string;
  image: string;
  minimumFund: number;
  profileImageUrl: string;
  title: string;
  userId: string;
  username: string;
};

export type Posts = Post[];

const LandingPage = () => {
  const [landingPosts, setLandingPosts] = useState<Posts>([]);

  useEffect(() => {
    getLandingPostsApi()
      .then((res) => {
        console.log("getLandingPostsApi response:", res.data.posts);
        const postsWithRandomIds = res.data.posts.map((post: Post) => ({
          ...post,
        }));
        setLandingPosts(postsWithRandomIds);
      })
      .catch((err) => {
        console.log("getLandingPostsApi error: ", err);
        if (axios.isAxiosError(err)) {
        }
      });
  }, []);

  return (
    <>
      {/* Render the Categories */}
      <Categories />

      {/* Render the Home Page */}
      <HomePage posts={landingPosts} />

      {/* Render the Introduction Section */}
      <IntroductionSection />
    </>
  );
};

export default LandingPage;
