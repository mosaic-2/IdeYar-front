import { jsx as _jsx } from "react/jsx-runtime";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMomentJalaali } from "@mui/x-date-pickers/AdapterMomentJalaali";
const DateInput = ({ onChange }) => {
    return (_jsx(LocalizationProvider, { dateAdapter: AdapterMomentJalaali, children: _jsx(DatePicker, { sx: { width: 500 }, onChange: (date) => {
                if (date !== null)
                    onChange?.(date.locale("en").format("YYYY-MM-DD"));
            }, renderInput: (params) => (_jsx(TextField, { ...params, size: "small", variant: "outlined", sx: {
                    flexGrow: 1,
                    width: "100%",
                    height: 40,
                    "& .MuiInputBase-input": {
                        textAlign: "center",
                    },
                } })), 
            // Customize the calendar popup
            PaperProps: {
                sx: {
                    margin: "0 auto",
                },
            }, PopperProps: {
                sx: {
                    "& .MuiPaper-root": {
                        margin: "0 auto",
                        left: "50% !important",
                        transform: "translateX(-50%) !important",
                    },
                },
            } }) }));
};
export default DateInput;
