// src/components/Header/Header.tsx
import React, { useState, useEffect, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  Typography,
  Box,
  IconButton,
  Stack,
  TextField,
  InputAdornment,
  CssBaseline,
  Grow,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CustomButton from "../buttons/BaseButtonWithIcon";
import DarkModeButton from "./DarkModeButton";
import ExploreIcon from "@mui/icons-material/Explore";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoginIcon from "@mui/icons-material/Login";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to manage search input
  const [showSearch, setShowSearch] = useState(false); // State to toggle search box visibility
  const searchInputRef = useRef<HTMLInputElement>(null); // Ref to focus the search input

  // Handle changes in the search input
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Clear the search input
  const clearSearch = () => {
    setSearchTerm("");
  };

  // Toggle the visibility of the search box
  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
    if (!showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  // Close search box on pressing Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && showSearch) {
        setShowSearch(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showSearch]);

  return (
    <>
      <CssBaseline />
      <Box>
        <AppBar
          position="static"
          sx={{
            direction: "rtl",
            backgroundColor: "#f8f9fa", // Light background color
            color: "#333", // Dark text color
            boxShadow: "none",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap", // Allow wrapping on smaller screens
            }}
          >
            {/* Grouped Box for Brand and Navigation Buttons */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2, // Space between brand and navigation buttons
                flexWrap: "wrap",
              }}
            >
              {/* Left-Aligned Brand Logo */}
              <Typography
                variant="h6"
                sx={{
                  textAlign: "left",
                  whiteSpace: "nowrap", // Prevent text wrapping
                  mb: { xs: 1, sm: 0 }, // Margin bottom on small screens
                }}
              >
                ایده یار
              </Typography>

              {/* Navigation Buttons */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  flexWrap: "wrap", // Allow wrapping on smaller screens
                  justifyContent: { xs: "center", sm: "flex-start" },
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  {/* "کاوش" Button */}
                  <CustomButton>
                    <ExploreIcon sx={{ marginLeft: 0.5 }} />
                    کاوش
                  </CustomButton>

                  {/* "شروع پروژه" Button */}
                  <CustomButton>
                    <AddCircleIcon sx={{ marginLeft: 0.5 }} />
                    شروع پروژه
                  </CustomButton>
                </Stack>
              </Box>
            </Box>

            {/* Right-Aligned Buttons */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap", // Allow wrapping on smaller screens
                justifyContent: { xs: "center", sm: "flex-start" },
                width: { xs: "100%", sm: "auto" }, // Full width on small screens
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                {/* Search Box / Icon Section */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                    padding: "0 16px", // Adjust padding for spacing
                  }}
                >
                  {showSearch ? (
                    <Grow in={showSearch} timeout={500}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          width: "auto", // Auto width for the search box
                        }}
                      >
                        <TextField
                          variant="outlined"
                          placeholder="جستجو..."
                          size="small"
                          value={searchTerm}
                          onChange={handleSearchChange}
                          inputRef={searchInputRef}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SearchIcon />
                              </InputAdornment>
                            ),
                            endAdornment: searchTerm ? (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={clearSearch}
                                  aria-label="clear search"
                                >
                                  <CloseIcon />
                                </IconButton>
                              </InputAdornment>
                            ) : null,
                          }}
                          sx={{
                            borderRadius: 2,
                            "& .MuiOutlinedInput-root": {
                              borderRadius: 2,
                            },
                          }}
                        />
                      </Box>
                    </Grow>
                  ) : (
                    <IconButton onClick={toggleSearch} aria-label="search">
                      <SearchIcon />
                    </IconButton>
                  )}
                </Box>
                <DarkModeButton />
                {/* "ورود" Button */}
                <CustomButton>
                  <LoginIcon sx={{ marginLeft: 0.5 }} />
                  ورود
                </CustomButton>
              </Stack>
            </Box>

            {/* Hamburger Icon for Mobile */}
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
                mt: { xs: 1, sm: 0 },
              }}
            >
              <IconButton color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
