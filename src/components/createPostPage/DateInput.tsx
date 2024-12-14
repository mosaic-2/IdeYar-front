import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMomentJalaali } from "@mui/x-date-pickers/AdapterMomentJalaali";

const DateInput = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterMomentJalaali}>
      <DatePicker
        //   value={birthday}
        //   onChange={(newValue) => {
        //     setBirthday(newValue);
        //   }}
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            variant="outlined"
            sx={{
              flexGrow: 1,
              width: "100%",
              maxWidth: 250,
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
            width: 200,
            margin: "0 auto",
          },
        }}
        PopperProps={{
          sx: {
            "& .MuiPaper-root": {
              width: 250,
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
