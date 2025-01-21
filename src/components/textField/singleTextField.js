import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider, ThemeProvider, useTheme } from "@emotion/react";
import createCache from "@emotion/cache";
const SingleTextField = ({ selects }) => {
    const theme = useTheme();
    const [age, setAge] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const handleChange = (event) => {
        setAge(event.target.value);
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
    return (_jsx("div", { children: _jsx(CacheProvider, { value: cacheRtl, children: _jsx(ThemeProvider, { theme: theme, children: _jsxs(FormControl, { sx: { minWidth: "260px" }, children: [_jsx(InputLabel, { id: "demo-controlled-open-select-label", children: "\u0645\u0631\u062A\u0628 \u0633\u0627\u0632\u06CC \u0628\u0631 \u0627\u0633\u0627\u0633" }), _jsxs(Select, { labelId: "demo-controlled-open-select-label", id: "demo-controlled-open-select", open: open, onClose: handleClose, onOpen: handleOpen, value: age, label: "Age", onChange: handleChange, children: [_jsx(MenuItem, { dir: "rtl", value: "", children: _jsx("em", { children: "-" }) }), selects.map((val) => (_jsx(MenuItem, { dir: "rtl", value: val, children: val }, val)))] })] }) }) }) }));
};
export default SingleTextField;
