import { Box, Button, Stack, Typography, keyframes } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { styled } from "@mui/system";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import PrimaryButton from "../buttons/PrimaryButton";

const pulse = keyframes`
  0% { transform: scale(0.9); opacity: 0.7; }
  50% { transform: scale(1.1); opacity: 0.3; }
  100% { transform: scale(0.9); opacity: 0.7; }
`;

const AnimatedCircle = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  background: `radial-gradient(${theme.palette.primary.main} 0%, transparent 70%)`,
  animation: `${pulse} 4s infinite`,
  filter: "blur(40px)",
  opacity: 0.2,
}));

const NotFoundPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
          position: "relative",
          overflow: "hidden",
          p: 3,
        }}
      >
        <AnimatedCircle sx={{ left: "-150px", top: "-150px" }} />
        <AnimatedCircle sx={{ right: "-150px", bottom: "-150px" }} />

        <Stack
          spacing={4}
          alignItems="center"
          sx={{ position: "relative", zIndex: 1 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "6rem",
              fontWeight: "bold",
              background: "linear-gradient(45deg, #4a90e2 0%, #9013fe 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            404
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "text.primary",
              textAlign: "center",
            }}
          >
            {/* {t("pageNotFound")} */}
            .صفحه ای که میخواستی پیدا نشد
          </Typography>

          {/* <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              textAlign: "center",
              maxWidth: "500px",
            }}
          >
            {t("pageNotFoundDescription")}
          </Typography> */}

          <PrimaryButton
            text={"بریم خونه"}
            onClick={() => navigate("/")}
            sx={{ mt: 3, px: 6, py: 1.5 }}
          />
        </Stack>
      </Box>
    </CacheProvider>
  );
};

export default NotFoundPage;
