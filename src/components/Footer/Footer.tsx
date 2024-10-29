// src/components/Footer/Footer.tsx
import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Link,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShareIcon from "@mui/icons-material/Share"; // Replaced icon
import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        direction: "rtl",
        py: 6,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) => theme.palette.primary.main,
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Information Column */}
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <BusinessIcon sx={{ ml: 1, fontSize: 30 }} />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "bold",
                }}
              >
                درباره ایده یار
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                textAlign: "justify",

                lineHeight: 1.6,
              }}
            >
              ایده یار یک پلتفرم حمایت از پروژه‌های خلاقانه است که به شما امکان
              می‌دهد تا ایده‌های خود را به جامعه‌ای از حامیان متعهد معرفی کنید.
              ما با فراهم کردن بستری امن و قابل اعتماد، به خلاقان و حامیان کمک
              می‌کنیم تا با هم همکاری کنند و پروژه‌های نوآورانه را به واقعیت
              تبدیل نمایند.
            </Typography>
          </Grid>

          {/* Contact Information Column */}
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <ContactMailIcon sx={{ ml: 1, fontSize: 30 }} />
              {/* <EmailIcon sx={{ ml: 1, fontSize: 30 }} /> */}
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "bold",
                }}
              >
                تماس با ما
              </Typography>
            </Box>
            <Box
              sx={{ textAlign: "left", fontFamily: "Vazir, Arial, sans-serif" }}
            >
              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1.5,
                  lineHeight: 1.6,
                }}
              >
                <EmailIcon sx={{ ml: 1 }} />
                <Link
                  href="mailto:info@ideeyar.com"
                  color="inherit"
                  underline="hover"
                  sx={{ fontSize: "0.95rem" }}
                >
                  info@ideeyar.com
                </Link>
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  lineHeight: 1.6,
                }}
              >
                <PhoneIcon sx={{ ml: 1 }} />
                <Link
                  href="tel:+981234567890"
                  color="inherit"
                  underline="hover"
                  sx={{ fontSize: "0.95rem" }}
                >
                  ۰۱۲۳۴۵۶۷۸۹۰
                </Link>
              </Typography>
            </Box>
          </Grid>

          {/* Social Media Links Column */}
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <ShareIcon sx={{ ml: 1, fontSize: 30 }} />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "bold",
                }}
              >
                ما را در شبکه‌های اجتماعی دنبال کنید
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton
                component="a"
                href="https://www.facebook.com/ideeyar"
                target="_blank"
                rel="noopener"
                color="inherit"
                aria-label="Facebook"
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "primary.light",
                  },
                }}
              >
                <FacebookIcon fontSize="large" />
                <Typography
                  sx={{ display: { xs: "none", sm: "block" }, ml: 1 }}
                >
                  فیسبوک
                </Typography>
              </IconButton>
              <IconButton
                component="a"
                href="https://twitter.com/ideeyar"
                target="_blank"
                rel="noopener"
                color="inherit"
                aria-label="Twitter"
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "primary.light",
                  },
                }}
              >
                <TwitterIcon fontSize="large" />
                <Typography
                  sx={{ display: { xs: "none", sm: "block" }, ml: 1 }}
                >
                  توییتر
                </Typography>
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com/ideeyar"
                target="_blank"
                rel="noopener"
                color="inherit"
                aria-label="Instagram"
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "primary.light",
                  },
                }}
              >
                <InstagramIcon fontSize="large" />
                <Typography
                  sx={{ display: { xs: "none", sm: "block" }, ml: 1 }}
                >
                  اینستاگرام
                </Typography>
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255, 255, 255, 0.3)",
            my: 4,
          }}
        />

        {/* Copyright Notice */}
        <Typography variant="body2" align="center" sx={{ opacity: 0.8 }}>
          © {new Date().getFullYear()} ایده یار. تمامی حقوق محفوظ است.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
