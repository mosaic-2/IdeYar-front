import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Grid } from "@mui/material";
const StickyLeftLayout = ({ children, leftFrame }) => {
    return (_jsx(Box, { sx: { paddingX: 7.5 }, marginBottom: 1, children: _jsxs(Grid, { container: true, spacing: 1.5, direction: { xs: "column-reverse", md: "row" }, children: [_jsx(Grid, { item: true, xs: 12, md: 3, children: _jsx(Box, { marginTop: 3, top: 30, position: "sticky", children: leftFrame }) }), _jsx(Grid, { item: true, xs: 12, md: 9, children: _jsx(Grid, { container: true, spacing: 1.5, columns: 9, children: _jsx(Grid, { item: true, xs: 12, md: 9, children: children }) }) })] }) }));
};
export default StickyLeftLayout;
