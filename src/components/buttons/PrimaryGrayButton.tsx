import { FC, SVGProps } from "react";
import BaseButtonWithIcon from "./BaseButtonWithIcon";
import { SvgIconTypeMap, Typography } from "@mui/material";
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
  borderRadius?: string;
  onClick?: () => void;
}
const PrimaryGrayButton = ({
  text,
  badge,
  leftIcon,
  rightIcon,
  viewBox,
  width,
  height,
  borderRadius,
  onClick,
}: Props) => {
  return (
    <BaseButtonWithIcon
      badge={badge}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      sx={{
        width: width,
        height: height,
        paddingX: 1.5,
        border: 2,
        borderRadius: borderRadius,
        borderColor: "button.primaryGrayBd",
        bgcolor: "button.primaryGrayBg",
        color: "button.primaryGrayFg",
        "&:hover": {
          bgcolor: "button.primaryGrayBgHover",
        },
        "&:active": {
          bgcolor: "button.primaryGrayBgPressed",
        },
      }}
      viewBox={viewBox}
      onClick={onClick}
    >
      <Typography variant="buttonT3">{text}</Typography>
    </BaseButtonWithIcon>
  );
};

export default PrimaryGrayButton;
