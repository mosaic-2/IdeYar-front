// src/components/ProjectsSlider/ProjectsSlider.tsx
import React from "react";
import { Box, Slider } from "@mui/material";
// import ProjectCard from "../projectCard/ProjectCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample project data
const projects = [
  {
    title: "پروژه هنری ۱",
    description: "حمایت از پروژه‌های هنری منحصر به فرد از هنرمندان نوپا.",
    imageUrl: "https://via.placeholder.com/400x200",
    amountPaid: 5000000,
    amountGoal: 10000000,
  },
  {
    title: "نوآوری‌های تکنولوژی",
    description:
      "پشتیبانی از پروژه‌های تکنولوژیک پیشرو که آینده را شکل می‌دهند.",
    imageUrl: "https://via.placeholder.com/400x200",
    amountPaid: 7500000,
    amountGoal: 15000000,
  },
  {
    title: "صنایع دستی خلاقانه",
    description: "کشف و حمایت از صنایع دستی و طراحی‌های دست‌ساز.",
    imageUrl: "https://via.placeholder.com/400x200",
    amountPaid: 3000000,
    amountGoal: 5000000,
  },
  {
    title: "فیلم و ویدیو",
    description: "کمک به بهبود فیلم‌ها و ویدیوهای مستقل.",
    imageUrl: "https://via.placeholder.com/400x200",
    amountPaid: 4500000,
    amountGoal: 8000000,
  },
];

const ProjectsSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 960, // Medium devices
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600, // Small devices
        settings: {
          slidesToShow: 1,
          centerMode: true, // Enable centered mode
          centerPadding: "40px", // Padding on the sides
        },
      },
    ],
    rtl: true, // Enable RTL
  };

  return (
    <Slider {...settings}>
      {projects.map((project, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center", // Center vertically if needed
            px: 2,
            mb: 2,
            height: "100%", // Ensure full height for centering
          }}
        >
          {/* <ProjectCard {...project} /> */}
        </Box>
      ))}
    </Slider>
  );
};

export default ProjectsSlider;
