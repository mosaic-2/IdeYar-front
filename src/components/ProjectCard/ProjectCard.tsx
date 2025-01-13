import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  LinearProgress,
  Box,
} from "@mui/material";
import PrimaryButton from "../buttons/PrimaryButton";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  amountPaid: number;
  amountGoal: number;
  userName: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl = "https://via.placeholder.com/400x200",
  amountPaid,
  amountGoal,
  userName,
}) => {
  const progress = Math.min((amountPaid / amountGoal) * 100, 100);

  return (
    <Card
      sx={{
        pb: 2,
        minWidth: "300px",
        height: "450px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: 2,
        alignContent: "center",
        alignItems: "center",
        bgcolor: "bg.primary",
      }}
    >
      <CardMedia
        dir="rtl"
        component="img"
        sx={{ minHeight: "180px" }}
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
            textAlign: "justify start",
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
