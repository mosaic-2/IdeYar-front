import { Box } from "@mui/material";
import StickyLeftLayout from "../../components/layouts/StickyLeftLayout";
import ProjectSupport from "./ProjectSupport";
import ProjectTitles from "./ProjectTitles";
import ProjectBoard from "./ProjectBoard";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import usePost from "../../hooks/usePost";
import FundModal from "../../components/fund/FundModal";

const PostPage = () => {
  const { id } = useParams();
  const { post, postDetails, loading } = usePost(id ? parseInt(id) : 0);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    <>
      <FundModal
        id={post ? post.id : 0}
        open={open}
        handleClose={handleClose}
      />
      <StickyLeftLayout
        leftFrame={
          <Box flexDirection="column" gap={3} display="flex">
            <ProjectSupport post={post} onSupportClick={handleOpen} />
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
    </>
  );
};

export default PostPage;
