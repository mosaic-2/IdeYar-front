import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface Props {
  onChange: (selectedValue: string) => void;
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

const CategoryInput = ({ onChange }: Props) => {
  const handleChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value as string;
    onChange(selectedValue);
  };

  return (
    <FormControl fullWidth size="medium">
      <Select
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
