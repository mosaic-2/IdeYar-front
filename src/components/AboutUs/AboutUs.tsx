import {
  Box,
  Typography,
  Grid,
  Stack,
  Avatar,
  Link,
  useTheme,
} from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const AboutUs = () => {
  const theme = useTheme();

  const teamMembers = [
    {
      name: "آبتین بدیعی",
      role: "توسعه دهنده فرانت اند",
      email: "abtinbadie81@gmail.com",
      icon: <CodeIcon fontSize="large" />,
    },
    {
      name: "علی اطهری",
      role: "توسعه دهنده فرانت اند",
      email: "ali.athari@mosaic.team",
      icon: <CodeIcon fontSize="large" />,
    },
    {
      name: "ماکان سید جوادی",
      role: "توسعه دهنده فرانت اند",
      email: "makan.seydjavadi@mosaic.team",
      icon: <CodeIcon fontSize="large" />,
    },
    {
      name: "الهام غلامی",
      role: "توسعه دهنده فرانت اند",
      email: "amirhossein.najafi@mosaic.team",
      icon: <CodeIcon fontSize="large" />,
    },
    {
      name: "محمد حسین حقدادی",
      role: "توسعه دهنده بک اند",
      email: "mohammadhossein.haghdadi@mosaic.team",
      icon: <StorageIcon fontSize="large" />,
    },
    {
      name: "پارسا شفیعی یکتا",
      role: "توسعه دهنده بک اند",
      email: "parsa.shafie@mosaic.team",
      icon: <StorageIcon fontSize="large" />,
    },
  ];

  return (
    <CacheProvider value={cacheRtl}>
      <Box sx={{ py: 8, px: 4 }}>
        <Stack spacing={6} sx={{ alignItems: "center" }}>
          {/* Header Section */}
          <Box textAlign="center" sx={{ maxWidth: "800px" }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                mb: 3,
                background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ایده‌یار
            </Typography>
            <Typography
              variant="h5"
              sx={{ lineHeight: 2, color: "text.secondary" }}
            >
              به جمع خلاقان بپیوندید و از ایده‌های نوآورانه حمایت کنید! هر ایده،
              از یک فکر ساده تا یک پروژه بزرگ، می‌تواند دنیای ما را تغییر دهد.
              با همکاری و حمایت شما، ما می‌توانیم به این ایده‌ها جان ببخشیم و به
              تحقق رویاهامان کمک کنیم
            </Typography>
          </Box>

          {/* Team Section */}
          <Stack spacing={6} sx={{ alignItems: "center" }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                mb: 4,
                textAlign: "center",
              }}
            >
              تیم موزاییک
            </Typography>

            <Grid container sx={{ width: "80%" }}>
              {teamMembers.map((member, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Box padding={2}>
                    <Stack
                      spacing={2}
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        padding: 4,
                        borderRadius: "50%",
                        aspectRatio: "1/1",
                        width: "100%",
                        backgroundColor: theme.palette.background.paper,
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        position: "relative",
                        overflow: "hidden",
                        boxShadow: theme.shadows[2],
                        "&:hover": {
                          transform: "scale(1.05)",
                          boxShadow: theme.shadows[8],
                          "&::after": {
                            opacity: 0.15,
                          },
                        },
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: "-50%",
                          left: "-50%",
                          width: "200%",
                          height: "200%",
                          background: `linear-gradient(45deg, 
                // ${theme.palette.primary.light} 0%, 
                // ${theme.palette.secondary.light} 50%, 
                transparent 100%)`,
                          transform: "rotate(45deg)",
                          opacity: 0.1,
                          transition: "opacity 0.3s ease",
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          inset: 0,
                          borderRadius: "50%",
                          border: `2px solid ${theme.palette.primary.light}`,
                          opacity: 0,
                          transition: "opacity 0.3s ease",
                        },
                      }}
                    >
                      {/* Animated background effect */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          background: `radial-gradient(circle at 50% 0%, 
            ${theme.palette.primary.light} 0%, 
            transparent 70%)`,
                          opacity: 0.1,
                          animation: "rotate 20s linear infinite",
                          "@keyframes rotate": {
                            "0%": { transform: "rotate(0deg)" },
                            "100%": { transform: "rotate(360deg)" },
                          },
                        }}
                      />

                      {/* Content Container */}
                      <Stack spacing={2} alignItems="center" sx={{ zIndex: 1 }}>
                        <Avatar
                          sx={{
                            bgcolor: theme.palette.primary.main,
                            width: 100,
                            height: 100,
                            border: `3px solid ${theme.palette.primary.contrastText}`,
                            boxShadow: theme.shadows[4],
                            transition: "transform 0.3s ease",
                            "&:hover": {
                              transform: "scale(1.1)",
                            },
                          }}
                        >
                          {member.icon}
                        </Avatar>

                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          sx={{
                            textAlign: "center",
                            color: theme.palette.text.primary,
                          }}
                        >
                          {member.name}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            textAlign: "center",
                            maxWidth: "100%",
                          }}
                        >
                          {member.role}
                        </Typography>

                        <Link
                          href={`mailto:${member.email}`}
                          color="primary"
                          underline="hover"
                          sx={{
                            borderRadius: "20px",
                            px: 2,
                            py: 1,
                            bgcolor: theme.palette.action.hover,
                            transition: "all 0.3s ease",
                            "&:hover": {
                              bgcolor: theme.palette.primary.light,
                              color: theme.palette.primary.contrastText,
                              boxShadow: theme.shadows[2],
                            },
                          }}
                        >
                          <Typography variant="caption">
                            {member.email}
                          </Typography>
                        </Link>
                      </Stack>
                    </Stack>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Stack>
      </Box>
    </CacheProvider>
  );
};

export default AboutUs;
