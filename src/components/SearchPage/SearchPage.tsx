import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import PostPreview from "../../pages/PreviewPage/PostPreview";
import SecondaryButton from "../buttons/SecondaryButton";
import PrimaryButton from "../buttons/PrimaryButton";
import { enqueueSnackbar } from "notistack";
import { searchPostsApi, SearchPostsResponse } from "../../apis/searchPostsApi";
import MultipleTextField from "../textField/multipleTextField";
import SingleTextField from "../textField/singleTextField";
import MultipleSelectChip from "../textField/multipleTextField";

// type Post = {
//   description: string;
//   id: string;
//   image: string;
//   profileImageUrl: string;
//   title: string;
//   userId: string;
//   username: string;
// };

const SearchPage = () => {
  const location = useLocation();
  const selectedCategoryFromNav = location.state?.selectedCategory || null;

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    selectedCategoryFromNav ? [selectedCategoryFromNav] : []
  );

  const handleCategoriesChange = (categories: string[]) => {
    console.log("Selected Categories:", categories);
    setSelectedCategories(categories);
  };

  const [searchedPosts, setSearchedPosts] =
    useState<SearchPostsResponse | null>(null);
  const searchObject = useParams().object;

  useEffect(() => {
    if (searchObject) {
      console.log("Triggering API call for:", searchObject);

      searchPostsApi(searchObject, 0)
        .then((response) => {
          console.log("here");
          console.log("API Response:", response);
          if (response) {
            console.log("Posts:", response);
            setSearchedPosts(response);
          }
        })
        .catch((err) => {
          console.log("API Error:", err);
        });
    }
  }, [searchObject]);
  return (
    <Box
      display="flex"
      flexDirection="row"
      py={5}
      gap={searchedPosts?.posts.length || 0 > 0 ? 20 : 10}
      justifyContent="center"
    >
      <Box
        py={2}
        display="flex"
        flexDirection="column"
        sx={{
          direction: "rtl",
          border: "2px solid",
          borderRadius: "20px",
          borderColor: "border.sGray",
        }}
        height="300px"
        width="300px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box display="flex" flexDirection="column" gap={2}>
          <SingleTextField
            selects={["محبوب ترین", "جدیدترین", "قدیمی ترین", "پر بازدیدترین"]}
          />
          <MultipleSelectChip
            categories={selectedCategories}
            onCategoriesChange={handleCategoriesChange}
          />
        </Box>

        <PrimaryButton height="40px" width="260px" text="اعمال فیلترها" />
      </Box>
      {searchedPosts ? (
        <Box display="flex" flexDirection="column" gap={2}>
          {searchedPosts.posts.map((post, index) => (
            <PostPreview
              id={1}
              username={post.username}
              description={post.description}
              title={post.title}
              image={post.image}
              minimumFund="10000"
              fundRaised="100"
              key={index}
            />
          ))}
        </Box>
      ) : (
        <Box
          width="980px"
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default SearchPage;
