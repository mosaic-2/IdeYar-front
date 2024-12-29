import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import MonyInput from "./MonyInput";
import DateInput from "./DateInput";
import PrimaryButton from "../buttons/PrimaryButton";

interface Props {
  onFundChange?: (fund: string) => void;
  onDateChange?: (fund: string) => void;
  onSubmit?: () => void;
}

const DetailsPart = ({ onFundChange, onDateChange, onSubmit }: Props) => {
  const { t } = useTranslation();

  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        pb: 10,
        justifyContent: "flex-start",
        alignItems: "stretch",
      }}
    >
      <Box bgcolor="border.sGray" sx={{ height: 2, width: "100%" }} />
      <Typography variant="h6" color="text.tertiary">
        {t("createPost.info")}
      </Typography>
      <Stack
        spacing={2}
        sx={{ px: 40, justifyContent: "flex-start", alignItems: "center" }}
      >
        <MonyInput
          onChange={(e) => {
            onFundChange?.(e.target.value);
          }}
        />
        <DateInput onChange={onDateChange} />
        <PrimaryButton
          onClick={onSubmit}
          text={t("createPost.submit")}
          width="300px"
          height="50px"
        />
      </Stack>
    </Stack>
  );
};

export default DetailsPart;
