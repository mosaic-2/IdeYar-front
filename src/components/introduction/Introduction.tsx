// src/components/IntroductionSection/IntroductionSection.tsx
import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PeopleIcon from "@mui/icons-material/People"; // New icon for additional section

// Default image URLs (Replace these with actual image paths or URLs as needed)
const defaultImages = [
  "https://source.unsplash.com/random/400x300?creative",
  "https://source.unsplash.com/random/400x300?goal",
  "https://source.unsplash.com/random/400x300?community",
];

const sections = [
  {
    title: "هدف ما",
    description:
      "هدف ایده یار ایجاد بستری امن و قابل اعتماد برای خلاقان و حامیان است تا با همکاری یکدیگر پروژه‌های نوآورانه را به واقعیت تبدیل کنند.",
    icon: <EmojiEventsIcon color="primary" sx={{ fontSize: 40 }} />,
    image: defaultImages[1],
  },
  {
    title: "جامعه ما",
    description:
      "ما به دنبال ایجاد یک جامعه پویا و مشارکتی هستیم که در آن خلاقان و حامیان با یکدیگر همکاری کنند تا ایده‌های جدید به زندگی بیایند.",
    icon: <PeopleIcon color="primary" sx={{ fontSize: 40 }} />,
    image: defaultImages[2],
  },
  // Add more sections as needed
];

const IntroductionSection: React.FC = () => {
  return (
    <Container
      sx={{
        direction: "rtl", // Right-to-left direction
        width: "80%", // Set container width to 80%
        margin: "0 auto", // Center the container
        mt: 8,
        mb: 8,
      }}
    >
      <Grid container spacing={4}>
        {sections.map((section, index) => {
          const isEven = index % 2 === 0;

          return (
            <Grid
              item
              xs={12}
              key={index}
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  md: isEven ? "row" : "row-reverse",
                }, // Alternate row direction on md and up
                alignItems: "center",
                gap: 2,
              }}
            >
              {/* Image or Placeholder */}
              <Box
                sx={{
                  width: { xs: "100%", md: "40%" },
                  height: "200px",
                  backgroundColor: "#e0e0e0",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {section.image ? (
                  <img
                    src={section.image}
                    alt={section.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <Typography variant="h6" color="#666">
                    تصویر در دسترس نیست
                  </Typography>
                )}
              </Box>

              {/* Text Section */}
              <Box
                sx={{
                  width: { xs: "100%", md: "60%" },
                  textAlign: { xs: "center", md: "right" },
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  {section.icon} {/* Icon included in the title */}
                  <span style={{ marginRight: "8px" }}>
                    {section.title}
                  </span>{" "}
                  {/* Add margin for spacing */}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ textAlign: "justify" }}
                >
                  {section.description}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default IntroductionSection;
