import { Box, Stack, Typography } from "@mui/material";
import UploadImageButton from "../buttons/UploadImageButton";
import { ChangeEvent } from "react";

interface Props {
  imagePreview: string | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ImageUploadPart = ({ imagePreview, onChange }: Props) => {
  return (
    <Box width="700px" height="450px">
      {imagePreview && (
        <>
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

          <UploadImageButton onChange={onChange} />
        </>
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
          >
            {/* <Stack
            sx={{
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          ></Stack> */}
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <UploadImageButton onChange={onChange} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ImageUploadPart;
