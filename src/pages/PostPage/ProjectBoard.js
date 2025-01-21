import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, CardMedia, Typography } from "@mui/material";
const ProjectBoard = ({ post, postDetails, sectionRefs }) => {
    const updateTime = post
        ? new Intl.DateTimeFormat("fa-IR", {
            dateStyle: "full",
            timeStyle: "short",
        }).format(new Date(post.createdAt))
        : "";
    return (_jsxs(Box, { width: "95%", mt: 3, flexDirection: "column", sx: {
            direction: "rtl",
        }, gap: 3, display: "flex", children: [_jsx(CardMedia, { component: "img", image: `https://back.ideyar-app.ir/api/image/${post?.image}`, alt: post?.title, sx: {
                    width: "100%",
                    maxHeight: "600px",
                    borderRadius: "15px",
                } }), _jsxs(Box, { width: "100%", children: [_jsx(Typography, { variant: "h6", fontWeight: "bold", color: "text.primary", children: post?.title }), _jsxs(Box, { display: "flex", flexDirection: "row", justifyContent: "space-between", children: [_jsx(Typography, { variant: "body3", fontWeight: "bold", color: "text.secondary", children: post?.description }), _jsx(Typography, { variant: "body3", color: "text.secondary", fontWeight: "bold", children: "آخرین بروز رسانی " + updateTime })] })] }), _jsx(Box, { width: "100%", children: postDetails?.map((detail, index) => (_jsxs(Box, { ref: (el) => (sectionRefs.current[index] = el), display: "flex", flexDirection: "column", py: 2, children: [_jsx(Typography, { variant: "body1", fontWeight: "bold", color: "text.primary", children: detail.title }), _jsx(Typography, { variant: "body3", fontWeight: "bold", color: "text.secondary", mb: 2, children: detail.description }), detail.image && (_jsx(CardMedia, { component: "img", image: `https://back.ideyar-app.ir/api/image/${detail.image}`, alt: detail.title, sx: {
                                width: "100%",
                                maxHeight: "600px",
                                borderRadius: "15px",
                            } }))] }, index))) })] }));
};
export default ProjectBoard;
