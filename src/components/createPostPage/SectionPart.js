import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Collapse, Stack, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import UploadImageButton from "../buttons/UploadImageButton";
import { toPersianDigits } from "../../util/persianNumberConverter";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
const SectionPart = ({ index, section, onChangeSection }) => {
    const { t } = useTranslation();
    const [isNew, setNew] = useState(true);
    useEffect(() => {
        if (isNew) {
            const timeout = setTimeout(() => {
                setNew(false);
            }, 10);
            return () => clearTimeout(timeout);
        }
    }, []);
    const handleTitleChange = (event) => {
        onChangeSection(index, { ...section, title: event.target.value });
    };
    const handleTextChange = debounce((event) => {
        onChangeSection(index, { ...section, text: event.target.value });
    }, 300);
    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            onChangeSection(index, {
                ...section,
                imageFile: file,
                imagePreview: URL.createObjectURL(file),
            });
        }
    };
    return (_jsx(Collapse, { in: !isNew, timeout: "auto", unmountOnExit: true, children: _jsxs(Stack, { direction: "column", spacing: 2, sx: {
                justifyContent: "flex-start",
                alignItems: "stretch",
            }, children: [_jsx(Box, { bgcolor: "border.sGray", sx: { height: 2, width: "100%" } }), _jsxs(Typography, { variant: "h6", color: "text.tertiary", children: [t("createPost.section"), " ", section.order == null
                            ? ""
                            : toPersianDigits((section.order + 1).toString())] }), _jsx(TextField, { dir: "rtl", label: t("field.title"), variant: "outlined", size: "small", onChange: handleTitleChange }), _jsx(TextField, { dir: "rtl", label: t("field.text"), variant: "outlined", size: "small", onChange: (e) => {
                        e.persist();
                        handleTextChange(e);
                    }, multiline: true, rows: 10 }), section.imagePreview && (_jsx(Box, { textAlign: "center", children: _jsx("img", { src: section.imagePreview, alt: "Selected", style: { maxWidth: "100%", maxHeight: "500px", borderRadius: 20 } }) })), _jsx(Stack, { sx: {
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                    }, children: _jsx(UploadImageButton, { onChange: handleImageChange }) })] }) }));
};
export default SectionPart;
