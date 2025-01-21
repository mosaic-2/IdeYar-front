import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Button, Typography } from "@mui/material";
const UploadImageButton = ({ onChange }) => {
    const { t } = useTranslation();
    return (_jsxs(Button, { variant: "contained", component: "label", sx: {
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
        }, children: [_jsx(Typography, { variant: "buttonT3", children: t("button.uploadImage") }), _jsx(UploadFileIcon, { sx: { ml: 2 } }), _jsx("input", { type: "file", accept: "image/*", hidden: true, onChange: onChange })] }));
};
export default UploadImageButton;
