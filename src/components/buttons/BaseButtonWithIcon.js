import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Chip, SvgIcon, } from "@mui/material";
const BaseButtonWithIcon = ({ children, badge, leftIcon, rightIcon, sx, viewBox, onClick, }) => {
    return (_jsx("div", { dir: "rtl", children: _jsxs(Button, { sx: sx, onClick: onClick, children: [rightIcon && (_jsx(SvgIcon, { component: rightIcon, viewBox: viewBox, sx: { marginLeft: 1 } })), badge && (_jsx(Chip, { label: badge, variant: "outlined", color: "primary", sx: { marginX: 1 } })), children, leftIcon && (_jsx(SvgIcon, { component: leftIcon, viewBox: viewBox, sx: { marginRight: 1 } }))] }) }));
};
export default BaseButtonWithIcon;
