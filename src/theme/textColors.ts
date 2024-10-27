import { grayDarkMode, grayLightMode, white } from "./colors";

export interface TextColor {
  primary: string;
  secondary: string;
  tertiary: string;
}

export const textColorLightMode: TextColor = {
  primary: grayLightMode[900],
  secondary: grayLightMode[700],
  tertiary: grayLightMode[600],
};

export const textColorDarkMode: TextColor = {
  primary: white,
  secondary: grayDarkMode[200],
  tertiary: grayDarkMode[300],
};
