import { IconButton, useTheme } from "@mui/material";
import Bookmark from "../../assets/bookmark-.svg?react";
import BookmarkFill from "../../assets/bookmark-fill.svg?react";
import { MouseEvent, useState } from "react";
import { grayDarkMode, grayLightMode } from "../../theme/colors";

interface Props {
  id: string;
  defaultValue: boolean;
}

const BookmarkButton = ({ id, defaultValue }: Props) => {
  const [state, setState] = useState(defaultValue);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const handleBookmarkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
    setState((prev) => {
      return !prev;
    });
  };

  return (
    <IconButton
      href=""
      sx={{
        width: 40,
        height: 40,
        backgroundColor: "background.paper",
        "&:hover": {
          backgroundColor: "action.hover",
        },
      }}
      onClick={handleBookmarkClick}
    >
      {state ? (
        <BookmarkFill
          fill={isDarkMode ? grayDarkMode[300] : grayLightMode[600]}
        />
      ) : (
        <Bookmark
          fill={isDarkMode ? grayDarkMode[300] : grayLightMode[600]}
          stroke={isDarkMode ? grayDarkMode[300] : grayLightMode[600]}
        />
      )}
    </IconButton>
  );
};

export default BookmarkButton;
