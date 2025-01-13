import React, { useState, useEffect, useRef } from "react";
import { Box, Button } from "@mui/material";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import ProjectCard from "../ProjectCard/ProjectCard";
import { Posts } from "../landingPage/LandingPage";

interface AutoSliderProps {
  posts: Posts;
}

const AutoSlider = ({ posts }: AutoSliderProps) => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 3000);
  };

  const handleUserSlide = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setIndex((prevIndex) => prevIndex - 1);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
    startAutoSlide();
  };

  useEffect(() => {
    const lastIndex = posts.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    } else if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, posts]);

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        width: "400px",
        height: "500px",
        justifyContent: "space-between",
        boxShadow: "xs",
        borderRadius: "100px",
      }}
    >
      <Box
        style={{
          display: "flex",
          transition: "transform 0.8s ease-in-out",
          transform: `translateX(calc(-${index * 330}px + ${
            (400 - 300) / 2
          }px))`,
          gap: 30,
        }}
      >
        {posts.map((post, i) => (
          <Box
            key={i}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ProjectCard
              title={post.title}
              description={post.description}
              imageUrl={post.image}
              amountGoal={post.minimumFund}
              amountPaid={post.fundRaised}
              userName={post.username}
            />
          </Box>
        ))}
      </Box>

      <Button
        color="primary"
        sx={{
          width: "20px",
          height: "40px",
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
        onClick={() => handleUserSlide("prev")}
      >
        <FiChevronLeft style={{ fontSize: "2rem", fontWeight: "bolder" }} />
      </Button>
      <Button
        color="primary"
        sx={{
          width: "20px",
          height: "40px",
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
        onClick={() => handleUserSlide("next")}
      >
        <FiChevronRight style={{ fontSize: "2rem", fontWeight: "bolder" }} />
      </Button>
    </Box>
  );
};

export default AutoSlider;
