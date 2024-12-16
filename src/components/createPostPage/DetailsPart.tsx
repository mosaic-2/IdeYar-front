import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import MonyInput from "./MonyInput";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DateInput from "./DateInput";

const DetailsPart = () => {
  const { t } = useTranslation();

  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        justifyContent: "flex-start",
        alignItems: "stretch",
      }}
    >
      <Box bgcolor="border.sGray" sx={{ height: 2, width: "100%" }} />
      <Typography variant="h6" color="text.tertiary">
        {t("createPost.info")}
      </Typography>
      <Stack
        sx={{ px: 40, justifyContent: "flex-start", alignItems: "stretch" }}
      >
        <MonyInput />
        <DateInput />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">دسته بندی</InputLabel>
          <Select
            size="small"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">مکان</InputLabel>
          <Select
            size="small"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
};

export default DetailsPart;
