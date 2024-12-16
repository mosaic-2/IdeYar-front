import React from "react";
import { useTranslation } from "react-i18next";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import PrimaryGrayButton from "./PrimaryGrayButton";

const UploadImageButton = () => {
  const { t } = useTranslation();
  return (
    <PrimaryGrayButton
      text={t("button.uploadImage")}
      leftIcon={UploadFileIcon}
      width="200px"
      height="80px"
      borderRadius="20px"
    />
  );
};

export default UploadImageButton;
