import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider, ThemeProvider, useTheme } from "@emotion/react";
import createCache from "@emotion/cache";
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface Props {
  categories: string[];
  onCategoriesChange: (selectedCategories: string[]) => void;
}

const allCategories = [
  "هنر",
  "ویدیو",
  "پروژه‌ها",
  "طراحی",
  "سرامیک",
  "هنر مفهومی",
  "هنر دیجیتال",
  "تصویرسازی",
  "نصب",
];
const MultipleSelectChip = ({ categories, onCategoriesChange }: Props) => {
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<typeof categories>) => {
    const value = event.target.value;
    onCategoriesChange(typeof value === "string" ? [value] : value);
  };

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <FormControl fullWidth size="small">
          <InputLabel>دسته بندی</InputLabel>
          <Select
            label={"دسته بندی"}
            value={categories}
            multiple
            onChange={handleChange}
            size="medium"
            renderValue={(selected) => (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 0.5,
                }}
              >
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {allCategories.map((option, index) => (
              <MenuItem dir="rtl" key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </ThemeProvider>
    </CacheProvider>
  );
};
export default MultipleSelectChip;
