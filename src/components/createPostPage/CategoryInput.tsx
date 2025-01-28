import { useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface Props {
  onChange: (selectedValue: string) => void;
  value?: string; // New: Pass selected category from parent
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

const CategoryInput = ({ onChange, value }: Props) => {
  const [selectedValue, setSelectedValue] = useState<string>(value || ""); // New: Use state for controlled input

  const handleChange = (event: SelectChangeEvent) => {
    const newValue = event.target.value as string;
    setSelectedValue(newValue); // Update state
    onChange(newValue); // Notify parent
  };

  return (
    <FormControl fullWidth size="medium">
      <Select
        value={selectedValue} // New: Set controlled value
        onChange={handleChange}
        size="medium"
        variant="filled"
        hiddenLabel
      >
        {allCategories.map((option, index) => (
          <MenuItem dir="rtl" key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategoryInput;
