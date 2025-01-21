import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardMedia, CardContent, Typography, LinearProgress, Box, } from "@mui/material";
import PrimaryButton from "../buttons/PrimaryButton";
const ProjectCard = ({ id, title, description, imageUrl = "https://via.placeholder.com/400x200", amountPaid, amountGoal, userName, }) => {
    const progress = Math.min((amountPaid / amountGoal) * 100, 100);
    const handleCardClick = () => {
        window.location.href = `http://localhost:3000/post/${id}`;
    };
    return (_jsxs(Card, { onClick: handleCardClick, sx: {
            pb: 2,
            minWidth: "300px",
            height: "450px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: 2,
            alignItems: "center",
            bgcolor: "bg.primary",
            // Add a pointer cursor and a smooth box-shadow transition
            cursor: "pointer",
            transition: "box-shadow 0.3s ease-in-out",
            "&:hover": {
                boxShadow: 6, // e.g., theme.shadows[6] or a custom shadow
            },
        }, children: [_jsx(CardMedia, { dir: "rtl", component: "img", sx: { minHeight: "180px", maxHeight: "100px" }, image: imageUrl
                    ? `https://back.ideyar-app.ir/api/image/${imageUrl}`
                    : "https://via.placeholder.com/400x200", alt: title }), _jsxs(CardContent, { sx: { flexGrow: 1, textAlign: "right", width: "100%" }, children: [_jsx(Typography, { variant: "h5", component: "div", gutterBottom: true, sx: {
                            marginBottom: 1,
                        }, children: title }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: {
                            marginBottom: 2,
                            mt: 1,
                            textAlign: "justify",
                        }, children: userName }), _jsxs(Box, { sx: { mb: 1 }, children: [_jsxs(Typography, { variant: "body2", color: "text.primary", sx: {
                                    marginBottom: 1,
                                }, children: ["\u0645\u0628\u0644\u063A \u067E\u0631\u062F\u0627\u062E\u062A \u0634\u062F\u0647: ", amountPaid.toLocaleString(), " \u062A\u0648\u0645\u0627\u0646"] }), _jsxs(Typography, { variant: "body2", color: "text.primary", sx: {
                                    marginBottom: 1,
                                }, children: ["\u0645\u0628\u0644\u063A \u0647\u062F\u0641: ", amountGoal.toLocaleString(), " \u062A\u0648\u0645\u0627\u0646"] })] }), _jsx(LinearProgress, { variant: "determinate", value: progress, sx: { height: 10, borderRadius: 5, mb: 1 } }), _jsxs(Typography, { variant: "caption", color: "text.secondary", sx: {
                            textAlign: "right",
                        }, children: [progress.toFixed(2), "% \u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F\u0647"] })] }), _jsx(PrimaryButton, { text: "\u0645\u0634\u0627\u0647\u062F\u0647 \u067E\u0631\u0648\u0698\u0647", width: "250px" })] }));
};
export default ProjectCard;
