import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import ArtsIcon from "@mui/icons-material/Brush"; // برای هنر
import VideoIcon from "@mui/icons-material/Videocam"; // برای ویدئو
import ProjectIcon from "@mui/icons-material/Star"; // برای پروژه‌ها
import DesignIcon from "@mui/icons-material/DesignServices"; // برای طراحی
// می‌توانید آیکن‌های بیشتری اضافه کنید

// استایل برای باکس‌های دسته‌بندی
const CategoryBox = styled(Box)(({ theme }) => ({
  width: 80, // عرض باکس
  height: 80, // ارتفاع باکس
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: theme.spacing(2), // فاصله یکسان
  borderRadius: 8,
  transition: "transform 0.3s",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.1)", // بزرگ شدن باکس هنگام hover
  },
  backgroundColor: "#f0f0f0", // رنگ پس‌زمینه
}));

// دسته‌بندی‌ها با آیکن‌ها و برچسب‌ها
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
  // دسته‌بندی‌های دیگر را اضافه کنید
];

const CategoryGrid: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: 2,
      }}
    >
      {categories.map((category, index) => (
        <CategoryBox key={index}>
          <IconButton>{category.icon}</IconButton>
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            {category.label}
          </Typography>
        </CategoryBox>
      ))}
    </Box>
  );
};

export default CategoryGrid;
