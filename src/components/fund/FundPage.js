import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// FundPage.tsx
import { useState } from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import FundModal from "./FundModal";
const FundPage = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (_jsxs(Container, { maxWidth: "sm", children: [_jsxs(Box, { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", bgcolor: "#f5f5f5", borderRadius: "10px", boxShadow: 3, p: 4, children: [_jsx(Typography, { variant: "h4", gutterBottom: true, children: "\u0635\u0641\u062D\u0647 \u062A\u0623\u0645\u06CC\u0646 \u0645\u0627\u0644\u06CC" }), _jsx(Button, { variant: "contained", color: "primary", onClick: handleOpen, size: "large", sx: { mt: 2 }, children: "\u062A\u0623\u0645\u06CC\u0646 \u0645\u0627\u0644\u06CC \u06A9\u0646\u06CC\u062F" })] }), _jsx(FundModal, { open: open, handleClose: handleClose })] }));
};
export default FundPage;
