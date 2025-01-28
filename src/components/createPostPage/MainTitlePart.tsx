import { Box, Stack, TextField, Typography, Button } from "@mui/material";
import ImageUploadPart from "./ImageUploadPart";
import { useTranslation } from "react-i18next";
import { ChangeEvent } from "react";
import { Photo } from "@mui/icons-material";
import InfoIcon from "@mui/icons-material/Info";

interface Props {
  imagePreview: string | null;
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onDeleteImage: () => void;
  onTitleChange?: (title: string) => void;
  onTextChange?: (title: string) => void;
  status: "uploaded" | "not-uploaded";
}

const MainTitlePart = ({
  imagePreview,
  onImageChange,
  onDeleteImage,
  onTitleChange,
  onTextChange,
  status,
}: Props) => {
  const { t } = useTranslation();

  return (
    <Stack
      direction="column"
      spacing={3}
      display="flex"
      sx={{
        justifyContent: "flex-start",
        alignItems: "stretch",
      }}
    >
      <Stack direction="row" gap={1}>
        <Photo sx={{ color: "brand.400" }} />
        <Typography fontWeight="bold">عکس پروژه</Typography>
      </Stack>

      <ImageUploadPart
        imagePreview={imagePreview}
        onChange={onImageChange}
        onDeleteImage={onDeleteImage}
      />

      <Box width="100%" bgcolor="border.sGray" height="1px"></Box>

      <Box justifyContent="space-between" display="flex" flexDirection="row">
        <Box display="flex" flexDirection="row" gap={1}>
          <InfoIcon sx={{ color: "brand.400" }} />
          <Typography fontWeight="bold">اطلاعات عمومی</Typography>
        </Box>
      </Box>
      <Stack direction="row" gap={0.5}>
        <Typography fontWeight="bold">عنوان پروژه</Typography>
        <Typography fontWeight="bold" color="red">
          *
        </Typography>
      </Stack>

      <TextField
        hiddenLabel
        placeholder="عنوان اصلی پروژه"
        variant="filled"
        onChange={(e) => {
          onTitleChange?.(e.target.value);
        }}
      />

      <Typography fontWeight="bold">کپشن (اختیاری)</Typography>

      <TextField
        hiddenLabel
        placeholder="توضیحات"
        variant="filled"
        onChange={(e) => {
          onTextChange?.(e.target.value);
        }}
        multiline
        rows={3}
      />
    </Stack>
  );
};

export default MainTitlePart;
