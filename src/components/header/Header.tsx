import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Box, IconButton, Stack, CssBaseline } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeButton from "../buttons/DarkModeButton";
import ExploreIcon from "@mui/icons-material/Explore";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout"; // <-- Import Logout icon
import SecondaryButton from "../buttons/SecondaryButton";
import PrimaryButton from "../buttons/PrimaryButton";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import Logo from "../logo/Logo";
import { useSelector, useDispatch } from "react-redux"; // <-- Import useDispatch
import { RootState } from "../../store/store";
import UserButton from "./UserButton";
import { clearSession } from "../../store/sessionSlice"; // <-- Import clearSession

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const session = useSelector((state: RootState) => state.session);

  // Handler for Login Button
  const handleLoginClick = () => {
    navigate("/login"); // Navigate to /login
  };

  // Handler for Logout Button
  const handleLogoutClick = () => {
    dispatch(clearSession()); // Clears session state
    navigate("/"); // Navigate to home page (or any route you prefer)
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
            paddingX: 3.5,
            borderBottom: 2,
            borderColor: "border.sGray",
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
            {/* Left Section: Logo and Navigation */}
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
                  <SecondaryButton
                    text="کاوش"
                    rightIcon={ExploreIcon}
                    onClick={() => navigate("/search")}
                  />
                  <SecondaryButton
                    text="شروع پروژه"
                    rightIcon={AddCircleIcon}
                    onClick={() => navigate("/create-post")}
                  />
                </Stack>
              </Box>
            </Box>

            {/* Right Section: Search, Theme Toggle, User/Login/Logout */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap",
                justifyContent: { xs: "center", sm: "flex-start" },
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box width={10} height={10} />
                <Search />
                <DarkModeButton />

                {session.isLoggedIn ? (
                  <>
                    <UserButton />
                    {/* Logout Button */}
                    <PrimaryButton
                      text="خروج" // "Logout" in Persian/Farsi
                      leftIcon={LogoutIcon} // Use LogoutIcon for clarity
                      onClick={handleLogoutClick}
                    />
                  </>
                ) : (
                  <PrimaryButton
                    text="ورود" // "Login" in Persian/Farsi
                    leftIcon={LoginIcon}
                    onClick={handleLoginClick}
                  />
                )}
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
