import { jsx as _jsx } from "react/jsx-runtime";
import Button from "@mui/material/Button";
const CustomButton = ({ startIcon, children, ...props }) => (_jsx(Button, { variant: "contained", startIcon: startIcon, ...props, sx: {
        backgroundColor: "primary",
        color: "white",
        "&:hover": {
            backgroundColor: "primary",
        },
        "&:active": {
            backgroundColor: "primary",
        },
        minWidth: "120px",
        textTransform: "none", // Keep text case as is
    }, children: children }));
export default CustomButton;
