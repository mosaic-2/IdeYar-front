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
  onClick: () => void;
}

const SecondaryButton = ({
  text,
  badge,
  leftIcon,
  rightIcon,
  viewBox,
  width,
  height,
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
        color: "button.tGrayFg",
        "&:hover": {
          color: "button.tGrayFgHover",
        },
        "&:active": {
          color: "button.tGrayFgPressed",
        },
      }}
      viewBox={viewBox}
      onClick={onClick}
    >
      <Typography variant="buttonT3">{text}</Typography>
    </BaseButtonWithIcon>
  );
};

export default SecondaryButton;
