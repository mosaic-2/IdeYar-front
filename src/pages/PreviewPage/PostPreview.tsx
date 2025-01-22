import React, { useState, useEffect } from "react";
import {
  Box,
  CardMedia,
  LinearProgress,
  Typography,
  IconButton,
} from "@mui/material";
import Bookmark from "../../assets/bookmark.svg?react";

interface PostPreviewProps {
  id: string | number; // <-- Add a prop to identify the post
  title: string;
  description: string;
  username: string;
  profileImageUrl?: string;
  minimumFund: string;
  fundRaised: string;
  image: string;
}

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

  const progress = Math.min(
    (Number(fundRaised) / Number(minimumFund)) * 100,
    100
  );

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
    handleResize(); // Set the initial state based on the current window size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigate to specific post
  const handleCardClick = () => {
    // You can also use React Router's useNavigate if you prefer
    // e.g. navigate(`/post/${id}`);
    window.location.href = `http://localhost:3000/post/${id}`;
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
        // Make the entire box clickable
        cursor: "pointer",
        transition: "box-shadow 0.3s ease-in-out",
        "&:hover": {
          boxShadow: 4, // or any shadow level you prefer
        },
      }}
    >
      {/* Left/Text Section */}
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
          {/* Project Title/Info */}
          <Box
            width="100%"
            height="30%"
            order={vertical ? 2 : 1}
            sx={{ direction: "rtl" }}
            alignContent="center"
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
          </Box>
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
          {/* Bookmark SVG */}
          <IconButton
            sx={{
              position: "absolute",
              left: 10,
              top: vertical ? "" : 20,
              bottom: vertical ? -20 : "",
            }}
            onClick={(e) => {
              // Prevent card click from firing
              e.stopPropagation();
              setIsClicked(!isClicked);
            }}
          >
            <Bookmark />
          </IconButton>
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
