import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useState } from "react";
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
const MultipleSelectChip = ({ categories, onCategoriesChange }) => {
    const theme = useTheme();
    const [categoryName, setCategoryName] = useState(categories);
    const handleChange = (event) => {
        const { target: { value }, } = event;
        setCategoryName(typeof value === "string" ? value.split(",") : value);
    };
    const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin],
    });
    onCategoriesChange(categoryName);
    return (_jsx("div", { children: _jsx(CacheProvider, { value: cacheRtl, children: _jsx(ThemeProvider, { theme: theme, children: _jsxs(FormControl, { sx: { width: "260px" }, children: [_jsx(InputLabel, { id: "demo-multiple-chip-label", children: "\u062F\u0633\u062A\u0647 \u0628\u0646\u062F\u06CC" }), _jsx(Select, { labelId: "demo-multiple-chip-label", id: "demo-multiple-chip", multiple: true, value: categoryName, onChange: handleChange, input: _jsx(OutlinedInput, { id: "select-multiple-chip", label: "Chip" }), renderValue: (selected) => (_jsx(Box, { sx: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 0.5,
                                }, children: selected.map((value) => (_jsx(Chip, { label: value }, value))) })), MenuProps: MenuProps, children: allCategories.map((category) => (_jsx(MenuItem, { dir: "rtl", value: category, children: category }, category))) })] }) }) }) }));
};
export default MultipleSelectChip;
