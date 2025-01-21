import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, Typography, } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider, ThemeProvider, useTheme } from "@emotion/react";
import createCache from "@emotion/cache";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PrimaryButton from "../buttons/PrimaryButton";
import CheckBox from "../buttons/CheckBox";
import GrayLink from "../buttons/GrayLink";
import { useTranslation } from "react-i18next";
import LoginImage from "../../assets/login.svg?react";
import { loginApi } from "../../apis/loginApi.ts";
import { useDispatch } from "react-redux";
import { setSession } from "../../store/sessionSlice";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
    const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = useState(false);
    const theme = useTheme();
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin],
    });
    // State variables for form inputs
    const [userNameOrEmail, setUserNameOrEmail] = useState("");
    const [password, setPassword] = useState("");
    // State variables for errors
    const [userNameOrEmailError, setUserNameOrEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [loginError, setLoginError] = useState("");
    const handleLogin = async () => {
        // Reset errors
        setUserNameOrEmailError(false);
        setPasswordError(false);
        setLoginError("");
        // Validate inputs
        if (!userNameOrEmail) {
            setUserNameOrEmailError(true);
        }
        if (!password) {
            setPasswordError(true);
        }
        if (userNameOrEmail && password) {
            loginApi(userNameOrEmail, password)
                .then((res) => {
                console.log("Login response: ", res);
                const { jwtToken, refreshToken } = res.data; // Assuming response has `data` containing tokens
                console.log("jwt: ", jwtToken);
                enqueueSnackbar("ورود موفق", { variant: "success" });
                dispatch(setSession({
                    isLoggedIn: true,
                    jwtToken: jwtToken,
                    refreshToken: refreshToken,
                }));
                navigate("/");
            })
                .catch((err) => {
                console.log("Login error: ", err);
                enqueueSnackbar("خطا در ورود", { variant: "error" });
            });
        }
    };
    return (_jsx(Box, { sx: { my: 10 }, children: _jsxs(Stack, { width: "100%", direction: "row", spacing: 2, sx: {
                px: 20,
                justifyContent: "space-between",
                alignItems: "center",
            }, children: [_jsx(Box, { width: "40%", sx: { pl: 10 }, children: _jsx(LoginImage, { width: "100%" }) }), _jsx(Box, { display: "flex", width: "45%", children: _jsx(Box, { display: "flex", width: "85%", justifyContent: "center", py: 5, boxShadow: 2, borderRadius: "10px", bgcolor: "bg.primary", sx: { border: 2, borderColor: "border.sGray" }, children: _jsxs(Box, { width: "80%", display: "flex", flexDirection: "column", gap: 3, children: [_jsx(Typography, { variant: "h6", fontWeight: "bold", textAlign: "center", pb: 2, children: t("enterAccount") }), _jsx(CacheProvider, { value: cacheRtl, children: _jsxs(ThemeProvider, { theme: theme, children: [_jsx(TextField, { dir: "rtl", label: t("email"), variant: "outlined", size: "small", value: userNameOrEmail, onChange: (e) => setUserNameOrEmail(e.target.value) }), userNameOrEmailError && (_jsx(Typography, { variant: "body4", fontWeight: "bold", mt: -2, ml: 1, textAlign: "end", color: "red", children: t("fieldRequired") })), _jsxs(FormControl, { dir: "rtl", variant: "outlined", size: "small", children: [_jsx(InputLabel, { htmlFor: "outlined-adornment-password", children: t("password") }), _jsx(OutlinedInput, { type: showPassword ? "text" : "password", endAdornment: _jsx(InputAdornment, { position: "start", children: _jsx(IconButton, { onClick: () => setShowPassword((show) => !show), edge: "end", children: showPassword ? _jsx(VisibilityOff, {}) : _jsx(Visibility, {}) }) }), label: "Password", value: password, onChange: (e) => setPassword(e.target.value) })] }), passwordError && (_jsx(Typography, { variant: "body4", fontWeight: "bold", mt: -2, ml: 1, textAlign: "end", color: "red", children: t("fieldRequired") }))] }) }), loginError && (_jsx(Typography, { variant: "body4", fontWeight: "bold", mt: -2, ml: 1, textAlign: "center", color: "red", children: loginError })), _jsx(PrimaryButton, { text: t("login"), onClick: handleLogin }), _jsxs(Box, { px: 2, sx: {
                                        direction: "rtl",
                                        flexDirection: "row",
                                        display: "flex",
                                        gap: 1,
                                    }, children: [_jsx(CheckBox, { isActive: checked, onClick: () => {
                                                setChecked(!checked);
                                                console.log("todo");
                                                console.log(checked);
                                            } }), _jsx(Typography, { variant: "body4", children: t("rememberMe") })] }), _jsx(Box, { width: "100%", height: "1px", bgcolor: "black" }), _jsxs(Box, { px: 2, sx: {
                                        direction: "rtl",
                                        flexDirection: "row",
                                        display: "flex",
                                        gap: 1,
                                        alignItems: "center",
                                    }, children: [_jsx(Typography, { variant: "body4", children: t("noAccount?") }), _jsx(GrayLink, { href: "/register", children: _jsx(Typography, { variant: "body4", mb: "10px", children: t("register") }) })] }), _jsxs(Box, { px: 2, sx: {
                                        direction: "rtl",
                                        flexDirection: "row",
                                        display: "flex",
                                        gap: 1,
                                        alignItems: "center",
                                    }, children: [_jsx(Typography, { variant: "body4", children: t("رمز عبور خود را فراموش کرده‌اید؟") }), _jsx(GrayLink, { href: "/forgot-password", children: _jsx(Typography, { variant: "body4", mb: "10px", children: t("فراموشی رمز عبور") }) })] })] }) }) })] }) }));
};
export default LoginPage;
