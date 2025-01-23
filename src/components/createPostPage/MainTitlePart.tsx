import { Stack, TextField } from "@mui/material";
import ImageUploadPart from "./ImageUploadPart";
import { useTranslation } from "react-i18next";
import { ChangeEvent } from "react";

interface Props {
  imagePreview: string | null;
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onTitleChange?: (title: string) => void;
  onTextChange?: (title: string) => void;
}
const MainTitlePart = ({
  imagePreview,
  onImageChange,
  onTitleChange,
  onTextChange,
}: Props) => {
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
      <ImageUploadPart imagePreview={imagePreview} onChange={onImageChange} />
      <TextField
        dir="rtl"
        label={t("field.mainTitle")}
        variant="outlined"
        size="small"
        onChange={(e) => {
          onTitleChange?.(e.target.value);
        }}
      />
      <TextField
        dir="rtl"
        label={t("field.subTitle")}
        variant="outlined"
        size="small"
        onChange={(e) => {
          onTextChange?.(e.target.value);
        }}
      />
    </Stack>
  );
};

export default MainTitlePart;
