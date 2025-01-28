import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface Props {
  onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const MonyInput = ({ onChange }: Props) => {
  return (
    <TextField
      dir="rtl"
      type="number"
      inputProps={{ min: 0 }}
      hiddenLabel
      variant="filled"
      size="medium"
      sx={{ width: "100%" }}
      onChange={onChange}
    />
  );
};

export default MonyInput;
