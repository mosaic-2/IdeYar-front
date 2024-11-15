import {
  Box,
  Card,
  CardActions,
  CardContent,
  LinearProgress,
  Typography,
} from "@mui/material";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useTranslation } from "react-i18next";

interface ProjectSupportProps {
  startTime: string;
  timeLeft: string;
  amountPaid: number;
  amountGoal: number;
}

const ProjectSupport = ({
  startTime,
  timeLeft,
  amountPaid,
  amountGoal,
}: ProjectSupportProps) => {
  const { t } = useTranslation();
  const progress = Math.min((amountPaid / amountGoal) * 100, 100);

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
          {amountGoal.toLocaleString() + " تومان"}
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
          {timeLeft}
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
          <Typography variant="body2" color="text.primary" fontWeight="bold">
            {t("startTime")}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {startTime}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <PrimaryButton text={t("support")} width="100%" height="40px" />
      </CardActions>
    </Card>
  );
};

export default ProjectSupport;
