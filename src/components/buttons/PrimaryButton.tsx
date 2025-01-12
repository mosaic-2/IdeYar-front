import { FC, SVGProps } from "react";
import BaseButtonWithIcon from "./BaseButtonWithIcon";
import { SvgIconTypeMap, SxProps, Theme, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface Props {
  text?: string;
  badge?: string;
  leftIcon?:
    | FC<SVGProps<SVGSVGElement>>
    | OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  rightIcon?:
    | FC<SVGProps<SVGSVGElement>>
    | OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  viewBox?: string;
  width?: string;
  height?: string;
  sx?: SxProps<Theme>;
  onClick?: () => void;
}
const PrimaryButton = ({
  text,
  badge,
  leftIcon,
  rightIcon,
  viewBox,
  width,
  height,
  sx,
  onClick,
}: Props) => {
  return (
    <BaseButtonWithIcon
      badge={badge}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      sx={{
        width: width ? width : "100%",
        height: height,
        paddingX: 1.5,
        bgcolor: "button.primaryBg",
        color: "button.primaryFg",
        "&:hover": {
          bgcolor: "button.primaryBgHover",
        },
        "&:active": {
          bgcolor: "button.primaryBgPressed",
        },
        ...sx,
      }}
      viewBox={viewBox}
      onClick={onClick}
    >
      <Typography variant="buttonT3">{text}</Typography>
    </BaseButtonWithIcon>
  );
};

export default PrimaryButton;
