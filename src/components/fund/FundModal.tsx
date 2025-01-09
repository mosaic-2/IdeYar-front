// src/components/FundModal.tsx

import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSnackbar } from "notistack";
import { fundPostApi } from "../../apis/fundPostApi.ts";

interface FundModalProps {
  open: boolean;
  handleClose: () => void;
  id: number; // Add the 'id' prop
}

const FundModal: React.FC<FundModalProps> = ({ open, handleClose, id }) => {
  const [amount, setAmount] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false); // State for loading
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
    } catch (error: any) {
      // Handle errors (you can customize this based on your error structure)
      const errorMessage =
        error.response?.data?.message ||
        "خطایی رخ داد. لطفاً دوباره تلاش کنید.";
      enqueueSnackbar(errorMessage, { variant: "error" });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="fund-modal-title"
      aria-describedby="fund-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        width={400}
        bgcolor="background.paper"
        borderRadius="10px"
        boxShadow={24}
        p={4}
        dir="rtl" // Enables right-to-left alignment
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography id="fund-modal-title" variant="h6" component="h2">
            تأمین مالی جدید
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          mt={2}
          display="flex"
          flexDirection="row-reverse"
          alignItems="center"
          gap={2} // Adds spacing between label and input
        >
          <Typography
            variant="body1"
            sx={{ whiteSpace: "nowrap", fontWeight: "bold" }} // Keeps the label aligned properly
          >
            مبلغ (تومان)
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            inputProps={{ style: { textAlign: "right" } }} // Align text inside the input field to the right
            disabled={loading} // Disable input while loading
          />
        </Box>

        <Box mt={4} display="flex" justifyContent="flex-start">
          <Button
            variant="contained"
            color="primary"
            onClick={handleFund}
            disabled={!amount || loading} // Disable button if no amount or loading
            startIcon={loading ? <CircularProgress size={20} /> : null} // Show loading spinner
          >
            {loading ? "در حال انجام..." : "تأمین مالی"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default FundModal;
