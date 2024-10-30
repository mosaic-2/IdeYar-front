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
}

const SecondaryButton = ({
  text,
  badge,
  leftIcon,
  rightIcon,
  viewBox,
}: Props) => {
  return (
    <BaseButtonWithIcon
      badge={badge}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      sx={{
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
    >
      <Typography variant="buttonT3">{text}</Typography>
    </BaseButtonWithIcon>
  );
};

export default SecondaryButton;
