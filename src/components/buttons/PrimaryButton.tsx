import { FC, SVGProps } from "react";
import BaseButtonWithIcon from "./BaseButtonWithIcon";
import { Typography } from "@mui/material";

interface Props {
  text?: string;
  badge?: string;
  leftIcon?: FC<SVGProps<SVGSVGElement>>;
  rightIcon?: FC<SVGProps<SVGSVGElement>>;
}
const PrimaryButton = ({ text, badge, leftIcon, rightIcon }: Props) => {
  return (
    <BaseButtonWithIcon
      badge={badge}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      sx={{
        paddingX: 1.5,
        bgcolor: "button.primaryBg",
        color: "button.primaryFg",
        "&:hover": {
          bgcolor: "button.primaryBgHover",
        },
        "&:active": {
          bgcolor: "button.primaryBgPressed",
        },
      }}
    >
      <Typography variant="buttonT3">{text}</Typography>
    </BaseButtonWithIcon>
  );
};

export default PrimaryButton;
