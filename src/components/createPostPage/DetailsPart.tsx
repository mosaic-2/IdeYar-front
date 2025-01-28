import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import MonyInput from "./MonyInput";
import DateInput from "./DateInput";
import PrimaryButton from "../buttons/PrimaryButton";
import CategoryInput from "./CategoryInput";
import { ContentPasteSearch } from "@mui/icons-material";

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
  const [selectedCategory, setSelectedCategory] = useState<string>(""); // New: Track category state

  return (
    <Stack
      direction="column"
      spacing={2}
      width="100%"
      sx={{
        pb: 10,
        justifyContent: "flex-start",
        alignItems: "stretch",
      }}
    >
      <Box justifyContent="space-between" display="flex" flexDirection="row">
        <Box display="flex" flexDirection="row" gap={1}>
          <ContentPasteSearch sx={{ color: "brand.400" }} />
          <Typography fontWeight="bold"> {t("createPost.info")}</Typography>
        </Box>
      </Box>

      <Stack
        spacing={2}
        sx={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Typography alignSelf="start" fontWeight="bold">
          هزینه اولیه
        </Typography>
        <MonyInput
          onChange={(e) => {
            onFundChange?.(e.target.value);
          }}
        />

        <Typography alignSelf="start" fontWeight="bold">
          تاریخ شروع پروژه
        </Typography>
        <DateInput onChange={onDateChange} />

        <Typography alignSelf="start" fontWeight="bold">
          دسته بندی
        </Typography>
        <CategoryInput
          value={selectedCategory} // New: Controlled value
          onChange={(s) => {
            setSelectedCategory(s); // New: Update state
            onCategoryChange?.(s);
          }}
        />

        <PrimaryButton
          onClick={onSubmit}
          text={creating ? "..." : t("createPost.submit")}
          width="100px"
          height="40px"
        />
      </Stack>
    </Stack>
  );
};

export default DetailsPart;
