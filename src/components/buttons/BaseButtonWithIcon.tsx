import {
  Button,
  Chip,
  SvgIcon,
  SvgIconTypeMap,
  SxProps,
  Theme,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { FC, ReactNode, SVGProps } from "react";

interface Props {
  children?: ReactNode;
  badge?: string;
  leftIcon?:
    | FC<SVGProps<SVGSVGElement>>
    | OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  rightIcon?:
    | FC<SVGProps<SVGSVGElement>>
    | OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  sx: SxProps<Theme>;
  viewBox?: string;
  onClick?: () => void;
}

const BaseButtonWithIcon = ({
  children,
  badge,
  leftIcon,
  rightIcon,
  sx,
  viewBox,
  onClick,
}: Props) => {
  return (
    <div dir="rtl">
      <Button sx={sx} onClick={onClick}>
        {rightIcon && (
          <SvgIcon
            component={rightIcon}
            viewBox={viewBox}
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
        {leftIcon && (
          <SvgIcon
            component={leftIcon}
            viewBox={viewBox}
            sx={{ marginRight: 1 }}
          />
        )}
      </Button>
    </div>
  );
};

export default BaseButtonWithIcon;
