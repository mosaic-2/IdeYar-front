import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Typography } from "@mui/material";
const ProjectCardProfile = ({ title, description, imageUrl }) => {
    return (_jsxs(Box, { display: "flex", alignItems: "center", mb: 2, sx: {
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            width: "100%",
            bgcolor: "background.default",
            direction: "rtl", // Set text direction to RTL
        }, children: [_jsx(Box, { sx: {
                    width: "25%",
                    height: "200px", // Set a fixed height for the image section
                    overflow: "hidden",
                    borderRadius: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }, children: _jsx("img", { src: imageUrl, alt: title, style: { width: "100%", height: "100%", objectFit: "cover" } }) }), _jsxs(Box, { flex: "1", p: 2, children: [_jsx(Typography, { variant: "h6", children: title }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: description })] })] }));
};
export default ProjectCardProfile;
