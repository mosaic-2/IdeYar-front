import { jsx as _jsx } from "react/jsx-runtime";
import { TextField } from "@mui/material";
const MonyInput = ({ onChange }) => {
    return (_jsx(TextField, { dir: "rtl", type: "number", inputProps: { min: 0 }, label: "هزینه اولیه", variant: "outlined", sx: { width: 500 }, onChange: onChange }));
};
export default MonyInput;
