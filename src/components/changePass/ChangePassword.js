import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack, Typography, } from "@mui/material";
import { useState } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider, ThemeProvider, useTheme } from "@emotion/react";
import createCache from "@emotion/cache";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PrimaryButton from "../buttons/PrimaryButton";
import { useTranslation } from "react-i18next";
import { passwordPattern } from "../../assets/regex/regexPatterns";
import ChangePassImage from "../../assets/signup.svg?react";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { changePasswordApi } from "../../apis/changePass.ts";
const ChangePassword = () => {
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    // Error states for password fields
    const [passwordErr, setPasswordErr] = useState(false);
    const [passwordConfirmErr, setPasswordConfirmErr] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordVal, setShowPasswordVal] = useState(false);
    const [checked, setChecked] = useState(false);
    const { t } = useTranslation();
    const theme = useTheme();
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin],
    });
    const validatePassword = (value) => {
        if (value === "" || !value.match(passwordPattern)) {
            setPasswordErr(true);
        }
        else
            setPasswordErr(false);
    };
    const validatePasswordConfirm = (value) => {
        if (value === "" || value !== password) {
            setPasswordConfirmErr(true);
        }
        else
            setPasswordConfirmErr(false);
    };
    const validateInputs = async () => {
        try {
            // Validate both password fields
            validatePassword(password);
            validatePasswordConfirm(passwordConfirm);
            // If any error flags are true, do not proceed
            if (passwordErr || passwordConfirmErr) {
                console.log("Validation errors");
                return;
            }
            // Prepare the request payload
            const requestData = {
                newPassword: password,
            };
            // Call the API to change the password
            await changePasswordApi(requestData);
            // Show success notification
            enqueueSnackbar(t("رمز عبور با موفقیت تغییر یافت"), { variant: "success" });
            // Navigate to the desired page
            navigate("/");
        }
        catch (error) {
            // Handle API errors gracefully
            console.error("Error changing password:", error);
            // Display an error notification to the user
            enqueueSnackbar(t("تغییر رمز عبور با خطا مواجه شد"), { variant: "error" });
        }
    };
    return (_jsx(Box, { sx: { my: 10 }, children: _jsxs(Stack, { width: "100%", direction: "row", spacing: 2, sx: {
                px: 20,
                justifyContent: "space-between",
                alignItems: "center",
            }, children: [_jsx(ChangePassImage, { width: "50%" }), _jsx(Box, { display: "flex", width: "45%", children: _jsx(Box, { display: "flex", width: "85%", justifyContent: "center", py: 5, boxShadow: 2, borderRadius: "10px", bgcolor: "bg.primary", sx: { border: 2, borderColor: "border.sGray" }, children: _jsxs(Box, { width: "80%", display: "flex", flexDirection: "column", gap: 3, children: [_jsx(Typography, { variant: "h6", fontWeight: "bold", textAlign: "center", pb: 2, children: "\u062A\u063A\u06CC\u06CC\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631" }), _jsx(CacheProvider, { value: cacheRtl, children: _jsxs(ThemeProvider, { theme: theme, children: [_jsxs(FormControl, { dir: "rtl", variant: "outlined", size: "small", children: [_jsx(InputLabel, { htmlFor: "outlined-adornment-password", children: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631" }), _jsx(OutlinedInput, { type: showPassword ? "text" : "password", endAdornment: _jsx(InputAdornment, { position: "start", children: _jsx(IconButton, { onClick: () => setShowPassword((show) => !show), edge: "end", children: showPassword ? _jsx(VisibilityOff, {}) : _jsx(Visibility, {}) }) }), label: "Password", value: password, onChange: (e) => {
                                                            setPassword(e.target.value);
                                                            validatePassword(e.target.value);
                                                        } })] }), passwordErr && (_jsx(Typography, { variant: "body4", fontWeight: "bold", mt: -2, ml: 1, textAlign: "end", color: "red", children: t("passwordError") })), _jsxs(FormControl, { dir: "rtl", variant: "outlined", size: "small", children: [_jsx(InputLabel, { children: "\u062A\u06A9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631" }), _jsx(OutlinedInput, { id: "outlined-adornment-password", type: showPasswordVal ? "text" : "password", endAdornment: _jsx(InputAdornment, { position: "start", children: _jsx(IconButton, { onClick: () => setShowPasswordVal((show) => !show), edge: "end", children: showPasswordVal ? (_jsx(VisibilityOff, {})) : (_jsx(Visibility, {})) }) }), label: "Password", value: passwordConfirm, onChange: (e) => {
                                                            setPasswordConfirm(e.target.value);
                                                            validatePasswordConfirm(e.target.value);
                                                        } })] }), passwordConfirmErr && (_jsx(Typography, { variant: "body4", fontWeight: "bold", mt: -2, ml: 1, textAlign: "end", color: "red", children: t("passwordConfirmError") }))] }) }), _jsx(PrimaryButton
                                // text={t("confirm")}
                                , { 
                                    // text={t("confirm")}
                                    text: "\u062B\u0628\u062A", onClick: () => {
                                        validateInputs();
                                    } })] }) }) })] }) }));
};
export default ChangePassword;
