import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Stack } from "@mui/material";
import PrimaryGrayButton from "../buttons/PrimaryGrayButton";
import { useTranslation } from "react-i18next";
const AddNewSectionPart = ({ onAdd }) => {
    const { t } = useTranslation();
    return (_jsxs(Stack, { direction: "column", spacing: 2, sx: {
            justifyContent: "flex-start",
            alignItems: "center",
        }, children: [_jsx(Box, { bgcolor: "border.sGray", sx: { height: 2, width: "100%" } }), _jsx(PrimaryGrayButton, { text: t("button.AddNewSection"), onClick: onAdd })] }));
};
export default AddNewSectionPart;
