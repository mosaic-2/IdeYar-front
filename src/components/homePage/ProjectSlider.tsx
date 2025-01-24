// src/components/ProjectsSlider/ProjectsSlider.tsx
import React from "react";
import { Box, Slider } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "../projectCards/ProjectCard";

// Updated project data with required properties
const projects = [
  {
    id: 1,
    userName: "کاربر نمونه ۱",
    title: "پروژه هنری ۱",
    description: "حمایت از پروژه‌های هنری منحصر به فرد از هنرمندان نوپا.",
    imageUrl: "https://via.placeholder.com/400x200",
    amountPaid: 5000000,
    amountGoal: 10000000,
  },
  {
    id: 2,
    userName: "کاربر نمونه ۲",
    title: "نوآوری‌های تکنولوژی",
    description:
      "پشتیبانی از پروژه‌های تکنولوژیک پیشرو که آینده را شکل می‌دهند.",
    imageUrl: "https://via.placeholder.com/400x200",
    amountPaid: 7500000,
    amountGoal: 15000000,
  },
  {
    id: 3,
    userName: "کاربر نمونه ۳",
    title: "صنایع دستی خلاقانه",
    description: "کشف و حمایت از صنایع دستی و طراحی‌های دست‌ساز.",
    imageUrl: "https://via.placeholder.com/400x200",
    amountPaid: 3000000,
    amountGoal: 5000000,
  },
  {
    id: 4,
    userName: "کاربر نمونه ۴",
    title: "فیلم و ویدیو",
    description: "کمک به بهبود فیلم‌ها و ویدیوهای مستقل.",
    imageUrl: "https://via.placeholder.com/400x200",
    amountPaid: 4500000,
    amountGoal: 8000000,
  },
];

// Rest of the component remains the same
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
        breakpoint: 960,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
    rtl: true,
  };

  return (
    <Slider {...settings}>
      {projects.map((project, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            px: 2,
            mb: 2,
            height: "100%",
          }}
        >
          <ProjectCard {...project} />
        </Box>
      ))}
    </Slider>
  );
};

export default ProjectsSlider;
