// src/components/forgotPass/ForgotPassword.tsx
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
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
import {
  forgetPasswordApi,
  ForgetPasswordRequest,
} from "../../apis/forgotPassApi"; // Correct Import

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [emailErr, setEmailErr] = useState<boolean>(false);

  const { t } = useTranslation();
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const validateEmail = (value: string) => {
    if (value === "" || !value.match(emailPattern)) {
      setEmailErr(true);
    } else setEmailErr(false);
  };

  const validateInputs = async () => {
    try {
      validateEmail(email); // Ensure validation is performed

      if (emailErr) {
        console.log("Validation errors");
        enqueueSnackbar(t("fixErrors"), { variant: "error" });
        return;
      }

      // Create request payload using the ForgetPasswordRequest interface
      const requestPayload: ForgetPasswordRequest = { email };

      // Call the API
      const response = await forgetPasswordApi(requestPayload);

      // Show success message
      enqueueSnackbar(t("برای ادامه درخواست به ایمیل مراجعه کنید"), {
        variant: "success",
      });
      navigate("/");
    } catch (error) {
      console.error("Failed to initiate forgot password:", error);
      enqueueSnackbar(t("درخواست شما با خطا مواجه شد"), { variant: "error" });
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
        <ChangeEmailImage width="50%" />
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
                فراموشی رمز عبور
              </Typography>
              <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                  <FormControl dir="rtl" variant="outlined" size="small">
                    <InputLabel htmlFor="outlined-adornment-email">
                      {t("email")}
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-email"
                      type="email" // Changed to 'email' type for better validation
                      label="Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        validateEmail(e.target.value);
                      }}
                    />
                  </FormControl>
                  {emailErr && (
                    <Typography
                      variant="body2" // Changed to a valid variant
                      fontWeight="bold"
                      mt={-2}
                      ml={1}
                      textAlign="end"
                      color="red"
                    >
                      {t("emailError")}
                    </Typography>
                  )}
                </ThemeProvider>
              </CacheProvider>

              <PrimaryButton
                text={"ثبت"}
                onClick={validateInputs} // Simplified onClick handler
              />
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default ForgotPassword;
