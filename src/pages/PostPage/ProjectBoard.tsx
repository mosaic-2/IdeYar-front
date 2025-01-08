import { Box, CardMedia, Typography } from "@mui/material";
import { RefObject } from "react";
import { PostDetail, PostResponse } from "../../apis/postApi";
import { format } from "date-fns";
import { faIR } from "date-fns-jalali/locale";
import { toPersianDigits } from "../../util/persianNumberConverter";

interface Props {
  post: PostResponse | undefined;
  postDetails: PostDetail[] | undefined;
  sectionRefs: RefObject<HTMLDivElement>[]; // New prop for section refs
}

const ProjectBoard = ({ post, postDetails, sectionRefs }: Props) => {
  const updateTime = post
    ? toPersianDigits(
        format(post.createdAt, "HH:mm:ss , dd MMMM yyyy", {
          locale: faIR,
        })
      )
    : "";

  return (
    <Box
      width="95%"
      mt={3}
      flexDirection="column"
      sx={{
        direction: "rtl",
      }}
      gap={3}
      display="flex"
    >
      <CardMedia
        component="img"
        width="100%"
        height="420px"
        image={"post.mainImageUrl"}
        alt={post?.title}
        sx={{
          borderRadius: "15px",
        }}
      />
      {/* Main Caption */}
      <Box width="100%">
        <Typography variant="h6" fontWeight="bold" color="text.primary">
          {post?.title}
        </Typography>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Typography variant="body3" fontWeight="bold" color="text.secondary">
            {post?.description}
          </Typography>
          <Typography variant="body3" color="text.secondary" fontWeight="bold">
            {"آخرین بروز رسانی " + updateTime}
          </Typography>
        </Box>
      </Box>

      <Box width="100%">
        {postDetails?.map((detail, index) => (
          <Box
            key={index}
            ref={sectionRefs[index]} // Attach the corresponding ref
            display="flex"
            flexDirection="column"
            py={2}
          >
            <Typography variant="body1" fontWeight="bold" color="text.primary">
              {detail.title}
            </Typography>
            <Typography
              variant="body3"
              fontWeight="bold"
              color="text.secondary"
              mb={2}
            >
              {detail.description}
            </Typography>

            <CardMedia
              component="img"
              width="90%"
              height="420px"
              image={"detail.imageUrls[index]"}
              alt={detail.title}
              sx={{
                borderRadius: "15px",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProjectBoard;
