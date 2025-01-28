import { Box, Stack, Typography } from "@mui/material";
import UploadImageButton from "../buttons/UploadImageButton";
import { ChangeEvent, useEffect } from "react";

interface Props {
  imagePreview: string | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onDeleteImage: () => void;
}

const ImageUploadPart = ({ imagePreview, onChange, onDeleteImage }: Props) => {
  return (
    <Box width="700px" height="450px">
      {imagePreview && (
        <Box display="flex" flexDirection="column" gap={2}>
          <Box textAlign="center" display="flex" flexDirection="column">
            <img
              src={imagePreview}
              width="700px"
              height="400px"
              alt="Selected"
              style={{
                borderRadius: 20,
              }}
            />
          </Box>
          <UploadImageButton
            imagePreview={imagePreview}
            onChange={(e, isRemoved) => {
              if (isRemoved) {
                onDeleteImage();
              } else {
                onChange(e);
              }
            }}
            status="uploaded"
          />
        </Box>
      )}
      {!imagePreview && (
        <Box gap={2} display="flex" flexDirection="column">
          {" "}
          <Box
            bgcolor="bg.secondary"
            sx={{
              height: "400px",
              borderRadius: 4,
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <UploadImageButton
              imagePreview={imagePreview}
              onChange={(e, isRemoved) => {
                if (isRemoved) {
                  onDeleteImage();
                } else {
                  onChange(e);
                }
              }}
              status="not-uploaded"
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ImageUploadPart;
