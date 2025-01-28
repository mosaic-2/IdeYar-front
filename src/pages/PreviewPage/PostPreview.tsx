// src/pages/PreviewPage/PostPreview.tsx
import React, { useState, useEffect } from "react";
import {
  Box,
  CardMedia,
  LinearProgress,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import Bookmark from "../../assets/bookmark.svg?react";
import { useNavigate } from "react-router-dom";
import BookmarkButton from "../../components/buttons/BookmarkButton";

/**
 * PostPreviewProps must match all fields that we spread in from Project (or FundOverview.post).
 * Note that if your code sometimes passes `fundRaised` from "fund.amount",
 * that will also be a string.
 */
export interface PostPreviewProps {
  id: string | number; // Match the type with the expected type from your Project interface
  title: string;
  description: string;
  username: string;
  profileImageUrl?: string;
  minimumFund: string; // from your Project interface
  fundRaised: string; // from your Project interface (or replaced by fund.amount)
  image?: string;
}

/**
 * This component displays a card for a single post/project.
 */
const PostPreview: React.FC<PostPreviewProps> = ({
  id,
  title,
  description,
  username,
  profileImageUrl,
  minimumFund,
  fundRaised,
  image,
}) => {
  const [screen, setScreen] = useState<string>("desktop");
  const [vertical, setVertical] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const navigate = useNavigate();
  console.log("profileImageUrl:", profileImageUrl);

  // Calculate the progress. We parse strings to numbers to avoid NaN
  const progress = (() => {
    const minF = parseFloat(minimumFund) || 0;
    const raised = parseFloat(fundRaised) || 0;
    if (minF <= 0) return 0;
    return Math.min((raised / minF) * 100, 100);
  })();

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.outerWidth <= 425) {
        setScreen("mobile");
      } else {
        setScreen("desktop");
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Set the initial state
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // On card click, navigate or open the post detail
  const handleCardClick = () => {
    navigate(`/post/${id}`);
  };

  return (
    <Box
      onClick={handleCardClick}
      width={vertical ? "400px" : "900px"}
      height={vertical ? "550px" : "300px"}
      display="flex"
      flexDirection={vertical ? "column" : "row"}
      borderRadius="20px"
      overflow="hidden"
      bgcolor="bg.primary"
      border="1px solid"
      borderColor="button.tGrayFG"
      sx={{
        cursor: "pointer",
        transition: "box-shadow 0.3s ease-in-out",
        "&:hover": {
          boxShadow: 4, // or any shadow level you prefer
        },
      }}
    >
      {/* Left / Text Section */}
      <Box
        width={vertical ? "400px" : "500px"}
        height="300px"
        order={vertical ? 2 : 1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent={vertical ? "" : "center"}
      >
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            m: vertical ? "" : 2,
            height: "10px",
            width: vertical ? "100%" : "90%",
            borderRadius: 5,
            order: vertical ? 1 : 2,
          }}
        />
        <Box
          width="90%"
          height="80%"
          alignItems="center"
          display="flex"
          flexDirection="column"
          order={vertical ? 2 : 1}
          position="relative"
        >
          {/* Project Title / Info */}
          <Stack
            direction="row"
            width="100%"
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              direction: "rtl",
            }}
          >
            <Box display="flex" flexDirection="row" gap={2}>
              {/* Profile Image */}
              {profileImageUrl ? (
                <CardMedia
                  component="img"
                  image={`https://back.ideyar-app.ir/api/image/${profileImageUrl}`}
                  alt={`${username}'s profile`}
                  sx={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                  }}
                />
              ) : (
                <Box
                  borderRadius="50%"
                  width="50px"
                  height="50px"
                  bgcolor="#D9D9D9"
                />
              )}
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Typography variant="body2" fontWeight="bold">
                  {title}
                </Typography>
                <Typography variant="body2">{username}</Typography>
              </Box>
            </Box>
            <BookmarkButton id={id.toString()} defaultValue={false} />
          </Stack>
          <Box
            width="100%"
            height="70%"
            order={vertical ? 2 : 1}
            sx={{ direction: "rtl" }}
          >
            <Typography variant="body2" fontWeight="bold">
              {description}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Post Image */}
      <CardMedia
        component="img"
        image={
          image
            ? `https://back.ideyar-app.ir/api/image/${image}`
            : "https://via.placeholder.com/400x200"
        }
        alt={title}
        sx={{
          width: "400px",
          height: "300px",
          order: vertical ? 1 : 2,
        }}
      />
    </Box>
  );
};

export default PostPreview;
