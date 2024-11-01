import React from "react";
import { Container, Box, Typography } from "@mui/material";
import ProjectsSlider from "../ProjectSlider/ProjectSlider";

const IdeaYarSection: React.FC = () => {
  return (
    <Box
      sx={{
        direction: "rtl", // Right-to-left direction
        display: "flex", // Flex layout for horizontal stacking
        alignItems: "center", // Center items vertically
        justifyContent: "center", // Center items horizontally
        bgcolor: "bg.secondary",
        pt: 2,
        pb: 3,
        borderRadius: "20px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Placeholder Box instead of an Image */}
      <Box
        sx={{
          mr: 2,
          width: "40%", // Half of the container width
          height: "300px",
          backgroundColor: "#e0e0e0", // Light gray as a placeholder color
          borderRadius: "16px", // Rounded corners on the left side
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#666",
          fontSize: "18px",
        }}
      >
        تصویر در دسترس نیست
      </Box>

      {/* Text Section */}
      <Box
        sx={{
          width: "60%", // Half of the container width
          textAlign: "right", // Align text to the right
          p: 4, // Padding for the text section
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ textAlign: "center" }}>
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
