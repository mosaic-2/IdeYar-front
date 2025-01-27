import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  CircularProgress,
  styled,
  useTheme,
} from "@mui/material";

// APIs
import { getUserFunds, FundOverview } from "../../apis/userFundsApi";
import { getUserProjects, Project } from "../../apis/userProjectsApi";
import { getUserBookmarksApi } from "../../apis/userBookmarksApi";

// Component
import PostPreview from "../../pages/PreviewPage/PostPreview";

// Styled Tab component with enhanced design
const PillTab = styled(Tab)(({ theme }) => ({
  borderRadius: "12px",
  minHeight: "48px",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  margin: theme.spacing(0.5),
  border: `2px solid transparent`,
  "&.Mui-selected": {
    backgroundColor: theme.palette.background.paper,
    borderColor: theme.palette.primary.main,
    boxShadow: theme.shadows[2],
  },
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

interface CustomTabProps {
  label: string;
  selected?: boolean;
  [key: string]: any;
}

const CustomTab = ({ label, selected, ...props }: CustomTabProps) => {
  const theme = useTheme();

  return (
    <PillTab
      label={
        <Typography
          variant="body1"
          sx={{
            fontWeight: selected ? 700 : 500,
            color: selected ? "primary.main" : "text.secondary",
            fontSize: "15px",
            textTransform: "none",
            px: 2,
            display: "flex",
            alignItems: "center",
            "&::before": selected
              ? {
                  content: '""',
                  display: "inline-block",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: theme.palette.primary.main,
                  marginRight: "8px",
                }
              : {},
          }}
        >
          {label}
        </Typography>
      }
      {...props}
    />
  );
};

const ProjectsBox: React.FC = () => {
  const theme = useTheme();
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
      {/* Enhanced Tab Navigation */}
      <Box sx={{ width: "100%", mb: 2 }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="Projects / Funds / Bookmarks"
          sx={{
            backgroundColor:
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.background.default,
            borderRadius: "16px",
            padding: "4px",
            border: `1px solid ${theme.palette.divider}`,
            "& .MuiTabs-flexContainer": {
              gap: "8px",
            },
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
