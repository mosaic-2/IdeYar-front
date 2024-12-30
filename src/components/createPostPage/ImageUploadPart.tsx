import { Box, Stack } from "@mui/material";
import UploadImageButton from "../buttons/UploadImageButton";
import { ChangeEvent } from "react";

interface Props {
  imagePreview: string | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ImageUploadPart = ({ imagePreview, onChange }: Props) => {
  return (
    <Box>
      {imagePreview && (
        <>
          <Box textAlign="center">
            <img
              src={imagePreview}
              alt="Selected"
              style={{ maxWidth: "100%", maxHeight: "500px", borderRadius: 20 }}
            />
          </Box>
          <Stack
            sx={{
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <UploadImageButton onChange={onChange} />
          </Stack>
        </>
      )}
      {!imagePreview && (
        <Box
          bgcolor="bg.secondary"
          sx={{
            height: "500px",
            mx: 20,
            borderRadius: 4,
            border: 2,
            borderColor: "border.sGray",
          }}
        >
          <Stack
            sx={{
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <UploadImageButton onChange={onChange} />
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default ImageUploadPart;
