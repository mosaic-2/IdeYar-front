import { Box, Stack, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import MonyInput from "./MonyInput";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DateInput from "./DateInput";

const DetailsPart = () => {
  const { t } = useTranslation();

  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        justifyContent: "flex-start",
        alignItems: "stretch",
      }}
    >
      <Box bgcolor="border.sGray" sx={{ height: 2, width: "100%" }} />
      <Typography variant="h6" color="text.tertiary">
        {t("createPost.info")}
      </Typography>
      <MonyInput />
      <DateInput />
    </Stack>
  );
};

export default DetailsPart;
