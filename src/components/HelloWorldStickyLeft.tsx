import { Box } from "@mui/material";
import PageLayout from "./layouts/PageLayout";
import StickyLeftLayout from "./layouts/StickyLeftLayout";

const HelloWorldStickyLeft = () => {
  return (
    <PageLayout>
      <StickyLeftLayout
        leftFrame={<Box width="100%" height="400px" sx={{ bgcolor: "blue" }} />}
      >
        <Box width="100%" height="2400px" sx={{ bgcolor: "red" }} />
      </StickyLeftLayout>
    </PageLayout>
  );
};

export default HelloWorldStickyLeft;
