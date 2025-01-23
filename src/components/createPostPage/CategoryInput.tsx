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
    <FormControl fullWidth size="small">
      <InputLabel>دسته بندی</InputLabel>
      <Select label={"دسته بندی"} onChange={handleChange} size="small">
        {allCategories.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategoryInput;
