import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider, ThemeProvider, useTheme } from "@emotion/react";
import createCache from "@emotion/cache";

const selects = ["-", "محبوب ترین", "جدیدترین", "قدیمی ترین", "پر بازدیدترین"];

interface Props {
  onChange: (
    sort: "SORT_BY_UNSPECIFIED" | "CREATED_TIME" | "DEADLINE" | null,
    ascending: boolean
  ) => void;
}
const SingleTextField = ({ onChange }: Props) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    if (value == "-") {
      onChange(null, false);
    } else if (value == "محبوب ترین") {
      onChange(null, false);
    } else if (value == "جدیدترین") {
      onChange("CREATED_TIME", true);
    } else if (value == "قدیمی ترین") {
      onChange("CREATED_TIME", false);
    } else if (value == "پر بازدیدترین") {
      onChange(null, false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <div>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <FormControl fullWidth>
            <InputLabel>مرتب سازی بر اساس</InputLabel>
            <Select
              label={"مرتب سازی بر اساس"}
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              onChange={handleChange}
            >
              {selects.map((val) => (
                <MenuItem dir="rtl" key={val} value={val}>
                  {val}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ThemeProvider>
      </CacheProvider>
    </div>
  );
};
export default SingleTextField;
