import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import MonyInput from "./MonyInput";
import DateInput from "./DateInput";
import PrimaryButton from "../buttons/PrimaryButton";
const DetailsPart = ({ onFundChange, onDateChange, onSubmit, creating, }) => {
    const { t } = useTranslation();
    return (_jsxs(Stack, { direction: "column", spacing: 2, sx: {
            pb: 10,
            justifyContent: "flex-start",
            alignItems: "stretch",
        }, children: [_jsx(Box, { bgcolor: "border.sGray", sx: { height: 2, width: "100%" } }), _jsx(Typography, { variant: "h6", color: "text.tertiary", children: t("createPost.info") }), _jsxs(Stack, { spacing: 2, sx: { px: 40, justifyContent: "flex-start", alignItems: "center" }, children: [_jsx(MonyInput, { onChange: (e) => {
                            onFundChange?.(e.target.value);
                        } }), _jsx(DateInput, { onChange: onDateChange }), _jsx(PrimaryButton, { onClick: onSubmit, text: creating ? "..." : t("createPost.submit"), width: "300px", height: "50px" })] })] }));
};
export default DetailsPart;
