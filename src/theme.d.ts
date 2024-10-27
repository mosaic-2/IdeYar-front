import { TypographyVariants } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body3: React.CSSProperties;
    body4: React.CSSProperties;
    subtitle3: React.CSSProperties;
    caption3: React.CSSProperties;
    Strikethrough1: React.CSSProperties;
    buttonT3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
    body4?: React.CSSProperties;
    subtitle3?: React.CSSProperties;
    caption3?: React.CSSProperties;
    Strikethrough1?: React.CSSProperties;
    buttonT3?: React.CSSProperties;
  }

  interface Palette {
    tertiary: Palette["primary"];
    bg?: {
      primaryBrand: string;
    };
    border?: {
      sBrand: string;
      sGray: string;
    };
    button?: {
      tGrayFg: string;
      linkGrayFg: string;
      linkGrayFgHover: string;
      linkGrayFgPressed: string;
    };
    icon?: {
      fgGray: string;
    };
    brand?: {
      "25": string;
      "50": string;
      "100": string;
      "200": string;
      "300": string;
      "400": string;
      "500": string;
      "600": string;
      "700": string;
      "800": string;
      "900": string;
      "950": string;
    };
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
    bg?: {
      primaryBrand: string;
    };
    border?: {
      sBrand: string;
      sGray: string;
    };
    button?: {
      tGrayFg: string;
      linkGrayFg: string;
      linkGrayFgHover: string;
      linkGrayFgPressed: string;
    };
    icon?: {
      fgGray: string;
    };
    brand?: {
      "25": string;
      "50": string;
      "100": string;
      "200": string;
      "300": string;
      "400": string;
      "500": string;
      "600": string;
      "700": string;
      "800": string;
      "900": string;
      "950": string;
    };
  }

  interface TypeText {
    tertiary?: string;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
    body4: true;
    subtitle3: true;
    caption3: true;
    Strikethrough1: true;
    buttonT3: true;
  }
  interface TypographyPropsColorOverrides {
    tertiary: true;
  }
}
