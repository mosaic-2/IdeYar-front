import React from "react";
import { Container, Box, Typography } from "@mui/material";
import ProjectsSlider from "../ProjectSlider/ProjectSlider";
import LandingImage1 from "../../assets/landing_1.svg?react";

const IdeaYarSection: React.FC = () => {
  return (
    <Box
      sx={{
        direction: "rtl",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "bg.primaryBrand",
        pt: 2,
        pb: 3,
        borderRadius: "20px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <LandingImage1 width={400} />
      <Box
        sx={{
          my: 6,
          width: "60%", // Half of the container width
          textAlign: "right", // Align text to the right
          p: 4, // Padding for the text section
        }}
      >
        <Typography variant="h3" sx={{ mb: 4, textAlign: "center" }}>
          ایده یار
        </Typography>
        <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
          به جمع خلاقان بپیوندید و از ایده‌های نوآورانه حمایت کنید! هر ایده، از
          یک فکر ساده تا یک پروژه بزرگ، می‌تواند دنیای ما را تغییر دهد. با
          همکاری و حمایت شما، ما می‌توانیم به این ایده‌ها جان ببخشیم و به تحقق
          رویاهامان کمک کنیم. به پلتفرم ما بپیوندید و کشف کنید که چگونه
          می‌توانید نقش موثری در شکل‌دهی به آینده داشته باشید.
        </Typography>
      </Box>
    </Box>
  );
};

const HomePage: React.FC = () => {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <IdeaYarSection />
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ mb: 3 }}>
          بهترین پروژه‌ها
        </Typography>
        <ProjectsSlider />
      </Box>
    </Container>
  );
};

export default HomePage;
