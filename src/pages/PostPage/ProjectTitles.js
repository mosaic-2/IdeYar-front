import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Card, Typography } from "@mui/material";
const ProjectTitles = ({ titles, onTitleClick }) => {
    return (_jsx(Card, { sx: {
            boxShadow: "xs",
            width: "100%",
            maxWidth: 300,
            border: "1px solid",
            borderColor: "border.sGray",
            borderRadius: "15px",
            justifyContent: "center",
            direction: "rtl",
            p: 3,
        }, children: titles.map((title, index) => (_jsxs(Box, { display: "flex", flexDirection: "row", alignItems: "center", gap: 1.5, mb: 1, onClick: () => onTitleClick(index), sx: {
                cursor: "pointer",
                "&:hover": {
                    color: "brand.500",
                },
            }, children: [_jsx(Box, { borderRadius: 100, width: "15px", height: "15px", border: "1px solid", borderColor: "brand.500" }), _jsx(Typography, { variant: "body2", fontWeight: "bold", children: title })] }, index))) }));
};
export default ProjectTitles;
