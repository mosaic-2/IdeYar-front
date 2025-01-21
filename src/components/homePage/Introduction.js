import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Typography, Grid, Box } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PeopleIcon from "@mui/icons-material/People"; // New icon for additional section
import LandingImage2 from "../../assets/landing_2.svg?react";
import LandingImage3 from "../../assets/landing_3.svg?react";
const defaultImages = [
    "https://source.unsplash.com/random/400x300?creative",
    "https://source.unsplash.com/random/400x300?goal",
    "https://source.unsplash.com/random/400x300?community",
];
const sections = [
    {
        title: "هدف ما",
        description: "هدف ایده یار ایجاد بستری امن و قابل اعتماد برای خلاقان و حامیان است تا با همکاری یکدیگر پروژه‌های نوآورانه را به واقعیت تبدیل کنند.",
        icon: _jsx(EmojiEventsIcon, { color: "primary", sx: { fontSize: 40 } }),
        image: _jsx(LandingImage2, { width: 400 }),
    },
    {
        title: "جامعه ما",
        description: "ما به دنبال ایجاد یک جامعه پویا و مشارکتی هستیم که در آن خلاقان و حامیان با یکدیگر همکاری کنند تا ایده‌های جدید به زندگی بیایند.",
        icon: _jsx(PeopleIcon, { color: "primary", sx: { fontSize: 40 } }),
        image: _jsx(LandingImage3, { width: 400 }),
    },
    // Add more sections as needed
];
const IntroductionSection = () => {
    return (_jsx(Container, { sx: {
            direction: "rtl", // Right-to-left direction
            width: "80%", // Set container width to 80%
            margin: "0 auto", // Center the container
            mt: 8,
            mb: 8,
        }, children: _jsx(Grid, { container: true, spacing: 4, children: sections.map((section, index) => {
                const isEven = index % 2 === 0;
                return (_jsxs(Grid, { item: true, xs: 12, sx: {
                        display: "flex",
                        flexDirection: {
                            xs: "column",
                            md: isEven ? "row" : "row-reverse",
                        }, // Alternate row direction on md and up
                        alignItems: "center",
                        gap: 2,
                    }, children: [section.image, _jsxs(Box, { sx: {
                                width: { xs: "100%", md: "60%" },
                                textAlign: { xs: "center", md: "right" },
                            }, children: [_jsxs(Typography, { variant: "h4", gutterBottom: true, sx: { display: "flex", alignItems: "center" }, children: [section.icon, " ", _jsx("span", { style: { marginRight: "8px" }, children: section.title }), " "] }), _jsx(Typography, { variant: "body1", color: "text.secondary", sx: { textAlign: "justify" }, children: section.description })] })] }, index));
            }) }) }));
};
export default IntroductionSection;
