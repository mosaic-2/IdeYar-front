import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
import UserButton from "./UserButton";
import { clearSession } from "../../store/sessionSlice"; // <-- Import clearSession
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const session = useSelector((state) => state.session);
    // Handler for Login Button
    const handleLoginClick = () => {
        navigate("/login"); // Navigate to /login
    };
    // Handler for Logout Button
    const handleLogoutClick = () => {
        dispatch(clearSession()); // Clears session state
        navigate("/"); // Navigate to home page (or any route you prefer)
    };
    return (_jsxs(_Fragment, { children: [_jsx(CssBaseline, {}), _jsx(Box, { children: _jsx(AppBar, { position: "static", sx: {
                        direction: "rtl",
                        backgroundColor: "bg.primary",
                        boxShadow: "none",
                        backgroundImage: "none",
                        paddingX: 3.5,
                        borderBottom: 2,
                        borderColor: "border.sGray",
                    }, children: _jsxs(Toolbar, { sx: {
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                        }, children: [_jsxs(Box, { sx: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                    flexWrap: "wrap",
                                }, children: [_jsx(Logo, {}), _jsx(Box, { sx: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 2,
                                            flexWrap: "wrap",
                                            justifyContent: { xs: "center", sm: "flex-start" },
                                        }, children: _jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [_jsx(SecondaryButton, { text: "\u06A9\u0627\u0648\u0634", rightIcon: ExploreIcon }), _jsx(SecondaryButton, { text: "\u0634\u0631\u0648\u0639 \u067E\u0631\u0648\u0698\u0647", rightIcon: AddCircleIcon, onClick: () => navigate("/create-post") })] }) })] }), _jsx(Box, { sx: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                    flexWrap: "wrap",
                                    justifyContent: { xs: "center", sm: "flex-start" },
                                    width: { xs: "100%", sm: "auto" },
                                }, children: _jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, children: [_jsx(Box, { width: 10, height: 10 }), _jsx(Search, {}), _jsx(DarkModeButton, {}), session.isLoggedIn ? (_jsxs(_Fragment, { children: [_jsx(UserButton, {}), _jsx(PrimaryButton, { text: "\u062E\u0631\u0648\u062C" // "Logout" in Persian/Farsi
                                                    , leftIcon: LogoutIcon, onClick: handleLogoutClick })] })) : (_jsx(PrimaryButton, { text: "\u0648\u0631\u0648\u062F" // "Login" in Persian/Farsi
                                            , leftIcon: LoginIcon, onClick: handleLoginClick }))] }) }), _jsx(Box, { sx: {
                                    display: { xs: "block", sm: "none" },
                                    mt: { xs: 1, sm: 0 },
                                }, children: _jsx(IconButton, { color: "inherit", children: _jsx(MenuIcon, {}) }) })] }) }) })] }));
};
export default Header;
