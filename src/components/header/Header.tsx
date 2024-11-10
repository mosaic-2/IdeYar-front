// src/components/Header/Header.tsx
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography, Box, IconButton, Stack, CssBaseline } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeButton from "../buttons/DarkModeButton";
import ExploreIcon from "@mui/icons-material/Explore";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoginIcon from "@mui/icons-material/Login";
import SecondaryButton from "../buttons/SecondaryButton";
import PrimaryButton from "../buttons/PrimaryButton";
import Search from "./Search";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Logo from "../logo/Logo";

const Header: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to /login
  };
  return (
    <>
      <CssBaseline />
      <Box>
        <AppBar
          position="static"
          sx={{
            direction: "rtl",
            backgroundColor: "bg.primary",
            boxShadow: "none",
            backgroundImage: "none",
            borderBottom: 2,
            borderColor: "bg.secondary",
            paddingX: 3.5,
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {/* Grouped Box for Brand and Navigation Buttons */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Logo />

              {/* Navigation Buttons */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  flexWrap: "wrap",
                  justifyContent: { xs: "center", sm: "flex-start" },
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <SecondaryButton text="کاوش" rightIcon={ExploreIcon} />
                  <SecondaryButton
                    text="شروع پروژه"
                    rightIcon={AddCircleIcon}
                  />
                </Stack>
              </Box>
            </Box>

            {/* Right-Aligned Buttons */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap", // Allow wrapping on smaller screens
                justifyContent: { xs: "center", sm: "flex-start" },
                width: { xs: "100%", sm: "auto" }, // Full width on small screens
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <Search />
                <DarkModeButton />
                <PrimaryButton
                  text="ورود"
                  leftIcon={LoginIcon}
                  onClick={handleLoginClick}
                />
              </Stack>
            </Box>

            {/* Hamburger Icon for Mobile */}
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
                mt: { xs: 1, sm: 0 },
              }}
            >
              <IconButton color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
