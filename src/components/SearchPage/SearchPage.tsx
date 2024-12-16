import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostPreview from "../../pages/PreviewPage/PostPreview";
import SecondaryButton from "../buttons/SecondaryButton";
import PrimaryButton from "../buttons/PrimaryButton";

const SearchPage = () => {
  const searchObject = useParams().object;

  const categories: string[] = [
    "محبوب ترین",
    "تکنولوژی",
    "هنر",
    "ویدیو",
    "زمان ایجاد",
    "همه زمان ها",
    "مکان پروژه",
    "همه مکان ها",
  ];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    console.log(searchObject);
  }, [searchObject]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((c) => c !== category)
        : [...prevSelected, category]
    );
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      py={5}
      gap={20}
      justifyContent="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap={1}
        sx={{
          direction: "rtl",
          border: "2px solid",
          borderRadius: "20px",
          borderColor: "border.sGray",
        }}
        height="480px"
        width="300px"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          width="260px"
          height="36px"
          justifyItems="center"
          bgcolor="bg.tertiary"
          sx={{
            border: "1px solid",
            borderRadius: "6px",
            borderColor: "button.tGrayFg",
          }}
        >
          <Typography>مرتب سازی</Typography>
        </Box>

        {categories.map((category: string) => (
          <Box
            key={category}
            width="260px"
            height="36px"
            justifyItems="center"
            bgcolor={selectedCategories.includes(category) ? "bg.tertiary" : ""}
            sx={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: selectedCategories.includes(category) ? "1px solid" : "",
              borderRadius: "6px",
              borderColor: "button.tGrayFg",
            }}
            onClick={() => toggleCategory(category)}
          >
            <Typography>{category}</Typography>
          </Box>
        ))}

        <PrimaryButton height="40px" width="260px" text="اعمال فیلترها" />
      </Box>
      <Box display="flex" flexDirection="column" gap={2}>
        {[...Array(5)].map((_, index) => (
          <PostPreview key={index} />
        ))}
      </Box>
    </Box>
  );
};

export default SearchPage;
