import { Box, Grid } from "@mui/material";
import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
  leftFrame: ReactNode;
  paddingX?: number;
}

const StickyLeftLayout = ({ children, leftFrame, paddingX }: Prop) => {
  return (
    <Box sx={{ paddingX: paddingX || 7.5 }} marginBottom={1}>
      <Grid
        container
        spacing={1.5}
        direction={{ xs: "column-reverse", md: "row" }}
      >
        <Grid item xs={12} md={3}>
          <Box marginTop={3} top={30} position={"sticky"}>
            {leftFrame}
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={1.5} columns={9}>
            <Grid item xs={12} md={9}>
              {children}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StickyLeftLayout;
