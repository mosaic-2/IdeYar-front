import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "@mui/material";
import PageLayout from "./layouts/PageLayout";
import StickyLeftLayout from "./layouts/StickyLeftLayout";
const HelloWorldStickyLeft = () => {
    return (_jsx(PageLayout, { children: _jsx(StickyLeftLayout, { leftFrame: _jsx(Box, { width: "100%", height: "400px", sx: { bgcolor: "blue" } }), children: _jsx(Box, { width: "100%", height: "2400px", sx: { bgcolor: "red" } }) }) }));
};
export default HelloWorldStickyLeft;
