import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMomentJalaali } from "@mui/x-date-pickers/AdapterMomentJalaali";

interface Props {
  onChange?: (date: string) => void;
}

const DateInput = ({ onChange }: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMomentJalaali}>
      <DatePicker
        sx={{ width: "100%" }}
        onChange={(date) => {
          if (date !== null) onChange?.(date.locale("en").format("YYYY-MM-DD"));
        }}
        slotProps={{
          textField: {
            size: "small",
            sx: { width: "100%" },
            label: "تاریخ شروع پروژه",
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default DateInput;
