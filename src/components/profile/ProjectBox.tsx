import React, { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import PrimaryButton from "../buttons/PrimaryButton";
import ProjectCardProfile from "./ProjectCardProfile";
import { useNavigate } from "react-router-dom";

// Sample project data for demonstration purposes
const myProjects = [
  {
    name: "پروژه شماره ۱",
    description: "این پروژه شامل توسعه یک برنامه موبایل است.",
    imageUrl: "https://via.placeholder.com/200",
  },
  {
    name: "پروژه شماره ۲",
    description: "این پروژه مربوط به طراحی یک وبسایت است.",
    imageUrl: "https://via.placeholder.com/200",
  },
  {
    name: "پروژه شماره ۳",
    description: "پروژه ای برای تحقیق و توسعه در حوزه هوش مصنوعی.",
    imageUrl: "https://via.placeholder.com/200",
  },
];

const mySupports = [
  {
    name: "حمایت از پروژه محیط زیست",
    description: "کمک به پروژه‌ای که روی حفاظت از جنگل‌ها تمرکز دارد.",
    imageUrl: "https://via.placeholder.com/200",
  },
  {
    name: "حمایت از پروژه آموزشی",
    description: "پروژه‌ای که هدفش آموزش به کودکان مناطق محروم است.",
    imageUrl: "https://via.placeholder.com/200",
  },
];

// Custom Tab Component with Styles
const CustomTab = ({ label, selected, ...props }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Tab
      label={
        <Typography
          variant="body1"
          sx={{
            fontWeight: selected ? "bold" : "normal",
            color: selected ? "black" : "gray",
            fontSize: isSmallScreen ? "14px" : "16px",
            textTransform: "none",
            "&:hover": {
              color: "black",
            },
          }}
        >
          {label}
        </Typography>
      }
      {...props}
    />
  );
};

const ProjectsBox = () => {
  const [tabValue, setTabValue] = useState(0);
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={3}
      // sx={{
      //   border: "1px solid #ddd",
      //   borderRadius: "16px",
      //   boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      //   width: "100%",
      //   bgcolor: "background.paper",
      //   direction: "rtl",
      // }}
    >
      {/* Tab Navigation */}
      <Box
        sx={{
          width: "100%",
          borderBottom: 1,
          borderColor: "divider",
          mb: 2,
        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="Projects and Supports Tabs"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "blue",
              height: "3px",
            },
          }}
        >
          <CustomTab label="پروژه های من" selected={tabValue === 0} />
          <CustomTab label="حمایت های من" selected={tabValue === 1} />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {/* My Projects Tab */}
      {tabValue === 0 && (
        <Box
          width="100%"
          sx={
            {
              // Optional: Add padding or other styles if needed
            }
          }
        >
          {/* Section Title for My Projects */}
          {/* <Box
            display="flex"
            alignItems="start"
            sx={{
              direction: "rtl",
              border: "1px solid #ddd",
              borderRadius: "50px",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
              bgcolor: "background.paper",
              width: "100%",
              mb: 2, // Adds margin below the title box
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ mx: 2, my: 1, fontWeight: "bold" }}
            >
              پروژه های من
            </Typography>
          </Box> */}

          {/* My Projects List or Message */}
          <Box p={2}>
            {myProjects.length === 0 ? (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, textAlign: "center" }}
              >
                .شما هیچ پروژه ای ندارید
              </Typography>
            ) : (
              myProjects.map((project, index) => (
                <ProjectCardProfile
                  key={index}
                  title={project.name || "عنوان پروژه"}
                  description={project.description || "توضیحات پروژه"}
                  imageUrl={
                    project.imageUrl || "https://via.placeholder.com/200"
                  }
                />
              ))
            )}

            {/* Add Project Button */}
            <Box display="flex" justifyContent="center" mt={2}>
              <PrimaryButton
                text="افزودن پروژه"
                width="100%" // Ensures the button spans the full width of the container
                onClick={() => {
                  console.log("Add Project button clicked");
                  // Implement the action for adding a project
                }}
                sx={{
                  bgcolor: "grayLightMode.400",
                  "&:hover": {
                    bgcolor: "grayLightMode.500",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      )}

      {/* My Supports Tab */}
      {tabValue === 1 && (
        <Box
          width="100%"
          sx={
            {
              // Optional: Add padding or other styles if needed
            }
          }
        >
          {/* Section Title for My Supports */}
          {/* <Box
            display="flex"
            alignItems="start"
            sx={{
              direction: "rtl",
              border: "1px solid #ddd",
              borderRadius: "50px",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
              bgcolor: "background.paper",
              width: "100%",
              mb: 2, // Adds margin below the title box
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              sx={{ mx: 2, my: 1, fontWeight: "bold" }}
            >
              حمایت های من
            </Typography>
          </Box> */}

          {/* My Supports List or Message */}
          <Box p={2}>
            {mySupports.length === 0 ? (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 2, textAlign: "center" }}
              >
                .شما از هیچ پروژه ای حمایت نکردین
              </Typography>
            ) : (
              mySupports.map((support, index) => (
                <ProjectCardProfile
                  key={index}
                  title={support.name || "عنوان پروژه"}
                  description={support.description || "توضیحات پروژه"}
                  imageUrl={
                    support.imageUrl || "https://via.placeholder.com/200"
                  }
                />
              ))
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ProjectsBox;
