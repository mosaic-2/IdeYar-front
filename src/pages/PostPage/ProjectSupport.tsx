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

interface ProjectSupportProps {
  post: PostResponse | undefined;
}

const ProjectSupport = ({ post }: ProjectSupportProps) => {
  const { t } = useTranslation();
  const progress = post
    ? Math.min((post.fundRaised / post.minimumFund) * 100, 100)
    : 0;

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
              {post?.minimumFund.toLocaleString() + " تومان"}
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
              {post?.deadlineDate}
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
                {post?.createdAt.toString()}
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
          />
        </Box>
      </CardActions>
    </Card>
  );
};

export default ProjectSupport;
