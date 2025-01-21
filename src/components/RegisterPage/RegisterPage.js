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
import { emailPattern, passwordPattern, usernamePattern, } from "../../assets/regex/regexPatterns";
import SignupImage from "../../assets/signup.svg?react";
import { signupInitializeApi } from "../../apis/signUp.ts";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    // Errors UseState
    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);
    const [passwordConfirmErr, setPasswordConfirmErr] = useState(false);
    const [signUpError, setSignUpError] = useState(""); // Error message state
    const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordVal, setShowPasswordVal] = useState(false);
    const [checked, setChecked] = useState(false);
    const theme = useTheme();
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin],
    });
    const validateName = (value) => {
        if (value === "") {
            setNameErr(true);
        }
        else if (!value.match(usernamePattern)) {
            setNameErr(true);
        }
        else
            setNameErr(false);
    };
    const validateEmail = (value) => {
        if (value === "") {
            setEmailErr(true);
        }
        else if (!value.match(emailPattern)) {
            setEmailErr(true);
        }
        else
            setEmailErr(false);
    };
    const validatePassword = (value) => {
        if (value === "") {
            setPasswordErr(true);
        }
        else if (!value.match(passwordPattern)) {
            setPasswordErr(true);
        }
        else
            setPasswordErr(false);
    };
    const validatePasswordConfirm = (value) => {
        if (value === "") {
            setPasswordConfirmErr(true);
        }
        else if (value !== password) {
            setPasswordConfirmErr(true);
        }
        else
            setPasswordConfirmErr(false);
    };
    const validateInputs = async () => {
        // First, validate all inputs
        validateName(name);
        validateEmail(email);
        validatePassword(password);
        validatePasswordConfirm(passwordConfirm);
        // If any error flags are true, do not proceed
        if (nameErr || emailErr || passwordErr || passwordConfirmErr) {
            console.log("Validation errors");
            return;
        }
        signupInitializeApi(name, email, password)
            .then((res) => {
            console.log("Signup response: ", res);
            enqueueSnackbar("برای تکمیل ثبت نام به ایمیل خود مراجعه کنید", {
                variant: "success",
            });
            navigate("/");
        })
            .catch((err) => {
            console.log("Signup error: ", err);
            enqueueSnackbar("خطا ارتباط با سرور", {
                variant: "error",
            });
        });
    };
    return (_jsx(Box, { sx: { my: 10 }, children: _jsxs(Stack, { width: "100%", direction: "row", spacing: 2, sx: {
                px: 20,
                justifyContent: "space-between",
                alignItems: "center",
            }, children: [_jsx(SignupImage, { width: "50%" }), _jsx(Box, { display: "flex", width: "45%", children: _jsx(Box, { display: "flex", width: "85%", justifyContent: "center", py: 5, boxShadow: 2, borderRadius: "10px", bgcolor: "bg.primary", sx: { border: 2, borderColor: "border.sGray" }, children: _jsxs(Box, { width: "80%", display: "flex", flexDirection: "column", gap: 3, children: [_jsx(Typography, { variant: "h6", fontWeight: "bold", textAlign: "center", pb: 2, children: t("register") }), _jsx(CacheProvider, { value: cacheRtl, children: _jsxs(ThemeProvider, { theme: theme, children: [_jsx(TextField, { dir: "rtl", label: t("familyName"), size: "small", value: name, onChange: (e) => {
                                                    setName(e.target.value);
                                                    validateName(e.target.value);
                                                } }), nameErr && (_jsx(Typography, { variant: "body4", fontWeight: "bold", mt: -2, ml: 1, textAlign: "end", color: "red", children: t("nameError") })), _jsx(TextField, { dir: "rtl", label: t("email"), variant: "outlined", size: "small", value: email, onChange: (e) => {
                                                    setEmail(e.target.value);
                                                    validateEmail(e.target.value);
                                                } }), emailErr && (_jsx(Typography, { variant: "body4", fontWeight: "bold", mt: -2, ml: 1, textAlign: "end", color: "red", children: t("emailError") })), _jsxs(FormControl, { dir: "rtl", variant: "outlined", size: "small", children: [_jsx(InputLabel, { htmlFor: "outlined-adornment-password", children: t("password") }), _jsx(OutlinedInput, { type: showPassword ? "text" : "password", endAdornment: _jsx(InputAdornment, { position: "start", children: _jsx(IconButton, { onClick: () => setShowPassword((show) => !show), edge: "end", children: showPassword ? _jsx(VisibilityOff, {}) : _jsx(Visibility, {}) }) }), label: "Password", value: password, onChange: (e) => {
                                                            setPassword(e.target.value);
                                                            validatePassword(e.target.value);
                                                        } })] }), passwordErr && (_jsx(Typography, { variant: "body4", fontWeight: "bold", mt: -2, ml: 1, textAlign: "end", color: "red", children: t("passwordError") })), _jsxs(FormControl, { dir: "rtl", variant: "outlined", size: "small", children: [_jsx(InputLabel, { children: t("repeatPassword") }), _jsx(OutlinedInput, { id: "outlined-adornment-password", type: showPasswordVal ? "text" : "password", endAdornment: _jsx(InputAdornment, { position: "start", children: _jsx(IconButton, { onClick: () => setShowPasswordVal((show) => !show), edge: "end", children: showPasswordVal ? (_jsx(VisibilityOff, {})) : (_jsx(Visibility, {})) }) }), label: "Password", value: passwordConfirm, onChange: (e) => {
                                                            setPasswordConfirm(e.target.value);
                                                            validatePasswordConfirm(e.target.value);
                                                        } })] }), passwordConfirmErr && (_jsx(Typography, { variant: "body4", fontWeight: "bold", mt: -2, ml: 1, textAlign: "end", color: "red", children: t("passwordConfirmError") }))] }) }), signUpError && (_jsx(Typography, { variant: "body4", fontWeight: "bold", mt: -2, ml: 1, textAlign: "center", color: "red", children: signUpError })), _jsx(PrimaryButton, { text: t("register"), onClick: () => {
                                        validateInputs();
                                    } }), _jsxs(Box, { px: 2, sx: {
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
                                    }, children: [_jsx(Typography, { variant: "body4", children: t("account?") }), _jsx(GrayLink, { href: "/login", children: _jsx(Typography, { variant: "body4", mb: "10px", children: t("login") }) })] })] }) }) })] }) }));
};
export default RegisterPage;
