import { Box } from "@mui/material";
import React from "react";
import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}

const SimpleLayout = ({ children }: Prop) => {
  return (
    <Box sx={{ paddingX: 20 }} marginBottom={1}>
      {children}
    </Box>
  );
};

export default SimpleLayout;
