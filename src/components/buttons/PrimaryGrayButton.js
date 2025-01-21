import { jsx as _jsx } from "react/jsx-runtime";
import BaseButtonWithIcon from "./BaseButtonWithIcon";
import { Typography } from "@mui/material";
const PrimaryGrayButton = ({ text, badge, leftIcon, rightIcon, viewBox, width, height, borderRadius, onClick, }) => {
    return (_jsx(BaseButtonWithIcon, { badge: badge, leftIcon: leftIcon, rightIcon: rightIcon, sx: {
            width: width,
            height: height,
            paddingX: 1.5,
            border: 2,
            borderRadius: borderRadius,
            borderColor: "button.primaryGrayBd",
            bgcolor: "button.primaryGrayBg",
            color: "button.primaryGrayFg",
            "&:hover": {
                bgcolor: "button.primaryGrayBgHover",
            },
            "&:active": {
                bgcolor: "button.primaryGrayBgPressed",
            },
        }, viewBox: viewBox, onClick: onClick, children: _jsx(Typography, { variant: "buttonT3", children: text }) }));
};
export default PrimaryGrayButton;
