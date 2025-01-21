import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Card, CardActions, CardContent, LinearProgress, Skeleton, Typography, } from "@mui/material";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useTranslation } from "react-i18next";
const calculateDifference = (end) => {
    const start = new Date();
    const diffMs = end.getTime() - start.getTime();
    // Convert to days and hours
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // Format the result in Persian
    return `${diffDays} روز و ${diffHours} ساعت`;
};
const ProjectSupport = ({ post, onSupportClick }) => {
    const { t } = useTranslation();
    const progress = post
        ? Math.min((post.fundRaised / post.minimumFund) * 100, 100)
        : 0;
    const formattedDate = post
        ? new Intl.DateTimeFormat("fa-IR", {
            dateStyle: "medium",
        }).format(new Date(post.deadlineDate))
        : "";
    const leftTime = post ? calculateDifference(new Date(post.deadlineDate)) : "";
    return (_jsxs(Card, { sx: {
            width: "100%",
            maxWidth: 300,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "xs",
            borderRadius: "15px",
            border: "1px solid",
            borderColor: "border.sGray",
            py: "10px",
        }, children: [_jsx(Box, { width: "100%", height: "50px", sx: {
                    borderBottom: "1px solid",
                    borderBottomColor: "border.sGray",
                }, alignContent: "center", justifyItems: "center", children: _jsx(Typography, { variant: "body1", color: "text.primary", fontWeight: "bold", children: t("supportThisProject") }) }), _jsx(CardContent, { sx: { flexGrow: 1, textAlign: "right", paddingX: 2, paddingY: 2 }, children: post ? (_jsxs(_Fragment, { children: [_jsx(Typography, { variant: "body2", color: "text.primary", fontWeight: "bold", children: t("goal") }), _jsx(Typography, { textAlign: "end", variant: "body2", color: "text.primary", sx: {
                                marginBottom: 1,
                                direction: "rtl",
                            }, children: post?.minimumFund.toLocaleString() + " تومان" }), _jsx(LinearProgress, { variant: "determinate", value: progress, sx: { height: 10, borderRadius: 5 } }), _jsx(Box, { width: "100%", display: "flex", mt: 0.5, children: _jsx(Typography, { textAlign: "start", width: "100%", variant: "body3", color: "brand.500", sx: {
                                    direction: "ltr",
                                }, children: progress.toFixed(2) + "%" }) }), _jsx(Typography, { variant: "body2", color: "text.primary", fontWeight: "bold", mt: 2, children: t("timeLeft") }), _jsx(Typography, { textAlign: "end", variant: "body2", color: "text.primary", sx: {
                                marginBottom: 1,
                                direction: "rtl",
                            }, children: leftTime }), _jsxs(Box, { justifyContent: "space-between", flexDirection: "row", display: "flex", mt: 4, sx: {
                                direction: "rtl",
                            }, children: [_jsx(Typography, { variant: "body2", color: "text.primary", fontWeight: "bold", children: t("startTime") }), _jsx(Typography, { variant: "body2", color: "text.primary", children: formattedDate })] })] })) : (_jsxs(_Fragment, { children: [_jsx(Skeleton, { variant: "rounded", sx: { width: "100%", height: "60px", my: 1 } }), _jsx(Skeleton, { variant: "rounded", sx: { width: "100%", height: "60px", my: 1 } }), _jsx(Skeleton, { variant: "rounded", sx: { width: "100%", height: "60px", my: 1 } })] })) }), _jsx(CardActions, { children: _jsx(Box, { sx: { width: "100%" }, children: _jsx(PrimaryButton, { text: t("support"), height: "40px", sx: { width: "100%" }, onClick: onSupportClick }) }) })] }));
};
export default ProjectSupport;
