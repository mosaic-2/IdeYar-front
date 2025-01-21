import { FC, SVGProps } from "react";
import { SvgIconTypeMap, SxProps, Theme } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
interface Props {
    text?: string;
    badge?: string;
    leftIcon?: FC<SVGProps<SVGSVGElement>> | OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    rightIcon?: FC<SVGProps<SVGSVGElement>> | OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    viewBox?: string;
    width?: string;
    height?: string;
    sx?: SxProps<Theme>;
    onClick?: () => void;
}
declare const PrimaryButton: ({ text, badge, leftIcon, rightIcon, viewBox, width, height, sx, onClick, }: Props) => import("react/jsx-runtime").JSX.Element;
export default PrimaryButton;
