import { Box, Stack, TextField } from "@mui/material";
import ImageUploadPart from "./ImageUploadPart";
import { useTranslation } from "react-i18next";

const MainTitlePart = () => {
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
      <ImageUploadPart />
      <TextField
        dir="rtl"
        label={t("field.mainTitle")}
        variant="outlined"
        size="small"
      />
      <TextField
        dir="rtl"
        label={t("field.subTitle")}
        variant="outlined"
        size="small"
      />
    </Stack>
  );
};

export default MainTitlePart;
