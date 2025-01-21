import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/FundModal.tsx
import { useState } from "react";
import { Modal, Box, Typography, TextField, Button, IconButton, CircularProgress, } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSnackbar } from "notistack";
import { fundPostApi } from "../../apis/fundPostApi.ts";
const FundModal = ({ open, handleClose, id }) => {
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false); // State for loading
    const { enqueueSnackbar } = useSnackbar();
    const handleFund = async () => {
        // Validate the amount
        if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
            enqueueSnackbar("لطفاً مبلغ معتبری وارد کنید.", { variant: "error" });
            return;
        }
        setLoading(true); // Start loading
        try {
            // Call the API with the provided 'id' and 'amount'
            await fundPostApi(id, amount);
            // Show success message
            enqueueSnackbar("تأمین مالی با موفقیت انجام شد.", { variant: "success" });
            // Reset the amount and close the modal
            setAmount("");
            handleClose();
        }
        catch (error) {
            // Handle errors (you can customize this based on your error structure)
            const errorMessage = error.response?.data?.message ||
                "خطایی رخ داد. لطفاً دوباره تلاش کنید.";
            enqueueSnackbar(errorMessage, { variant: "error" });
        }
        finally {
            setLoading(false); // Stop loading
        }
    };
    return (_jsx(Modal, { open: open, onClose: handleClose, "aria-labelledby": "fund-modal-title", "aria-describedby": "fund-modal-description", sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }, children: _jsxs(Box, { width: 400, bgcolor: "background.paper", borderRadius: "10px", boxShadow: 24, p: 4, dir: "rtl" // Enables right-to-left alignment
            , children: [_jsxs(Box, { display: "flex", justifyContent: "space-between", alignItems: "center", children: [_jsx(Typography, { id: "fund-modal-title", variant: "h6", component: "h2", children: "\u062A\u0623\u0645\u06CC\u0646 \u0645\u0627\u0644\u06CC \u062C\u062F\u06CC\u062F" }), _jsx(IconButton, { onClick: handleClose, children: _jsx(CloseIcon, {}) })] }), _jsxs(Box, { mt: 2, display: "flex", flexDirection: "row-reverse", alignItems: "center", gap: 2, children: [_jsx(Typography, { variant: "body1", sx: { whiteSpace: "nowrap", fontWeight: "bold" }, children: "\u0645\u0628\u0644\u063A (\u062A\u0648\u0645\u0627\u0646)" }), _jsx(TextField, { variant: "outlined", fullWidth: true, value: amount, onChange: (e) => setAmount(e.target.value), type: "number", inputProps: { style: { textAlign: "right" } }, disabled: loading })] }), _jsx(Box, { mt: 4, display: "flex", justifyContent: "flex-start", children: _jsx(Button, { variant: "contained", color: "primary", onClick: handleFund, disabled: !amount || loading, startIcon: loading ? _jsx(CircularProgress, { size: 20 }) : null, children: loading ? "در حال انجام..." : "تأمین مالی" }) })] }) }));
};
export default FundModal;
