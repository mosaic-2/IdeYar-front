import { jsx as _jsx } from "react/jsx-runtime";
import BaseButtonWithIcon from "./BaseButtonWithIcon";
import { Typography } from "@mui/material";
const SecondaryButton = ({ text, badge, leftIcon, rightIcon, viewBox, width, height, onClick, }) => {
    return (_jsx(BaseButtonWithIcon, { badge: badge, leftIcon: leftIcon, rightIcon: rightIcon, sx: {
            width: width,
            height: height,
            paddingX: 1.5,
            color: "button.tGrayFg",
            "&:hover": {
                color: "button.tGrayFgHover",
            },
            "&:active": {
                color: "button.tGrayFgPressed",
            },
        }, viewBox: viewBox, onClick: onClick, children: _jsx(Typography, { variant: "buttonT3", children: text }) }));
};
export default SecondaryButton;
