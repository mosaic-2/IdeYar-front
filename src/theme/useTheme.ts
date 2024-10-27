import {
  createTheme,
  responsiveFontSizes,
  Theme,
  useMediaQuery,
} from "@mui/material";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { darkPalette, lightPalette } from "./colorPalette";
import { setDarkMode } from "../store/settingsSlice";
import typography from "./typography";

const getTheme = (): Theme => {
  const dispatch = useDispatch<AppDispatch>();
  const settings = useSelector((state: RootState) => state.settings);

  const theme = useMemo(() => {
    if (settings.darkMode === null) {
      const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
      dispatch(setDarkMode(prefersDarkMode));
    }
    return createTheme({
      palette: {
        mode: settings.darkMode ? "dark" : "light",
        ...(settings.darkMode ? darkPalette : lightPalette),
      },
      typography: typography,
    });
  }, [settings.darkMode]);

  return responsiveFontSizes(theme, { factor: 4 });
};
export default getTheme;
