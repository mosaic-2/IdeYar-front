import { FC, SVGProps } from "react";
import BaseButtonWithIcon from "./BaseButtonWithIcon";
import { Typography } from "@mui/material";

interface Props {
  text?: string;
  badge?: string;
  leftIcon?: FC<SVGProps<SVGSVGElement>>;
  rightIcon?: FC<SVGProps<SVGSVGElement>>;
}

const SecondaryButton = ({ text, badge, leftIcon, rightIcon }: Props) => {
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
    >
      <Typography variant="buttonT3">{text}</Typography>
    </BaseButtonWithIcon>
  );
};

export default SecondaryButton;
