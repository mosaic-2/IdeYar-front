import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box } from "@mui/material";
import StickyLeftLayout from "../../components/layouts/StickyLeftLayout";
import ProjectSupport from "./ProjectSupport";
import ProjectTitles from "./ProjectTitles";
import ProjectBoard from "./ProjectBoard";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import usePost from "../../hooks/usePost";
import FundModal from "../../components/fund/FundModal";
const PostPage = () => {
    const { id } = useParams();
    const { post, postDetails, loading } = usePost(id ? parseInt(id) : 0);
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const sectionRefs = useRef([]);
    useEffect(() => {
        if (postDetails)
            sectionRefs.current = postDetails.map((_, i) => sectionRefs.current[i] ?? null);
    }, [postDetails]);
    const scrollToSection = (index) => {
        if (sectionRefs.current[index]) {
            sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(FundModal, { id: post ? post.id : 0, open: open, handleClose: handleClose }), _jsx(StickyLeftLayout, { leftFrame: _jsxs(Box, { flexDirection: "column", gap: 3, display: "flex", children: [_jsx(ProjectSupport, { post: post, onSupportClick: handleOpen }), _jsx(ProjectTitles, { titles: postDetails ? postDetails.map((d) => d.title) : [], onTitleClick: scrollToSection })] }), children: _jsx(ProjectBoard, { post: post, postDetails: postDetails, sectionRefs: sectionRefs }) })] }));
};
export default PostPage;
