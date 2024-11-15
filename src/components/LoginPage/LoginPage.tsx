import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
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
import axios from "../../services/api-client.ts";

const LoginPage = () => {
const LoginPage = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const theme = useTheme();

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
      try {
        const response = await axios.post("/auth/login", {
          userNameOrEmail: userNameOrEmail,
          password: password,
        });

        const { jwtToken, refreshToken } = response.data;
        console.log("Login successful:", jwtToken, refreshToken);

        // Store tokens, redirect, or perform other actions as needed
        // localStorage.setItem("jwtToken", jwtToken);
        // localStorage.setItem("refreshToken", refreshToken);
        // navigate to dashboard or home page
      } catch (error: any) {
        // Handle errors
        if (error.response) {
          console.log("Error response:", error.response.data);
          setLoginError(error.response.data.message || t("loginFailed"));
        } else if (error.request) {
          console.log("No response:", error.request);
          setLoginError(t("noResponseFromServer"));
        } else {
          console.log("Error", error.message);
          setLoginError(t("loginFailed"));
        }
      }
    }
  };

  return (
    <Box
      minHeight="100vh"
      flexDirection="row"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {/* Left part of the register page */}
      <Box width="60%" height="100px"></Box>

      {/* Right side of the register page */}
      <Box display="flex" width="40%">
        <Box
          display="flex"
          width="85%"
          //   bgcolor="bg.secondary"
          justifyContent="center"
          py={5}
          boxShadow={2}
          borderRadius="10px"
          bgcolor={"bg.primary"}
          sx={{ border: 2, borderColor: "border.sGray" }}
        >
          <Box width="80%" display="flex" flexDirection="column" gap={3}>
            <Typography
              variant="h6"
              fontWeight="bold"
              textAlign="center"
              pb={2}
            >
              {t("enterAccount")}
            </Typography>
            <CacheProvider value={cacheRtl}>
              <ThemeProvider theme={theme}>
                <TextField
                  dir="rtl"
                  label={t("email")}
                  variant="outlined"
                  size="small"
                  value={userNameOrEmail}
                  onChange={(e) => setUserNameOrEmail(e.target.value)}
                  error={userNameOrEmailError}
                  helperText={userNameOrEmailError ? t("fieldRequired") : ""}
                />

                <FormControl dir="rtl" variant="outlined" size="small">
                  <InputLabel htmlFor="outlined-adornment-password">
                    {t("password")}
                  </InputLabel>
                  <OutlinedInput
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="start">
                        <IconButton
                          onClick={() => setShowPassword((show) => !show)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={passwordError}
                  />
                  {passwordError && (
                    <Typography
                      variant="body2"
                      color="error"
                      align="right"
                      mt={0.5}
                    >
                      {t("fieldRequired")}
                    </Typography>
                  )}
                </FormControl>
              </ThemeProvider>
            </CacheProvider>

            {loginError && (
              <Typography variant="body2" color="error" align="center">
                {loginError}
              </Typography>
            )}

            <PrimaryButton
              text={t("login")}
              onClick={handleLogin}
            ></PrimaryButton>
            <Box
              px={2}
              sx={{
                direction: "rtl",
                flexDirection: "row",
                display: "flex",
                gap: 1,
              }}
            >
              <CheckBox
                isActive={checked}
                onClick={() => {
                  setChecked(!checked);
                  console.log("todo");
                  console.log(checked);
                }}
              />
              <Typography variant="body4">{t("rememberMe")}</Typography>
            </Box>
            <Box width="100%" height="1px" bgcolor="black"></Box>
            <Box
              px={2}
              sx={{
                direction: "rtl",
                flexDirection: "row",
                display: "flex",
                gap: 1,
                alignItems: "center",
              }}
            >
              <Typography variant="body4">{t("noAccount?")}</Typography>
              <GrayLink href="/register">
                <Typography variant="body4" mb="10px">
                  {t("register")}
                </Typography>
              </GrayLink>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
