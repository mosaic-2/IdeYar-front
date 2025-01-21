import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Stack } from "@mui/material";
import UploadImageButton from "../buttons/UploadImageButton";
const ImageUploadPart = ({ imagePreview, onChange }) => {
    return (_jsxs(Box, { children: [imagePreview && (_jsxs(_Fragment, { children: [_jsx(Box, { textAlign: "center", children: _jsx("img", { src: imagePreview, alt: "Selected", style: { maxWidth: "100%", maxHeight: "500px", borderRadius: 20 } }) }), _jsx(Stack, { sx: {
                            height: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                        }, children: _jsx(UploadImageButton, { onChange: onChange }) })] })), !imagePreview && (_jsx(Box, { bgcolor: "bg.secondary", sx: {
                    height: "500px",
                    mx: "10%",
                    borderRadius: 4,
                    border: 2,
                    borderColor: "border.sGray",
                }, children: _jsx(Stack, { sx: {
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                    }, children: _jsx(UploadImageButton, { onChange: onChange }) }) }))] }));
};
export default ImageUploadPart;
