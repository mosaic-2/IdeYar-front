import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSnackbar } from "notistack";

interface FundModalProps {
  open: boolean;
  handleClose: () => void;
}

const FundModal: React.FC<FundModalProps> = ({ open, handleClose }) => {
  const [amount, setAmount] = useState<string>("");
  const { enqueueSnackbar } = useSnackbar();

  const handleFund = () => {
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0) {
      enqueueSnackbar("لطفاً مبلغ معتبری وارد کنید.", { variant: "error" });
      return;
    }

    // This is where you can add the API call for funding

    enqueueSnackbar("تأمین مالی با موفقیت انجام شد.", { variant: "success" });
    setAmount("");
    handleClose();
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
          />
        </Box>

        <Box mt={4} display="flex" justifyContent="flex-start">
          <Button
            variant="contained"
            color="primary"
            onClick={handleFund}
            disabled={!amount}
          >
            تأمین مالی
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default FundModal;
