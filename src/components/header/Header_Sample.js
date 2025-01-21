import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, CssBaseline, Stack, useMediaQuery, useTheme, } from "@mui/material";
import DarkModeButton from "../buttons/DarkModeButton";
import UserButton from "./UserButton";
import MenuIcon from "@mui/icons-material/Menu";
import SecondaryButton from "../buttons/SecondaryButton";
const Header = () => {
    const theme = useTheme();
    const breakpoint = useMediaQuery(theme.breakpoints.up("md"));
    return (_jsxs(_Fragment, { children: [_jsx(CssBaseline, {}), _jsxs(Box, { sx: { flexGrow: 1 }, children: [_jsxs(Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", marginX: breakpoint ? 7.5 : 1, paddingX: 1.5, paddingY: 1.75, children: [_jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [_jsx(UserButton, {}), _jsx(DarkModeButton, {})] }), _jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [breakpoint && (_jsx(SecondaryButton, { text: "\u0641\u0631\u0635\u062A \u0647\u0645\u06A9\u0627\u0631\u06CC", badge: "\u0628\u0647 \u0632\u0648\u062F\u06CC" })), breakpoint && _jsx(SecondaryButton, { text: "\u0628\u0644\u0627\u06AF" }), breakpoint && _jsx(SecondaryButton, { text: "\u062F\u0631\u0628\u0627\u0631\u0647 \u0645\u0627" }), breakpoint && _jsx(SecondaryButton, { text: "\u0645\u062D\u0635\u0648\u0644\u0627\u062A" }), !breakpoint && _jsx(MenuIcon, { sx: { color: "button.tGrayFg" } })] })] }), _jsx(Box, { height: "0.5px", bgcolor: "border.sGray" })] })] }));
};
export default Header;
