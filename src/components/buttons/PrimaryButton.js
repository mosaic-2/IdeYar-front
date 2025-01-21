import { jsx as _jsx } from "react/jsx-runtime";
import BaseButtonWithIcon from "./BaseButtonWithIcon";
import { Typography } from "@mui/material";
const PrimaryButton = ({ text, badge, leftIcon, rightIcon, viewBox, width, height, sx, onClick, }) => {
    return (_jsx(BaseButtonWithIcon, { badge: badge, leftIcon: leftIcon, rightIcon: rightIcon, sx: {
            width: width ? width : "100%",
            height: height,
            paddingX: 1.5,
            bgcolor: "button.primaryBg",
            color: "button.primaryFg",
            "&:hover": {
                bgcolor: "button.primaryBgHover",
            },
            "&:active": {
                bgcolor: "button.primaryBgPressed",
            },
            ...sx,
        }, viewBox: viewBox, onClick: onClick, children: _jsx(Typography, { variant: "buttonT3", children: text }) }));
};
export default PrimaryButton;
