import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, FormControl, InputLabel, OutlinedInput, Stack, Typography, } from "@mui/material";
import { useState } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider, ThemeProvider, useTheme } from "@emotion/react";
import createCache from "@emotion/cache";
import PrimaryButton from "../buttons/PrimaryButton";
import { useTranslation } from "react-i18next";
import { emailPattern } from "../../assets/regex/regexPatterns";
import ChangeEmailImage from "../../assets/signup.svg?react";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { ForgotPassApi } from "../../apis/ForgotPassApi.ts";
const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState(false);
    const { t } = useTranslation();
    const theme = useTheme();
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin],
    });
    const validateEmail = (value) => {
        if (value === "" || !value.match(emailPattern)) {
            setEmailErr(true);
        }
        else
            setEmailErr(false);
    };
    const validateInputs = async () => {
        try {
            email;
            if (emailErr) {
                console.log("Validation errors");
                enqueueSnackbar(t("fixErrors"), { variant: "error" });
                return;
            }
            // Create request payload using the ChangeEmailRequest interface
            const requestPayload = { email };
            // Call the API
            await ForgotPassApi(requestPayload);
            // Show success message
            enqueueSnackbar(t("برای ادامه درخواست به ایمیل مراجعه کنید"), { variant: "success" });
            navigate("/");
        }
        catch (error) {
            console.error("Failed to change email:", error);
            enqueueSnackbar(t("درخواست شما با خطا مواجه شد"), { variant: "error" });
        }
    };
    return (_jsx(Box, { sx: { my: 10 }, children: _jsxs(Stack, { width: "100%", direction: "row", spacing: 2, sx: {
                px: 20,
                justifyContent: "space-between",
                alignItems: "center",
            }, children: [_jsx(ChangeEmailImage, { width: "50%" }), _jsx(Box, { display: "flex", width: "45%", children: _jsx(Box, { display: "flex", width: "85%", justifyContent: "center", py: 5, boxShadow: 2, borderRadius: "10px", bgcolor: "bg.primary", sx: { border: 2, borderColor: "border.sGray" }, children: _jsxs(Box, { width: "80%", display: "flex", flexDirection: "column", gap: 3, children: [_jsx(Typography, { variant: "h6", fontWeight: "bold", textAlign: "center", pb: 2, children: "\u0641\u0631\u0627\u0645\u0648\u0634\u06CC \u0631\u0645\u0632 \u0639\u0628\u0648\u0631" }), _jsx(CacheProvider, { value: cacheRtl, children: _jsxs(ThemeProvider, { theme: theme, children: [_jsxs(FormControl, { dir: "rtl", variant: "outlined", size: "small", children: [_jsx(InputLabel, { htmlFor: "outlined-adornment-email", children: t("email") }), _jsx(OutlinedInput, { id: "outlined-adornment-email", type: "text", label: "Email", value: email, onChange: (e) => {
                                                            setEmail(e.target.value);
                                                            validateEmail(e.target.value);
                                                        } })] }), emailErr && (_jsx(Typography, { variant: "body4", fontWeight: "bold", mt: -2, ml: 1, textAlign: "end", color: "red", children: t("emailError") }))] }) }), _jsx(PrimaryButton
                                // text={t("confirm")}
                                , { 
                                    // text={t("confirm")}
                                    text: "ثبت", onClick: () => {
                                        validateInputs();
                                    } })] }) }) })] }) }));
};
export default ForgotPassword;
