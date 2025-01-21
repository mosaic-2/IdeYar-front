import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Typography, IconButton } from "@mui/material";
import ArtsIcon from "@mui/icons-material/Brush";
import VideoIcon from "@mui/icons-material/Videocam";
import ProjectIcon from "@mui/icons-material/Star";
import DesignIcon from "@mui/icons-material/DesignServices";
import { useNavigate } from "react-router-dom";
const categories = [
    { icon: _jsx(ArtsIcon, {}), label: "هنر" },
    { icon: _jsx(VideoIcon, {}), label: "ویدئو" },
    { icon: _jsx(ProjectIcon, {}), label: "پروژه‌ها" },
    { icon: _jsx(DesignIcon, {}), label: "طراحی" },
    { icon: _jsx(ArtsIcon, {}), label: "سرامیک" },
    { icon: _jsx(ArtsIcon, {}), label: "هنر مفهومی" },
    { icon: _jsx(ArtsIcon, {}), label: "هنر دیجیتال" },
    { icon: _jsx(ArtsIcon, {}), label: "تصویرسازی" },
    { icon: _jsx(ArtsIcon, {}), label: "نصب" },
];
const CategoryGrid = () => {
    const navigate = useNavigate();
    const handleCategoryClick = (category) => {
        navigate("/search", { state: { selectedCategory: category } });
    };
    return (_jsx(Box, { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 4, children: categories.map((category, index) => (_jsxs(Box, { onClick: () => handleCategoryClick(category.label), sx: {
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
            }, children: [_jsx(IconButton, { children: category.icon }), _jsx(Typography, { variant: "body2", sx: { marginTop: 1 }, children: category.label })] }, index))) }));
};
export default CategoryGrid;
