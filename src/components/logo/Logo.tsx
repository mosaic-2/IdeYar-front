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

  return (
    <LogoSvg
      height="40px"
      onClick={handleClick}
      cursor="pointer"
      style={
        {
          cursor: "pointer",
          "--text-color": isDarkMode ? white : grayLightMode[700],
          "--logo-color": isDarkMode ? brand[400] : brand[600],
        } as React.CSSProperties
      }
    />
  );
};

export default Logo;
