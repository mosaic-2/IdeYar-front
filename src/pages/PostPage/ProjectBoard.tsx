import { Box, CardMedia, Typography } from "@mui/material";

interface Props {
  post: {
    mainTitle: string;
    mainTitleCaption: string;
    titles: string[];
    titlesCaptions: string[];
    mainImageUrl: string;
    imageUrls: string[];
    lastModified: string;
  };
}
const ProjectBoard = ({ post }: Props) => {
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
        image={post.mainImageUrl}
        alt={post.mainTitle}
        sx={{
          borderRadius: "15px",
        }}
      />
      {/* Main Caption */}
      <Box width="100%">
        <Typography variant="h6" fontWeight="bold" color="text.primary">
          {post.mainTitle}
        </Typography>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Typography variant="body3" fontWeight="bold" color="text.secondary">
            {post.mainTitleCaption}
          </Typography>
          <Typography variant="body3" color="text.secondary" fontWeight="bold">
            {"آخرین بروز رسانی " + post.lastModified}
          </Typography>
        </Box>
      </Box>

      <Box width="100%">
        {post.titles.map((title, index) => (
          <Box display="flex" flexDirection="column" py={2}>
            <Typography variant="body1" fontWeight="bold" color="text.primary">
              {title}
            </Typography>
            <Typography
              variant="body3"
              fontWeight="bold"
              color="text.secondary"
              mb={2}
            >
              {post.titlesCaptions[index]}
            </Typography>

            <CardMedia
              component="img"
              width="90%"
              height="420px"
              image={post.imageUrls[index]}
              alt={title}
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
