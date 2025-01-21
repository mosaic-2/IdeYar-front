import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import { getUserFunds } from "../../apis/userFundsApi.ts";
import { getUserProjects } from "../../apis/userProjectsApi";
import PostPreview from "../../pages/PreviewPage/PostPreview";

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
  const [projects, setProjects] = useState([]);
  const [funds, setFunds] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const { posts } = await getUserProjects();
      setProjects(posts);
      console.log(posts);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchFunds = async () => {
    setLoading(true);
    try {
      const { fundOverviews } = await getUserFunds();
      setFunds(fundOverviews);
    } catch (error) {
      console.error("Error fetching funds:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (tabValue === 0) {
      fetchProjects();
    } else if (tabValue === 1) {
      fetchFunds();
    }
  }, [tabValue]);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={3}>
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
      {loading ? (
        <CircularProgress />
      ) : tabValue === 0 ? (
        <Box p={2}>
          {projects.length === 0 ? (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 2, textAlign: "center" }}
            >
              .شما هیچ پروژه ای ندارید
            </Typography>
          ) : (
            projects.map((project, index) => (
              <PostPreview key={index} {...project} />
            ))
          )}
        </Box>
      ) : (
        <Box p={2}>
          {funds.length === 0 ? (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 2, textAlign: "center" }}
            >
              .شما از هیچ پروژه ای حمایت نکردین
            </Typography>
          ) : (
            funds.map((fund, index) => (
              <PostPreview
                key={index}
                {...fund.clearpost}
                fundRaised={fund.amount}
              />
            ))
          )}
        </Box>
      )}
    </Box>
  );
};

export default ProjectsBox;
