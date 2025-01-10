import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { Posts } from "../landingPage/LandingPage";

interface AutoSliderProps {
  posts: Posts;
}

const AutoSlider = ({ posts }: AutoSliderProps) => {
  const cards = [
    {
      id: 1,
      details: {
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
        name: "Maria Ferguson",
        title: "Office Manager",
        quote:
          "Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.",
      },
    },
    {
      id: 2,
      details: {
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        name: "John Doe",
        title: "Regular Guy",
        quote:
          "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
      },
    },
    {
      id: 3,
      details: {
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        name: "John Doe",
        title: "Regular Guy",
        quote:
          "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
      },
    },
    {
      id: 4,
      details: {
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        name: "John Doe",
        title: "Regular Guy",
        quote:
          "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
      },
    },
    {
      id: 5,
      details: {
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        name: "John Doe",
        title: "Regular Guy",
        quote:
          "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.",
      },
    },

    // Add more cards here...
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = posts.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex - 2) {
      setIndex(0);
    }
  }, [index, posts]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, []);

  const getPreviousIndex = (currentIndex: number) => {
    return (currentIndex - 1 + posts.length) % posts.length;
  };

  const getNextIndex = (currentIndex: number) => {
    return (currentIndex + 1) % posts.length;
  };

  return (
    <section className="section">
      <div
        className="section-center"
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "500px",
          justifyItems: "center",
        }}
      >
        <div
          style={{
            width: "95%",
            display: "flex",
            transition: "transform 0.8s ease-in-out",
            transform: `translateX(-${index * 240}px)`,
            gap: "30px",
          }}
        >
          {posts.map((post, i) => (
            <Card
              key={i}
              sx={{ width: 300, boxShadow: 3, flexShrink: 0, direction: "rtl" }}
            >
              <CardMedia
                component="img"
                height="140"
                image={post.image}
                alt={post.title}
              />
              <CardContent>
                <Typography variant="h6" color="primary" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" paragraph>
                  {post.username}
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {post.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button
          variant="contained"
          color="primary"
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
            zIndex: 10,
          }}
          onClick={() => setIndex(getPreviousIndex(index))}
        >
          <FiChevronLeft />
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            transform: "translateY(-50%)",
            zIndex: 10,
          }}
          onClick={() => setIndex(getNextIndex(index))}
        >
          <FiChevronRight />
        </Button>
      </div>
    </section>
  );
};
export default AutoSlider;
