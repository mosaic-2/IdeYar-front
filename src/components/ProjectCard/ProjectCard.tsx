// src/components/ProjectCard/ProjectCard.tsx
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  LinearProgress,
  Box,
} from "@mui/material";
import CustomButton from "../buttons/CardCustom";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  amountPaid: number;
  amountGoal: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl = "https://via.placeholder.com/400x200", // Default Image
  amountPaid,
  amountGoal,
}) => {
  const progress = Math.min((amountPaid / amountGoal) * 100, 100);

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 300,
        height: 450,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: 2,
      }}
    >
      <CardMedia component="img" height="180" image={imageUrl} alt={title} />
      <CardContent sx={{ flexGrow: 1, textAlign: "right", paddingX: 2 }}>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{
            marginBottom: 1, // Add consistent bottom margin
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            marginBottom: 2, // Add consistent bottom margin

            mt: 1,
            textAlign: "justify start",
          }}
        >
          {description}
        </Typography>
        <Box sx={{ mb: 1 }}>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{
              marginBottom: 1, // Add consistent bottom margin
            }}
          >
            مبلغ پرداخت شده: {amountPaid.toLocaleString()} تومان
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{
              marginBottom: 1, // Add consistent bottom margin
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
      <CardActions>
        <CustomButton fullWidth>مشاهده پروژه</CustomButton>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
