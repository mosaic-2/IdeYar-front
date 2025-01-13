import { Box } from "@mui/material";
import StickyLeftLayout from "../../components/layouts/StickyLeftLayout";
import ProjectSupport from "./ProjectSupport";
import ProjectTitles from "./ProjectTitles";
import ProjectBoard from "./ProjectBoard";
import { RefObject, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import usePost from "../../hooks/usePost";

const PostPage = () => {
  const { id } = useParams();
  const { post, postDetails, loading } = usePost(id ? parseInt(id) : 0);

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (postDetails)
      sectionRefs.current = postDetails.map(
        (_, i) => sectionRefs.current[i] ?? null
      );
  }, [postDetails]);

  const scrollToSection = (index: number) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StickyLeftLayout
      leftFrame={
        <Box flexDirection="column" gap={3} display="flex">
          <ProjectSupport post={post} />
          <ProjectTitles
            titles={postDetails ? postDetails.map((d) => d.title) : []}
            onTitleClick={scrollToSection} // Pass scroll handler
          />
        </Box>
      }
    >
      <ProjectBoard
        post={post}
        postDetails={postDetails}
        sectionRefs={sectionRefs}
      />
    </StickyLeftLayout>
  );
};

export default PostPage;
