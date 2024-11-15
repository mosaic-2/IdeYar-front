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
import SignupImage from "../../assets/signup.svg?react";

const LoginPage = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const theme = useTheme();

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  return (
    <Box sx={{ mt: 10 }}>
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
        <Box display="flex" width="50%">
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
                    />
                  </FormControl>
                </ThemeProvider>
              </CacheProvider>
              <PrimaryButton text={t("login")}></PrimaryButton>
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
