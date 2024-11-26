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
import {
  emailPattern,
  passwordPattern,
  usernamePattern,
} from "../../assets/regex/regexPatterns";
import SignupImage from "../../assets/signup.svg?react";
import { signupInitializeApi } from "../../apis/signUp.ts";
import Toast from "../toast/Toast.tsx";
import { useDispatch } from "react-redux";
import { setSession } from "../../store/sessionSlice";

const RegisterPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  // Errors UseState
  const [nameErr, setNameErr] = useState<boolean>(false);
  const [emailErr, setEmailErr] = useState<boolean>(false);
  const [passwordErr, setPasswordErr] = useState<boolean>(false);
  const [passwordConfirmErr, setPasswordConfirmErr] = useState<boolean>(false);
  const [signUpError, setSignUpError] = useState<string>(""); // Error message state

  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordVal, setShowPasswordVal] = useState(false);
  const [checked, setChecked] = useState(false);
  const theme = useTheme();
  const dispatch = useDispatch();

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const validateName = (value: string) => {
    if (value === "") {
      setNameErr(true);
    } else if (!value.match(usernamePattern)) {
      setNameErr(true);
      console.log("false");
    } else setNameErr(false);
  };

  const validateEmail = (value: string) => {
    if (value === "") {
      setEmailErr(true);
    } else if (!value.match(emailPattern)) {
      setEmailErr(true);
      console.log("false");
    } else setEmailErr(false);
  };

  const validatePassword = (value: string) => {
    if (value === "") {
      setPasswordErr(true);
    } else if (!value.match(passwordPattern)) {
      setPasswordErr(true);
      console.log("false");
    } else setPasswordErr(false);
  };

  const validatePasswordConfirm = (value: string) => {
    if (value === "") {
      setPasswordConfirmErr(true);
    } else if (value !== password) {
      setPasswordConfirmErr(true);
      console.log("false");
    } else setPasswordConfirmErr(false);
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

    // Proceed to send the API request
    try {
      const response = await signupInitializeApi(name, email, password);

      // Handle the response
      const { token, refreshToken } = response.data;
      console.log("Sign up successful, token:", token);

      // Show success notification
      Toast({
        type: "success",
        description: t("signUpSuccess"),
        onClose: () => {},
      });

      // Store tokens in session slice
      dispatch(
        setSession({
          isLoggedIn: true,
          jwtToken: token,
          refreshToken,
        })
      );

      // Redirect or perform other actions as needed
      // navigate("/dashboard");
    } catch (error: any) {
      // Handle errors
      if (error.response) {
        // The server responded with an error
        console.log("Error response:", error.response.data);
        setSignUpError(error.response.data.message || t("signUpFailed"));
        Toast({
          type: "error",
          description: error.response.data.message || t("signUpFailed"),
          onClose: () => {},
        });
      } else if (error.request) {
        // No response received
        console.log("No response:", error.request);
        setSignUpError(t("noResponseFromServer"));
        Toast({
          type: "error",
          description: t("noResponseFromServer"),
          onClose: () => {},
        });
      } else {
        // Other errors
        console.log("Error", error.message);
        setSignUpError(t("signUpFailed"));
        Toast({
          type: "error",
          description: t("signUpFailed"),
          onClose: () => {},
        });
      }
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
        <SignupImage width="50%" />
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
                {t("register")}
              </Typography>
              <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                  <TextField
                    dir="rtl"
                    label={t("familyName")}
                    size="small"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      validateName(e.target.value);
                    }}
                  />
                  {nameErr && (
                    <Typography
                      variant="body4"
                      fontWeight="bold"
                      mt={-2}
                      ml={1}
                      textAlign="end"
                      color="red"
                    >
                      {t("nameError")}
                    </Typography>
                  )}

                  <TextField
                    dir="rtl"
                    label={t("email")}
                    variant="outlined"
                    size="small"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      validateEmail(e.target.value);
                    }}
                  />
                  {emailErr && (
                    <Typography
                      variant="body4"
                      fontWeight="bold"
                      mt={-2}
                      ml={1}
                      textAlign="end"
                      color="red"
                    >
                      {t("emailError")}
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
                      onChange={(e) => {
                        setPassword(e.target.value);
                        validatePassword(e.target.value);
                      }}
                    />
                  </FormControl>
                  {passwordErr && (
                    <Typography
                      variant="body4"
                      fontWeight="bold"
                      mt={-2}
                      ml={1}
                      textAlign="end"
                      color="red"
                    >
                      {t("passwordError")}
                    </Typography>
                  )}

                  <FormControl dir="rtl" variant="outlined" size="small">
                    <InputLabel>{t("repeatPassword")}</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPasswordVal ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="start">
                          <IconButton
                            onClick={() => setShowPasswordVal((show) => !show)}
                            edge="end"
                          >
                            {showPasswordVal ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                      value={passwordConfirm}
                      onChange={(e) => {
                        setPasswordConfirm(e.target.value);
                        validatePasswordConfirm(e.target.value);
                      }}
                    />
                  </FormControl>
                  {passwordConfirmErr && (
                    <Typography
                      variant="body4"
                      fontWeight="bold"
                      mt={-2}
                      ml={1}
                      textAlign="end"
                      color="red"
                    >
                      {t("passwordConfirmError")}
                    </Typography>
                  )}
                </ThemeProvider>
              </CacheProvider>

              {signUpError && (
                <Typography
                  variant="body4"
                  fontWeight="bold"
                  mt={-2}
                  ml={1}
                  textAlign="center"
                  color="red"
                >
                  {signUpError}
                </Typography>
              )}

              <PrimaryButton
                text={t("register")}
                onClick={() => {
                  validateInputs();
                }}
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
                <Typography variant="body4">{t("account?")}</Typography>
                <GrayLink href="/login">
                  <Typography variant="body4" mb="10px">
                    {t("login")}
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

export default RegisterPage;
