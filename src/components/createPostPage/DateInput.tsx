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
        sx={{ width: 500 }}
        onChange={(date) => {
          if (date !== null) onChange?.(date.locale("en").format("YYYY-MM-DD"));
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            variant="outlined"
            sx={{
              flexGrow: 1,
              width: "100%",
              height: 40,
              "& .MuiInputBase-input": {
                textAlign: "center",
              },
            }}
          />
        )}
        // Customize the calendar popup
        PaperProps={{
          sx: {
            margin: "0 auto",
          },
        }}
        PopperProps={{
          sx: {
            "& .MuiPaper-root": {
              margin: "0 auto",
              left: "50% !important",
              transform: "translateX(-50%) !important",
            },
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default DateInput;
