import { PaletteOptions } from "@mui/material";
import { textColorDarkMode, textColorLightMode } from "./textColors";
import { brand, error, grayDarkMode, grayLightMode, white } from "./colors";

export const lightPalette: PaletteOptions = {
  background: { default: white },
  text: {
    primary: textColorLightMode.primary,
    secondary: textColorLightMode.secondary,
    tertiary: textColorLightMode.tertiary,
  },
  bg: {
    primaryBrand: brand[50],
  },
  border: {
    sBrand: brand[300],
    sGray: grayLightMode[300],
  },
  button: {
    tGrayFg: grayLightMode[600],
    linkGrayFg: grayLightMode[700],
    linkGrayFgHover: grayLightMode[800],
    linkGrayFgPressed: grayLightMode[600],
  },
  icon: {
    fgGray: grayLightMode[600],
  },
  brand: {
    "25": brand[25],
    "50": brand[50],
    "100": brand[100],
    "200": brand[200],
    "300": brand[300],
    "400": brand[400],
    "500": brand[500],
    "600": brand[600],
    "700": brand[700],
    "800": brand[800],
    "900": brand[900],
    "950": brand[950],
  },
  error: {
    "50": error[50],
    "100": error[100],
    "200": error[200],
    "300": error[300],
    "400": error[400],
    "500": error[500],
    "600": error[600],
    "700": error[700],
    "800": error[800],
    "900": error[900],
  },
};

export const darkPalette: PaletteOptions = {
  background: { default: grayDarkMode[950] },
  text: {
    primary: textColorDarkMode.primary,
    secondary: textColorDarkMode.secondary,
    tertiary: textColorDarkMode.tertiary,
  },
  bg: {
    primaryBrand: brand[950],
  },
  border: {
    sBrand: brand[700],
    sGray: grayDarkMode[700],
  },
  button: {
    tGrayFg: grayDarkMode[300],
    linkGrayFg: grayDarkMode[400],
    linkGrayFgHover: grayDarkMode[200],
    linkGrayFgPressed: grayDarkMode[100],
  },
  icon: {
    fgGray: grayDarkMode[300],
  },
  brand: {
    "25": brand[25],
    "50": brand[50],
    "100": brand[100],
    "200": brand[200],
    "300": brand[300],
    "400": brand[400],
    "500": brand[500],
    "600": brand[600],
    "700": brand[700],
    "800": brand[800],
    "900": brand[900],
    "950": brand[950],
  },
  error: {
    "50": error[50],
    "100": error[100],
    "200": error[200],
    "300": error[300],
    "400": error[400],
    "500": error[500],
    "600": error[600],
    "700": error[700],
    "800": error[800],
    "900": error[900],
  },
};
