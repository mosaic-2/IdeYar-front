import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import MonyInput from "./MonyInput";
import DateInput from "./DateInput";
import PrimaryButton from "../buttons/PrimaryButton";
import CategoryInput from "./CategoryInput";

interface Props {
  onFundChange?: (s: string) => void;
  onDateChange?: (s: string) => void;
  onCategoryChange?: (s: string) => void;
  onSubmit?: () => void;
  creating: boolean;
}

const DetailsPart = ({
  onFundChange,
  onDateChange,
  onCategoryChange,
  onSubmit,
  creating,
}: Props) => {
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
      <Box bgcolor="border.sGray" sx={{ height: 2 }} />
      <Typography variant="h6" color="text.tertiary">
        {t("createPost.info")}
      </Typography>
      <Stack
        spacing={2}
        sx={{
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <MonyInput
          onChange={(e) => {
            onFundChange?.(e.target.value);
          }}
        />
        <DateInput onChange={onDateChange} />
        <CategoryInput
          onChange={(s) => {
            onCategoryChange?.(s);
          }}
        />
        <PrimaryButton
          onClick={onSubmit}
          text={creating ? "..." : t("createPost.submit")}
          height="50px"
        />
      </Stack>
    </Stack>
  );
};

export default DetailsPart;
