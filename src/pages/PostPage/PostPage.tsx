import { Box } from "@mui/material";
import StickyLeftLayout from "../../components/layouts/StickyLeftLayout";
import ProjectSupport from "./ProjectSupport";
import ProjectTitles from "./ProjectTitles";
import ProjectBoard from "./ProjectBoard";
import { useRef } from "react";

const PostPage = () => {
  const post = {
    mainTitle: "عنوان کامل پروژه یا محصول مورد نظر",
    mainTitleCaption:
      "زیر نویس و یک توضیح کوتاه از پروژه یا محصول در حد یک یا دو جمله.",
    titles: ["عنوان بخش 1", "عنوان بخش 2", "عنوان بخش 3"],
    titlesCaptions: [
      "توضیحات بخش 1",
      "توضیحات بخش 2",
      "توضیحات بخش 3",
    ],
    mainImageUrl: "https://via.placeholder.com/300x400",
    imageUrls: [
      "https://via.placeholder.com/400x200",
      "https://via.placeholder.com/400x200",
      "https://via.placeholder.com/400x200",
    ],
    lastModified: "1403/8/8",
  };

  // Create refs for each section
  const sectionRefs = post.titles.map(() => useRef<HTMLDivElement>(null));

  const scrollToSection = (index: number) => {
    sectionRefs[index]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <StickyLeftLayout
      leftFrame={
        <Box flexDirection="column" gap={3} display="flex">
          <ProjectSupport
            startTime="1 اذر 1403"
            timeLeft="یک ماه و بیست و شش روز"
            amountPaid={1357000}
            amountGoal={2000000}
          />
          <ProjectTitles
            titles={post.titles}
            onTitleClick={scrollToSection} // Pass scroll handler
          />
        </Box>
      }
    >
      <ProjectBoard post={post} sectionRefs={sectionRefs} />
    </StickyLeftLayout>
  );
};

export default PostPage;
