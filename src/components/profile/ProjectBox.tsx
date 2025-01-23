import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  CircularProgress,
  styled,
} from "@mui/material";

// APIs
import { getUserFunds, FundOverview } from "../../apis/userFundsApi";
import { getUserProjects, Project } from "../../apis/userProjectsApi";
import { getUserBookmarksApi } from "../../apis/userBookmarksApi";

// Component
import PostPreview from "../../pages/PreviewPage/PostPreview";

// A styled Tab with pill/circular shape (optional)
const PillTab = styled(Tab)(({ theme }) => ({
  borderRadius: "20px",
  minHeight: "36px",
  // padding: theme.spacing(1, 2),
  // margin: theme.spacing(0, 1),
  "&:hover": {
    // Example hover color; can be changed
    backgroundColor: "bg.primary",
  },
}));

interface CustomTabProps {
  label: string;
  selected?: boolean;
  [key: string]: any;
}

const CustomTab = ({ label, selected, ...props }: CustomTabProps) => (
  <PillTab
    label={
      <Typography
        variant="body1"
        sx={{
          fontWeight: selected ? "bold" : "normal",
          color: selected ? "black" : "gray",
          fontSize: "16px",
          textTransform: "none",
        }}
      >
        {label}
      </Typography>
    }
    {...props}
  />
);

const ProjectsBox: React.FC = () => {
  const [tabValue, setTabValue] = useState<number>(0);
  const [projects, setProjects] = useState<Project[]>([]);
  const [funds, setFunds] = useState<FundOverview[]>([]);
  const [bookmarks, setBookmarks] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const { posts } = await getUserProjects();
      setProjects(posts);
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

  const fetchBookmarks = async () => {
    setLoading(true);
    try {
      const { posts } = await getUserBookmarksApi();
      setBookmarks(posts);
    } catch (error) {
      console.error("Error fetching bookmarks:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when tab changes
  useEffect(() => {
    if (tabValue === 0) fetchProjects();
    else if (tabValue === 1) fetchFunds();
    else if (tabValue === 2) fetchBookmarks();
  }, [tabValue]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={1}
      width="100%"
    >
      {/* Tab Navigation */}
      <Box sx={{ width: "100%", mb: 2 }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="Projects / Funds / Bookmarks"
          sx={{
            backgroundColor: "pg.secondary", // Change to any color you like
            borderRadius: "30px",
            padding: "2px",
            "& .MuiTabs-indicator": { display: "none" },
          }}
        >
          <CustomTab label="پروژه های من" selected={tabValue === 0} />
          <CustomTab label="حمایت های من" selected={tabValue === 1} />
          <CustomTab label="ذخیره ها" selected={tabValue === 2} />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          {/* Projects Tab */}
          {tabValue === 0 && (
            <Box
              p={2}
              width="100%"
              /* Center everything horizontally */
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              {projects.length === 0 ? (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 2, textAlign: "center" }}
                >
                  شما هیچ پروژه ای ندارید
                </Typography>
              ) : (
                projects.map((project, index) => (
                  <Box key={index} mb={3}>
                    <PostPreview
                      id={project.id}
                      title={project.title}
                      description={project.description}
                      username={project.username}
                      profileImageUrl={project.profileImageUrl}
                      minimumFund={project.minimumFund}
                      fundRaised={project.fundRaised}
                      image={project.image}
                    />
                  </Box>
                ))
              )}
            </Box>
          )}

          {/* Funds Tab */}
          {tabValue === 1 && (
            <Box
              p={2}
              width="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              {funds.length === 0 ? (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 2, textAlign: "center" }}
                >
                  شما از هیچ پروژه ای حمایت نکرده‌اید
                </Typography>
              ) : (
                funds.map((fund, index) => (
                  <Box key={index} mb={3}>
                    <PostPreview
                      id={fund.post.id}
                      title={fund.post.title}
                      description={fund.post.description}
                      username={fund.post.username}
                      profileImageUrl={fund.post.profileImageUrl}
                      minimumFund={fund.post.minimumFund}
                      fundRaised={fund.amount} // or fund.post.fundRaised
                      image={fund.post.image}
                    />
                  </Box>
                ))
              )}
            </Box>
          )}

          {/* Bookmarks Tab */}
          {tabValue === 2 && (
            <Box
              p={2}
              width="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              {bookmarks.length === 0 ? (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 2, textAlign: "center" }}
                >
                  تاکنون هیچ پستی را ذخیره نکرده‌اید
                </Typography>
              ) : (
                bookmarks.map((post, index) => (
                  <Box key={index} mb={3}>
                    <PostPreview
                      id={post.id}
                      title={post.title}
                      description={post.description}
                      username={post.username}
                      profileImageUrl={post.profileImageUrl}
                      minimumFund={post.minimumFund}
                      fundRaised={post.fundRaised}
                      image={post.image}
                    />
                  </Box>
                ))
              )}
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default ProjectsBox;
