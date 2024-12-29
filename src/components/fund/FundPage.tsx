// FundPage.tsx
import React, { useState } from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import FundModal from "./FundModal";

const FundPage: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        bgcolor="#f5f5f5"
        borderRadius="10px"
        boxShadow={3}
        p={4}
      >
        <Typography variant="h4" gutterBottom>
          صفحه تأمین مالی
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
          size="large"
          sx={{ mt: 2 }}
        >
          تأمین مالی کنید
        </Button>
      </Box>

      <FundModal open={open} handleClose={handleClose} />
    </Container>
  );
};

export default FundPage;
