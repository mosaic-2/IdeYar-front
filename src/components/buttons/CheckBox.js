import { jsx as _jsx } from "react/jsx-runtime";
import CheckIcon from "@mui/icons-material/Check";
const CheckBox = ({ isActive, onClick }) => {
    return (_jsx("div", { style: {
            width: "15px",
            height: "15px",
            boxShadow: "0 0 0 1px #d4d4d4",
            borderRadius: "1px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
        }, onClick: onClick, children: isActive && (_jsx(CheckIcon, { sx: {
                width: "15px",
                height: "15px",
                bgcolor: "brand.500",
                color: "white",
                borderRadius: "1px",
            } })) }));
};
export default CheckBox;
