import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { Box, Button } from "@mui/material";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import ProjectCard from "../ProjectCard/ProjectCard";
const AutoSlider = ({ posts }) => {
    const [index, setIndex] = useState(0);
    const intervalRef = useRef(null);
    const startAutoSlide = () => {
        if (intervalRef.current)
            clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setIndex((prevIndex) => prevIndex + 1);
        }, 3000);
    };
    const handleUserSlide = (direction) => {
        if (direction === "prev") {
            setIndex((prevIndex) => prevIndex - 1);
        }
        else {
            setIndex((prevIndex) => prevIndex + 1);
        }
        startAutoSlide();
    };
    useEffect(() => {
        const lastIndex = posts.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        else if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, posts]);
    useEffect(() => {
        startAutoSlide();
        return () => {
            if (intervalRef.current)
                clearInterval(intervalRef.current);
        };
    }, []);
    return (_jsxs(Box, { sx: {
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            width: "400px",
            height: "500px",
            justifyContent: "space-between",
            border: "1px solid  hsl(0, 0%, 80%)",
            borderRadius: "15px",
        }, children: [_jsx(Box, { style: {
                    display: "flex",
                    transition: "transform 0.8s ease-in-out",
                    transform: `translateX(calc(-${index * 330}px + ${(400 - 300) / 2}px))`,
                    gap: 30,
                }, children: posts.map((post, i) => (_jsx(Box, { style: {
                        display: "flex",
                        justifyContent: "center",
                    }, children: _jsx(ProjectCard, { id: 1, title: post.title, description: post.description, imageUrl: post.image, amountGoal: post.minimumFund, amountPaid: post.fundRaised, userName: post.username }) }, i))) }), _jsx(Button, { color: "primary", sx: {
                    width: "20px",
                    height: "40px",
                    position: "absolute",
                    top: "50%",
                    left: "0",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                }, onClick: () => handleUserSlide("prev"), children: _jsx(FiChevronLeft, { style: { fontSize: "2rem", fontWeight: "bolder" } }) }), _jsx(Button, { color: "primary", sx: {
                    width: "20px",
                    height: "40px",
                    position: "absolute",
                    top: "50%",
                    right: "0",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                }, onClick: () => handleUserSlide("next"), children: _jsx(FiChevronRight, { style: { fontSize: "2rem", fontWeight: "bolder" } }) })] }));
};
export default AutoSlider;
