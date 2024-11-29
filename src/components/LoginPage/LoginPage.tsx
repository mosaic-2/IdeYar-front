import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
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
          enqueueSnackbar("ورود موفق", { variant: "success" });
          dispatch(
            setSession({
              isLoggedIn: true,
              jwtToken: "",
              refreshToken: "",
            })
          );
          navigate("/");
        })
        .catch((err) => {
          console.log("Login error: ", err);
          enqueueSnackbar("خطا در ورود", { variant: "error" });
        });
    }
  };

  return (
    <Box sx={{ my: 10 }}>
      <Stack
        width="100%"
        direction="row"
        spacing={2}
        sx={{
          px: 20,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box width="40%" sx={{ pl: 10 }}>
          <LoginImage width="100%" />
        </Box>
        <Box display="flex" width="45%">
          <Box
            display="flex"
            width="85%"
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
                  />
                  {userNameOrEmailError && (
                    <Typography
                      variant="body4"
                      fontWeight="bold"
                      mt={-2}
                      ml={1}
                      textAlign="end"
                      color="red"
                    >
                      {t("fieldRequired")}
                    </Typography>
                  )}

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
                    />
                  </FormControl>
                  {passwordError && (
                    <Typography
                      variant="body4"
                      fontWeight="bold"
                      mt={-2}
                      ml={1}
                      textAlign="end"
                      color="red"
                    >
                      {t("fieldRequired")}
                    </Typography>
                  )}
                </ThemeProvider>
              </CacheProvider>

              {loginError && (
                <Typography
                  variant="body4"
                  fontWeight="bold"
                  mt={-2}
                  ml={1}
                  textAlign="center"
                  color="red"
                >
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
      </Stack>
    </Box>
  );
};

export default LoginPage;
