import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from "@mui/material";
import LogoSvg from "../../assets/typography_logo.svg?react";
import { brand, white, grayLightMode } from "../../theme/colors";
import { useNavigate } from "react-router-dom";
const Logo = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";
    const handleClick = () => {
        navigate("/");
    };
    return (_jsx(LogoSvg, { height: "40px", onClick: handleClick, style: {
            "--text-color": isDarkMode ? white : grayLightMode[700],
            "--logo-color": isDarkMode ? brand[400] : brand[600],
        } }));
};
export default Logo;
