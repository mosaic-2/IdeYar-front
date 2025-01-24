import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  LinearProgress,
  Box,
} from "@mui/material";
import PrimaryButton from "../buttons/PrimaryButton";
import React from "react";

interface ProjectCardProps {
  id: string | number;
  title: string;
  description: string;
  imageUrl?: string;
  amountPaid: number;
  amountGoal: number;
  userName: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  imageUrl = "https://via.placeholder.com/400x200",
  amountPaid,
  amountGoal,
  userName,
}) => {
  const progress = Math.min((amountPaid / amountGoal) * 100, 100);

  const handleCardClick = () => {
    window.location.href = `http://localhost:3000/post/${id}`;
  };

  return (
    <Card
      onClick={handleCardClick}
      sx={{
        pb: 2,
        minWidth: "300px",
        height: "450px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 2,
        alignItems: "center",
        bgcolor: "bg.primary",
        // Add a pointer cursor and a smooth box-shadow transition
        cursor: "pointer",
        transition: "box-shadow 0.3s ease-in-out",
        "&:hover": {
          boxShadow: 6, // e.g., theme.shadows[6] or a custom shadow
        },
      }}
    >
      <CardMedia
        dir="rtl"
        component="img"
        sx={{ minHeight: "180px", maxHeight: "100px" }}
        image={
          imageUrl
            ? `https://back.ideyar-app.ir/api/image/${imageUrl}`
            : "https://via.placeholder.com/400x200"
        }
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1, textAlign: "right", width: "100%" }}>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{
            marginBottom: 1,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            marginBottom: 2,
            mt: 1,
            textAlign: "justify",
          }}
        >
          {userName}
        </Typography>
        <Box sx={{ mb: 1 }}>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{
              marginBottom: 1,
            }}
          >
            مبلغ پرداخت شده: {amountPaid.toLocaleString()} تومان
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{
              marginBottom: 1,
            }}
          >
            مبلغ هدف: {amountGoal.toLocaleString()} تومان
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ height: 10, borderRadius: 5, mb: 1 }}
        />
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            textAlign: "right",
          }}
        >
          {progress.toFixed(2)}% تکمیل شده
        </Typography>
      </CardContent>

      <PrimaryButton text="مشاهده پروژه" width="250px" />
    </Card>
  );
};

export default ProjectCard;
