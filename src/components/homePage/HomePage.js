import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Box, Typography } from "@mui/material";
import LandingImage1 from "../../assets/landing_1.svg?react";
import AutoSlider from "../AutoSlider/AutoSlider";
const IdeaYarSection = () => {
    return (_jsxs(Box, { sx: {
            direction: "rtl",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "bg.primaryBrand",
            pt: 2,
            pb: 3,
            borderRadius: "20px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }, children: [_jsx(LandingImage1, { width: 400 }), _jsxs(Box, { sx: {
                    my: 6,
                    width: "60%",
                    textAlign: "right",
                    p: 4,
                }, children: [_jsx(Typography, { variant: "h3", sx: { mb: 4, textAlign: "center" }, children: "\u0627\u06CC\u062F\u0647 \u06CC\u0627\u0631" }), _jsx(Typography, { variant: "body1", paragraph: true, sx: { textAlign: "justify" }, children: "\u0628\u0647 \u062C\u0645\u0639 \u062E\u0644\u0627\u0642\u0627\u0646 \u0628\u067E\u06CC\u0648\u0646\u062F\u06CC\u062F \u0648 \u0627\u0632 \u0627\u06CC\u062F\u0647\u200C\u0647\u0627\u06CC \u0646\u0648\u0622\u0648\u0631\u0627\u0646\u0647 \u062D\u0645\u0627\u06CC\u062A \u06A9\u0646\u06CC\u062F! \u0647\u0631 \u0627\u06CC\u062F\u0647\u060C \u0627\u0632 \u06CC\u06A9 \u0641\u06A9\u0631 \u0633\u0627\u062F\u0647 \u062A\u0627 \u06CC\u06A9 \u067E\u0631\u0648\u0698\u0647 \u0628\u0632\u0631\u06AF\u060C \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u062F \u062F\u0646\u06CC\u0627\u06CC \u0645\u0627 \u0631\u0627 \u062A\u063A\u06CC\u06CC\u0631 \u062F\u0647\u062F. \u0628\u0627 \u0647\u0645\u06A9\u0627\u0631\u06CC \u0648 \u062D\u0645\u0627\u06CC\u062A \u0634\u0645\u0627\u060C \u0645\u0627 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u0645 \u0628\u0647 \u0627\u06CC\u0646 \u0627\u06CC\u062F\u0647\u200C\u0647\u0627 \u062C\u0627\u0646 \u0628\u0628\u062E\u0634\u06CC\u0645 \u0648 \u0628\u0647 \u062A\u062D\u0642\u0642 \u0631\u0648\u06CC\u0627\u0647\u0627\u0645\u0627\u0646 \u06A9\u0645\u06A9 \u06A9\u0646\u06CC\u0645. \u0628\u0647 \u067E\u0644\u062A\u0641\u0631\u0645 \u0645\u0627 \u0628\u067E\u06CC\u0648\u0646\u062F\u06CC\u062F \u0648 \u06A9\u0634\u0641 \u06A9\u0646\u06CC\u062F \u06A9\u0647 \u0686\u06AF\u0648\u0646\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0646\u0642\u0634 \u0645\u0648\u062B\u0631\u06CC \u062F\u0631 \u0634\u06A9\u0644\u200C\u062F\u0647\u06CC \u0628\u0647 \u0622\u06CC\u0646\u062F\u0647 \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u06CC\u062F." })] })] }));
};
const HomePage = ({ posts }) => {
    return (_jsxs(Container, { sx: { mt: 4, mb: 4 }, children: [_jsx(IdeaYarSection, {}), _jsxs(Box, { sx: { mt: 8 }, children: [_jsx(Typography, { variant: "h4", align: "center", gutterBottom: true, sx: { mb: 3 }, children: "\u0628\u0647\u062A\u0631\u06CC\u0646 \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627" }), _jsxs(Box, { display: "flex", flexDirection: "row", width: "100%", px: 10, justifyContent: "space-between", children: [_jsx(AutoSlider, { posts: posts }), _jsx(Box, { alignSelf: "center", children: _jsx("img", { src: "src/assets/top_projects.png", alt: "Selected", style: { maxWidth: "400px", maxHeight: "300px" } }) })] })] })] }));
};
export default HomePage;
