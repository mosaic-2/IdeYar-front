import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from "@mui/material";
const GrayLink = ({ children, href }) => {
    return (_jsx(Link, { variant: "buttonT3", underline: "hover", href: href, sx: {
            color: "button.linkGrayFg",
            "&:hover": {
                color: "button.linkGrayFgHover",
            },
            "&:active": {
                color: "button.linkGrayFgPressed",
            },
        }, children: children }));
};
export default GrayLink;
