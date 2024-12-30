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
import { passwordPattern } from "../../assets/regex/regexPatterns";
import ChangePassImage from "../../assets/signup.svg?react";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { changePasswordApi } from "../../apis/changePass.ts";

const ChangePassword = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  // Error states for password fields
  const [passwordErr, setPasswordErr] = useState<boolean>(false);
  const [passwordConfirmErr, setPasswordConfirmErr] = useState<boolean>(false);

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

  const validatePassword = (value: string) => {
    if (value === "" || !value.match(passwordPattern)) {
      setPasswordErr(true);
    } else setPasswordErr(false);
  };

  const validatePasswordConfirm = (value: string) => {
    if (value === "" || value !== password) {
      setPasswordConfirmErr(true);
    } else setPasswordConfirmErr(false);
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
    } catch (error) {
      // Handle API errors gracefully
      console.error("Error changing password:", error);

      // Display an error notification to the user
      enqueueSnackbar(t("تغییر رمز عبور با خطا مواجه شد"), { variant: "error" });
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
        <ChangePassImage width="50%" />
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
                {/* {t("changePassword")} */}
                تغییر رمز عبور
              </Typography>
              <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                  <FormControl dir="rtl" variant="outlined" size="small">
                    <InputLabel htmlFor="outlined-adornment-password">
                      {/* {t("newPassword")} */}
                      رمز عبور
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
                    <InputLabel>
                      {/* {t("confirmNewPassword")} */}
                      تکرار رمز عبور
                    </InputLabel>
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

              {/* No signUpError now, but we keep the structure for styling consistency */}

              <PrimaryButton
                // text={t("confirm")}
                text="ثبت"
                onClick={() => {
                  validateInputs();
                }}
              ></PrimaryButton>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default ChangePassword;
