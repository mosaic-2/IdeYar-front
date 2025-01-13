import { Box, CardMedia, Typography } from "@mui/material";
import { MutableRefObject, RefObject } from "react";
import { PostDetail, PostResponse } from "../../apis/postApi";
import { format } from "date-fns";
import { faIR } from "date-fns-jalali/locale";
import { toPersianDigits } from "../../util/persianNumberConverter";

interface Props {
  post: PostResponse | undefined;
  postDetails: PostDetail[] | undefined;
  sectionRefs: MutableRefObject<(HTMLDivElement | null)[]>;
}

const ProjectBoard = ({ post, postDetails, sectionRefs }: Props) => {
  const updateTime = post
    ? new Intl.DateTimeFormat("fa-IR", {
        dateStyle: "full",
        timeStyle: "short",
      }).format(new Date(post.createdAt))
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
        image={`https://back.ideyar-app.ir/api/image/${post?.image}`}
        alt={post?.title}
        sx={{
          width: "100%",
          maxHeight: "600px",
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
            ref={(el: HTMLDivElement | null) =>
              (sectionRefs.current[index] = el)
            }
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
            {detail.image && (
              <CardMedia
                component="img"
                image={`https://back.ideyar-app.ir/api/image/${detail.image}`}
                alt={detail.title}
                sx={{
                  width: "100%",
                  maxHeight: "600px",
                  borderRadius: "15px",
                }}
              />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProjectBoard;
