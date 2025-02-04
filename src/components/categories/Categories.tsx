import { Box, Typography, IconButton } from "@mui/material";
import ArtsIcon from "@mui/icons-material/Brush";
import VideoIcon from "@mui/icons-material/Videocam";
import ProjectIcon from "@mui/icons-material/Star";
import DesignIcon from "@mui/icons-material/DesignServices";
import { useNavigate } from "react-router-dom";

const categories = [
  { icon: <ArtsIcon />, label: "هنر" },
  { icon: <VideoIcon />, label: "ویدئو" },
  { icon: <ProjectIcon />, label: "پروژه‌ها" },
  { icon: <DesignIcon />, label: "طراحی" },
  { icon: <ArtsIcon />, label: "سرامیک" },
  { icon: <ArtsIcon />, label: "هنر مفهومی" },
  { icon: <ArtsIcon />, label: "هنر دیجیتال" },
  { icon: <ArtsIcon />, label: "تصویرسازی" },
  { icon: <ArtsIcon />, label: "نصب" },
];

const CategoryGrid = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate("/search", { state: { selectedCategory: category } });
  };
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap={2}
      marginTop={3}
    >
      {categories.map((category, index) => (
        <Box
          key={index}
          onClick={() => handleCategoryClick(category.label)}
          sx={{
            width: 90,
            height: 90,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: 2,
            borderRadius: 4,
            transition: "transform 0.3s",
            cursor: "pointer",
            "&:hover": {
              transform: "scale(1.1)",
            },
            bgcolor: "bg.primary",
            border: 2,
            borderColor: "border.sBrand",
          }}
        >
          <IconButton>{category.icon}</IconButton>
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            {category.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CategoryGrid;
