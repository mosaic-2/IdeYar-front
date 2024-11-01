// src/components/CustomButton/CustomButton.tsx
import React from "react";
import Button from "@mui/material/Button";
import { ButtonProps } from "@mui/material/Button";

interface CustomButtonProps extends ButtonProps {
  startIcon?: React.ReactNode;
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  startIcon,
  children,
  ...props
}) => (
  <Button
    variant="contained"
    startIcon={startIcon}
    {...props}
    sx={{
      backgroundColor: "primary",
      color: "white",
      "&:hover": {
        backgroundColor: "primary",
      },
      "&:active": {
        backgroundColor: "primary",
      },
      minWidth: "120px",
      textTransform: "none", // Keep text case as is
    }}
  >
    {children}
  </Button>
);

export default CustomButton;
