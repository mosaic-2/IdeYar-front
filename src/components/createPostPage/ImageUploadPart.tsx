import { Box, Stack } from "@mui/material";
import UploadImageButton from "../buttons/UploadImageButton";

const ImageUploadPart = () => {
  return (
    <Box height={400}>
      <Box
        bgcolor="bg.secondary"
        sx={{ height: "100%", mx: 20, borderRadius: 4 }}
      >
        <Stack
          sx={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <UploadImageButton />
        </Stack>
      </Box>
    </Box>
  );
};

export default ImageUploadPart;
