import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Typography, Box, Stack } from "@mui/material";
import { CloudUploadOutlined, DeleteOutline } from "@mui/icons-material";

interface Props {
  onChange?: (e: ChangeEvent<HTMLInputElement>, isRemoved: boolean) => void;
  imagePreview?: string | null;
  status: "uploaded" | "not-uploaded";
}

const UploadImageButton = ({
  onChange,
  imagePreview = null,
  status,
}: Props) => {
  const { t } = useTranslation();
  const [uploaded, setUploaded] = useState(!!imagePreview);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploaded(true);
      if (onChange) onChange(event, false);
    }
  };

  const handleRemoveFile = () => {
    setUploaded(false);
    if (onChange)
      onChange(
        { target: { files: null } } as ChangeEvent<HTMLInputElement>,
        true
      ); // Notify parent about the removal
  };

  return (
    <Stack direction="column" alignItems="flex-start" gap={2}>
      <Box display="flex" gap={1}>
        {/* Upload Button */}
        {status == "uploaded" && (
          <Button
            variant="contained"
            endIcon={<CloudUploadOutlined />}
            sx={{
              px: "1.5",
              bgcolor: "brand.400",
            }}
          >
            <Typography variant="buttonT3">
              {uploaded ? "تعویض عکس" : t("button.uploadImage")}
            </Typography>

            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleFileChange}
            />
          </Button>
        )}

        {status == "not-uploaded" && (
          <Button
            variant="contained"
            component="label"
            sx={{
              paddingX: 1.5,
              gap: 1,
              width: "200px",
              height: "100px",
              borderColor: "button.primaryGrayBd",
              bgcolor: "button.primaryGrayBg",
              color: "button.primaryGrayFg",
              border: "2px dashed gray",
              borderRadius: 5,
              "&:hover": {
                bgcolor: "button.primaryGrayBgHover",
              },
              "&:active": {
                bgcolor: "button.primaryGrayBgPressed",
              },
            }}
          >
            <Typography variant="buttonT3">
              {t("button.uploadImage")}
            </Typography>
            <CloudUploadOutlined />
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleFileChange}
            />
          </Button>
        )}

        {uploaded && (
          <Button
            variant="text"
            color="error"
            onClick={handleRemoveFile}
            endIcon={<DeleteOutline />}
          >
            حذف عکس
          </Button>
        )}
      </Box>
    </Stack>
  );
};

export default UploadImageButton;
