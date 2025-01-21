import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, TextField } from "@mui/material";
import ImageUploadPart from "./ImageUploadPart";
import { useTranslation } from "react-i18next";
const MainTitlePart = ({ imagePreview, onImageChange, onTitleChange, }) => {
    const { t } = useTranslation();
    return (_jsxs(Stack, { direction: "column", spacing: 2, sx: {
            justifyContent: "flex-start",
            alignItems: "stretch",
        }, children: [_jsx(ImageUploadPart, { imagePreview: imagePreview, onChange: onImageChange }), _jsx(TextField, { dir: "rtl", label: t("field.mainTitle"), variant: "outlined", size: "small", onChange: (e) => {
                    onTitleChange?.(e.target.value);
                } }), _jsx(TextField, { dir: "rtl", label: t("field.subTitle"), variant: "outlined", size: "small" })] }));
};
export default MainTitlePart;
