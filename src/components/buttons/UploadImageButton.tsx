import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import PrimaryGrayButton from "./PrimaryGrayButton";
import { Button, Typography } from "@mui/material";
import { CloudUploadOutlined } from "@mui/icons-material";

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
        paddingX: 1.5,

        gap: 1,
        borderRadius: 1,
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
      {/* <UploadFileIcon sx={{ ml: 2 }} /> */}
      <CloudUploadOutlined />
      <input type="file" accept="image/*" hidden onChange={onChange} />
    </Button>
  );
};

export default UploadImageButton;
