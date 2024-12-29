import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface Props {
  onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const MonyInput = ({ onChange }: Props) => {
  return (
    <TextField
      dir="rtl"
      label={"هزینه اولیه"}
      variant="outlined"
      sx={{ width: 500 }}
      onChange={onChange}
    />
  );
};

export default MonyInput;
