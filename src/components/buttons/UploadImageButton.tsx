import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import PrimaryGrayButton from "./PrimaryGrayButton";
import { Button, Typography } from "@mui/material";

interface Props {
  onChange?: (file: ChangeEvent<HTMLInputElement>) => void;
}

const UploadImageButton = ({ onChange }: Props) => {
  const { t } = useTranslation();
  return (
    <Button
      variant="contained"
      component="label"
      sx={{
        width: 200,
        height: 80,
        paddingX: 1.5,
        border: 2,
        borderRadius: 5,
        borderColor: "button.primaryGrayBd",
        bgcolor: "button.primaryGrayBg",
        color: "button.primaryGrayFg",
        "&:hover": {
          bgcolor: "button.primaryGrayBgHover",
        },
        "&:active": {
          bgcolor: "button.primaryGrayBgPressed",
        },
      }}
    >
      <Typography variant="buttonT3">{t("button.uploadImage")}</Typography>
      <UploadFileIcon sx={{ ml: 2 }} />
      <input type="file" accept="image/*" hidden onChange={onChange} />
    </Button>
  );
};

export default UploadImageButton;
