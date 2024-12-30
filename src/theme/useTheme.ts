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

export const lightModeTheme = createTheme({
  palette: {
    mode: "light",
    ...lightPalette,
  },
  typography: typography,
});

export const darkModeTheme = createTheme({
  palette: {
    mode: "dark",
    ...darkPalette,
  },
  typography: typography,
});

const getTheme = (): Theme => {
  const dispatch = useDispatch<AppDispatch>();
  const settings = useSelector((state: RootState) => state.settings);

  const theme = useMemo(() => {
    if (settings.darkMode === null) {
      const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
      dispatch(setDarkMode(prefersDarkMode));
    }
    return settings.darkMode ? darkModeTheme : lightModeTheme;
  }, [settings.darkMode]);

  return responsiveFontSizes(theme, { factor: 4 });
};
export default getTheme;
