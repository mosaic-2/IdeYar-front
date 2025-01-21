import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "@mui/material";
const SimpleLayout = ({ children }) => {
    return (_jsx(Box, { sx: { paddingX: 20 }, marginBottom: 1, children: children }));
};
export default SimpleLayout;
