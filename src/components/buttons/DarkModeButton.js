import { jsx as _jsx } from "react/jsx-runtime";
import { IconButton, SvgIcon } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../../store/settingsSlice";
import MoonIcon from "../../assets/Moon.svg?react";
const DarkModeButton = () => {
    const dispatch = useDispatch();
    const settings = useSelector((state) => state.settings);
    const handleClick = () => {
        dispatch(setDarkMode(!settings.darkMode));
    };
    return (_jsx(IconButton, { onClick: () => handleClick(), sx: { padding: 0 }, children: _jsx(SvgIcon, { component: MoonIcon, viewBox: "0 0 20 20", sx: { margin: 1, color: "button.tGrayFg" } }) }));
};
export default DarkModeButton;
