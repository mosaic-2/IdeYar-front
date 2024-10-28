import { Button, Chip, SvgIcon, SxProps, Theme } from "@mui/material";
import { FC, ReactNode, SVGProps } from "react";

interface Props {
  children?: ReactNode;
  badge?: string;
  leftIcon?: FC<SVGProps<SVGSVGElement>>;
  rightIcon?: FC<SVGProps<SVGSVGElement>>;
  sx: SxProps<Theme>;
}

const BaseButtonWithIcon = ({
  children,
  badge,
  leftIcon,
  rightIcon,
  sx,
}: Props) => {
  return (
    <Button sx={sx}>
      {leftIcon && (
        <SvgIcon
          component={leftIcon}
          viewBox="0 0 20 20"
          sx={{ marginLeft: 1 }}
        />
      )}
      {badge && (
        <Chip
          label={badge}
          variant="outlined"
          color="primary"
          sx={{ marginX: 1 }}
        />
      )}
      {children}
      {rightIcon && (
        <SvgIcon
          component={rightIcon}
          viewBox="0 0 20 20"
          sx={{ marginRight: 1 }}
        />
      )}
    </Button>
  );
};

export default BaseButtonWithIcon;
