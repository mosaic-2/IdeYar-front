import { IconButton, SvgIcon } from "@mui/material";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../../store/settingsSlice";
import MoonIcon from "../../assets/Moon.svg?react";

const DarkModeButton = () => {
  const dispatch = useDispatch<AppDispatch>();
  const settings = useSelector((state: RootState) => state.settings);

  const handleClick = () => {
    dispatch(setDarkMode(!settings.darkMode));
  };

  return (
    <IconButton onClick={() => handleClick()} sx={{ padding: 0 }}>
      <SvgIcon
        component={MoonIcon}
        viewBox="0 0 20 20"
        sx={{ margin: 1, color: "button.tGrayFg" }}
      />
    </IconButton>
  );
};

export default DarkModeButton;
