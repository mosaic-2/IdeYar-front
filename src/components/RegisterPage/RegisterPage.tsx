import {
  Box,
  createTheme,
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
import { CacheProvider, ThemeProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PrimaryButton from "../buttons/PrimaryButton";
import CheckBox from "../buttons/CheckBox";
import GrayLink from "../buttons/GrayLink";
import { useTranslation } from "react-i18next";

const RegisterPage = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordVal, setShowPasswordVal] = useState(false);
  const [checked, setChecked] = useState(false);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const theme = createTheme({
    direction: "rtl",
  });

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
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
                <TextField dir="rtl" label={t("familyName")} size="small" />

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
                          {showPasswordVal ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </ThemeProvider>
            </CacheProvider>
            <PrimaryButton text={t("register")}></PrimaryButton>
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
              <GrayLink href="/">
                <Typography variant="body4" mb="10px">
                  {t("login")}
                </Typography>
              </GrayLink>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default RegisterPage;
