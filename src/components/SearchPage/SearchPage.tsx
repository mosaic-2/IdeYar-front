import {
  Box,
  CircularProgress,
  Card,
  CardMedia,
  LinearProgress,
  Typography,
  IconButton,
  useTheme,
  styled,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import PrimaryButton from "../buttons/PrimaryButton";
import { Post, SearchFilter, searchPostsApi } from "../../apis/searchPostsApi";
import SingleTextField from "../textField/singleTextField";
import MultipleSelectChip from "../textField/multipleTextField";
import StickyLeftLayout from "../layouts/StickyLeftLayout";
import Bookmark from "../../assets/bookmark.svg?react";

// Styled Components
const ModernCard = styled(Card)(({ theme }) => ({
  borderRadius: "20px",
  border: `1px solid ${theme.palette.divider}`,
  transition: "all 0.3s ease",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  height: "auto",
  direction: "rtl",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: theme.shadows[6],
  },
}));

const ProgressContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  position: "relative",
}));

const ProfileBadge = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  alignItems: "center",
  width: "100%",
  direction: "rtl",
}));

// Post Preview Component
const PostPreview = ({
  id,
  username,
  description,
  title,
  image,
  profileImageUrl,
  minimumFund,
  fundRaised,
}: Post) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);

  const progress = Math.min(
    (Number(fundRaised || 0) / Number(minimumFund || 1)) * 100,
    100
  );

  const handleCardClick = () => {
    navigate(`/post/${id}`);
  };

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };

  return (
    <ModernCard onClick={handleCardClick}>
      <CardMedia
        component="img"
        sx={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
        }}
        src={image || "https://via.placeholder.com/400x300"}
        alt={title}
      />
      <ProgressContainer>
        <IconButton
          sx={{
            position: "absolute",
            left: 16,
            top: 16,
            backgroundColor: "background.paper",
            "&:hover": {
              backgroundColor: "action.hover",
            },
          }}
          onClick={handleBookmarkClick}
        >
          <Bookmark
            fill={isBookmarked ? theme.palette.primary.main : "none"}
            stroke={theme.palette.primary.main}
            strokeWidth={1.5}
          />
        </IconButton>

        <ProfileBadge>
          {profileImageUrl ? (
            <CardMedia
              component="img"
              image={profileImageUrl}
              alt={username}
              sx={{ width: 50, height: 50, borderRadius: "50%" }}
            />
          ) : (
            <Box
              sx={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                bgcolor: "grey.300",
              }}
            />
          )}
          <Box>
            <Typography variant="h6" fontWeight={700} textAlign="right">
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="right"
            >
              {username}
            </Typography>
          </Box>
        </ProfileBadge>

        <Box
          sx={{
            height: "4.5em",
            overflow: "hidden",
            position: "relative",
            textAlign: "right",
            lineHeight: 1.5,
            "&:after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "40%",
              height: "1.5em",
              background:
                "linear-gradient(to left, rgba(255,255,255,1) 50%, rgba(255,255,255,0))",
              pointerEvents: "none",
            },
          }}
        >
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "pre-line",
            }}
          >
            {description}
          </Typography>
        </Box>

        <Box width="100%">
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 10,
              borderRadius: 5,
              "& .MuiLinearProgress-bar": {
                borderRadius: 5,
                background: `linear(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              },
            }}
          />
          <Box
            display="flex"
            justifyContent="space-between"
            mt={1}
            color="text.secondary"
          >
            <Typography variant="caption">
              جمع‌آوری شده: {Number(fundRaised).toLocaleString()}
            </Typography>
            <Typography variant="caption">
              هدف: {Number(minimumFund).toLocaleString()} (
              {Math.round(progress)}%)
            </Typography>
          </Box>
        </Box>
      </ProgressContainer>
    </ModernCard>
  );
};

// Search Page Component
const SearchPage = () => {
  const location = useLocation();
  const theme = useTheme();
  const { object } = useParams();
  const [loading, setLoading] = useState(false);

  const [filter, setFilter] = useState<SearchFilter>({
    categories: location.state?.selectedCategory
      ? [location.state.selectedCategory]
      : [],
    ascending: false,
    sort_by: null,
  });

  const [searchedPosts, setSearchedPosts] = useState<Post[]>([]);

  const handleCategoriesChange = (categories: string[]) => {
    setFilter((prev) => ({ ...prev, categories }));
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await searchPostsApi(object || null, 0, filter);
      if (response) {
        setSearchedPosts(response.posts);
      }
    } catch (err) {
      console.error("API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [object]);

  return (
    <StickyLeftLayout
      leftFrame={
        <Box
          p={2}
          display="flex"
          flexDirection="column"
          gap={3}
          sx={{
            borderRadius: "16px",
            border: `1px solid ${theme.palette.divider}`,
            background: theme.palette.background.paper,
            height: "fit-content",
            position: "sticky",
            top: "80px",
            direction: "rtl",
          }}
        >
          <Box display="flex" flexDirection="column" gap={2}>
            <SingleTextField
              selects={[
                "محبوب ترین",
                "جدیدترین",
                "قدیمی ترین",
                "پر بازدیدترین",
              ]}
            />
            <MultipleSelectChip
              categories={filter.categories}
              onCategoriesChange={handleCategoriesChange}
            />
          </Box>

          <PrimaryButton
            onClick={handleSearch}
            // disabled={loading}
            // startIcon={
            //   loading ? (
            //     <CircularProgress size={20} />
            //   ) : (
            //     <Bookmark style={{ marginLeft: 8 }} />
            //   )
            // }
            // text={loading ? "در حال جستجو..." : "جست و جو"}
            text={"جست و جو"}
          />
        </Box>
      }
    >
      <Box
        py={5}
        display="grid"
        gridTemplateColumns={{
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
        maxWidth="xl"
        mx="auto"
        px={{ xs: 2, sm: 3 }}
        dir="rtl"
      >
        {searchedPosts.length > 0 ? (
          searchedPosts.map((post) => <PostPreview key={post.id} {...post} />)
        ) : (
          <Box textAlign="center" gridColumn="1 / -1" py={10}>
            <Typography variant="h6" color="text.secondary">
              پروژه ای با فیلترهای انتخابی شما یافت نشد
            </Typography>
          </Box>
        )}
      </Box>
    </StickyLeftLayout>
  );
};

export default SearchPage;
