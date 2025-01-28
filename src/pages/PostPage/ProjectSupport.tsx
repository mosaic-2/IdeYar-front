import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  LinearProgress,
  Skeleton,
  Typography,
} from "@mui/material";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useTranslation } from "react-i18next";
import { PostResponse } from "../../apis/postApi";
import { toPersianDigits } from "../../util/persianNumberConverter";

interface ProjectSupportProps {
  post: PostResponse | undefined;
  onSupportClick: () => void;
}

const calculateDifference = (end: Date): string => {
  const start = new Date();
  const diffMs = end.getTime() - start.getTime();

  // Convert to days and hours
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(
    (diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  // Format the result in Persian
  return `${diffDays} روز و ${diffHours} ساعت`;
};

const ProjectSupport = ({ post, onSupportClick }: ProjectSupportProps) => {
  const { t } = useTranslation();
  const progress = post
    ? Math.min((post.fundRaised / post.minimumFund) * 100, 100)
    : 0;

  const formattedDate = post
    ? new Intl.DateTimeFormat("fa-IR", {
        dateStyle: "medium",
      }).format(new Date(post.deadlineDate))
    : "";

  const leftTime = post ? calculateDifference(new Date(post.deadlineDate)) : "";

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "xs",
        borderRadius: "15px",
        border: "1px solid",
        borderColor: "border.sGray",
        py: "10px",
      }}
    >
      <Box
        width="100%"
        height="50px"
        sx={{
          borderBottom: "1px solid",
          borderBottomColor: "border.sGray",
        }}
        alignContent="center"
        justifyItems="center"
      >
        <Typography variant="body1" color="text.primary" fontWeight="bold">
          {t("supportThisProject")}
        </Typography>
      </Box>
      <CardContent
        sx={{ flexGrow: 1, textAlign: "right", paddingX: 2, paddingY: 2 }}
      >
        {post ? (
          <>
            <Typography variant="body2" color="text.primary" fontWeight="bold">
              {t("goal")}
            </Typography>
            <Typography
              textAlign="end"
              variant="body2"
              color="text.primary"
              sx={{
                marginBottom: 1,
                direction: "rtl",
              }}
            >
              {toPersianDigits(post?.minimumFund.toLocaleString()) + " تومان"}
            </Typography>

            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{ height: 10, borderRadius: 5 }}
            />
            <Box width="100%" display="flex" mt={0.5}>
              <Typography
                textAlign="start"
                width="100%"
                variant="body3"
                color="brand.500"
                sx={{
                  direction: "ltr",
                }}
              >
                {progress.toFixed(2) + "%"}
              </Typography>
            </Box>

            <Typography
              variant="body2"
              color="text.primary"
              fontWeight="bold"
              mt={2}
            >
              {t("timeLeft")}
            </Typography>

            <Typography
              textAlign="end"
              variant="body2"
              color="text.primary"
              sx={{
                marginBottom: 1,
                direction: "rtl",
              }}
            >
              {toPersianDigits(leftTime)}
            </Typography>

            <Box
              justifyContent="space-between"
              flexDirection="row"
              display="flex"
              mt={4}
              sx={{
                direction: "rtl",
              }}
            >
              <Typography
                variant="body2"
                color="text.primary"
                fontWeight="bold"
              >
                {t("startTime")}
              </Typography>
              <Typography variant="body2" color="text.primary">
                {formattedDate}
              </Typography>
            </Box>
          </>
        ) : (
          <>
            <Skeleton
              variant="rounded"
              sx={{ width: "100%", height: "60px", my: 1 }}
            />
            <Skeleton
              variant="rounded"
              sx={{ width: "100%", height: "60px", my: 1 }}
            />
            <Skeleton
              variant="rounded"
              sx={{ width: "100%", height: "60px", my: 1 }}
            />
          </>
        )}
      </CardContent>
      <CardActions>
        <Box sx={{ width: "100%" }}>
          <PrimaryButton
            text={t("support")}
            height="40px"
            sx={{ width: "100%" }}
            onClick={onSupportClick}
          />
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProjectSupport;
