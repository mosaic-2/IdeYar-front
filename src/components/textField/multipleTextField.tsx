import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useEffect, useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

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
  const [categoryName, setCategoryName] = useState<string[]>(categories);

  const handleChange = (event: SelectChangeEvent<typeof categoryName>) => {
    const {
      target: { value },
    } = event;
    setCategoryName(typeof value === "string" ? value.split(",") : value);
  };

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  onCategoriesChange(categoryName);

  return (
    <div>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <FormControl sx={{ width: "260px" }}>
            <InputLabel id="demo-multiple-chip-label">دسته بندی</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={categoryName}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
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
              MenuProps={MenuProps}
            >
              {allCategories.map((category) => (
                <MenuItem dir="rtl" key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ThemeProvider>
      </CacheProvider>
    </div>
  );
};
export default MultipleSelectChip;
