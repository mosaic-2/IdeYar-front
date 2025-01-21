import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container, Typography, Box, Grid, Link, IconButton, } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShareIcon from "@mui/icons-material/Share"; // Replaced icon
import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ContactMailIcon from "@mui/icons-material/ContactMail";
const Footer = () => {
    return (_jsx(Box, { component: "footer", sx: {
            direction: "rtl",
            py: 6,
            px: 2,
            mt: "auto",
            bgcolor: "bg.primaryBrand",
            color: "text.secondary",
            borderTop: 2,
            borderColor: "border.sBrand",
        }, children: _jsxs(Container, { maxWidth: "lg", children: [_jsxs(Grid, { container: true, spacing: 4, children: [_jsxs(Grid, { item: true, xs: 12, sm: 4, children: [_jsxs(Box, { sx: { display: "flex", alignItems: "center", mb: 2 }, children: [_jsx(BusinessIcon, { sx: { ml: 1, fontSize: 30 } }), _jsx(Typography, { variant: "h6", component: "div", sx: {
                                                fontWeight: "bold",
                                            }, children: "\u062F\u0631\u0628\u0627\u0631\u0647 \u0627\u06CC\u062F\u0647 \u06CC\u0627\u0631" })] }), _jsx(Typography, { variant: "body2", sx: {
                                        textAlign: "justify",
                                        lineHeight: 1.6,
                                    }, children: "\u0627\u06CC\u062F\u0647 \u06CC\u0627\u0631 \u06CC\u06A9 \u067E\u0644\u062A\u0641\u0631\u0645 \u062D\u0645\u0627\u06CC\u062A \u0627\u0632 \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u062E\u0644\u0627\u0642\u0627\u0646\u0647 \u0627\u0633\u062A \u06A9\u0647 \u0628\u0647 \u0634\u0645\u0627 \u0627\u0645\u06A9\u0627\u0646 \u0645\u06CC\u200C\u062F\u0647\u062F \u062A\u0627 \u0627\u06CC\u062F\u0647\u200C\u0647\u0627\u06CC \u062E\u0648\u062F \u0631\u0627 \u0628\u0647 \u062C\u0627\u0645\u0639\u0647\u200C\u0627\u06CC \u0627\u0632 \u062D\u0627\u0645\u06CC\u0627\u0646 \u0645\u062A\u0639\u0647\u062F \u0645\u0639\u0631\u0641\u06CC \u06A9\u0646\u06CC\u062F. \u0645\u0627 \u0628\u0627 \u0641\u0631\u0627\u0647\u0645 \u06A9\u0631\u062F\u0646 \u0628\u0633\u062A\u0631\u06CC \u0627\u0645\u0646 \u0648 \u0642\u0627\u0628\u0644 \u0627\u0639\u062A\u0645\u0627\u062F\u060C \u0628\u0647 \u062E\u0644\u0627\u0642\u0627\u0646 \u0648 \u062D\u0627\u0645\u06CC\u0627\u0646 \u06A9\u0645\u06A9 \u0645\u06CC\u200C\u06A9\u0646\u06CC\u0645 \u062A\u0627 \u0628\u0627 \u0647\u0645 \u0647\u0645\u06A9\u0627\u0631\u06CC \u06A9\u0646\u0646\u062F \u0648 \u067E\u0631\u0648\u0698\u0647\u200C\u0647\u0627\u06CC \u0646\u0648\u0622\u0648\u0631\u0627\u0646\u0647 \u0631\u0627 \u0628\u0647 \u0648\u0627\u0642\u0639\u06CC\u062A \u062A\u0628\u062F\u06CC\u0644 \u0646\u0645\u0627\u06CC\u0646\u062F." })] }), _jsxs(Grid, { item: true, xs: 12, sm: 4, children: [_jsxs(Box, { sx: { display: "flex", alignItems: "center", mb: 2 }, children: [_jsx(ContactMailIcon, { sx: { ml: 1, fontSize: 30 } }), _jsx(Typography, { variant: "h6", component: "div", sx: {
                                                fontWeight: "bold",
                                            }, children: "\u062A\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627" })] }), _jsxs(Box, { sx: { textAlign: "left", fontFamily: "Vazir, Arial, sans-serif" }, children: [_jsxs(Typography, { variant: "body2", sx: {
                                                display: "flex",
                                                alignItems: "center",
                                                mb: 1.5,
                                                lineHeight: 1.6,
                                            }, children: [_jsx(EmailIcon, { sx: { ml: 1 } }), _jsx(Link, { href: "mailto:info@ideeyar.com", color: "inherit", underline: "hover", sx: { fontSize: "0.95rem" }, children: "info@ideeyar.com" })] }), _jsxs(Typography, { variant: "body2", sx: {
                                                display: "flex",
                                                alignItems: "center",
                                                lineHeight: 1.6,
                                            }, children: [_jsx(PhoneIcon, { sx: { ml: 1 } }), _jsx(Link, { href: "tel:+981234567890", color: "inherit", underline: "hover", sx: { fontSize: "0.95rem" }, children: "\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9\u06F0" })] })] })] }), _jsxs(Grid, { item: true, xs: 12, sm: 4, children: [_jsxs(Box, { sx: { display: "flex", alignItems: "center", mb: 2 }, children: [_jsx(ShareIcon, { sx: { ml: 1, fontSize: 30 } }), _jsx(Typography, { variant: "h6", component: "div", sx: {
                                                fontWeight: "bold",
                                            }, children: "\u0645\u0627 \u0631\u0627 \u062F\u0631 \u0634\u0628\u06A9\u0647\u200C\u0647\u0627\u06CC \u0627\u062C\u062A\u0645\u0627\u0639\u06CC \u062F\u0646\u0628\u0627\u0644 \u06A9\u0646\u06CC\u062F" })] }), _jsxs(Box, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [_jsxs(IconButton, { component: "a", href: "https://www.facebook.com/ideeyar", target: "_blank", rel: "noopener", color: "inherit", "aria-label": "Facebook", sx: {
                                                "&:hover": {
                                                    color: "primary.light",
                                                },
                                            }, children: [_jsx(FacebookIcon, { fontSize: "large" }), _jsx(Typography, { sx: { display: { xs: "none", sm: "block" }, ml: 1 }, children: "\u0641\u06CC\u0633\u0628\u0648\u06A9" })] }), _jsxs(IconButton, { component: "a", href: "https://twitter.com/ideeyar", target: "_blank", rel: "noopener", color: "inherit", "aria-label": "Twitter", sx: {
                                                "&:hover": {
                                                    color: "primary.light",
                                                },
                                            }, children: [_jsx(TwitterIcon, { fontSize: "large" }), _jsx(Typography, { sx: { display: { xs: "none", sm: "block" }, ml: 1 }, children: "\u062A\u0648\u06CC\u06CC\u062A\u0631" })] }), _jsxs(IconButton, { component: "a", href: "https://www.instagram.com/ideeyar", target: "_blank", rel: "noopener", color: "inherit", "aria-label": "Instagram", sx: {
                                                "&:hover": {
                                                    color: "primary.light",
                                                },
                                            }, children: [_jsx(InstagramIcon, { fontSize: "large" }), _jsx(Typography, { sx: { display: { xs: "none", sm: "block" }, ml: 1 }, children: "\u0627\u06CC\u0646\u0633\u062A\u0627\u06AF\u0631\u0627\u0645" })] })] })] })] }), _jsx(Box, { sx: {
                        borderTop: "1px solid rgba(255, 255, 255, 0.3)",
                        my: 4,
                    } }), _jsxs(Typography, { variant: "body2", align: "center", sx: { opacity: 0.8 }, children: ["\u00A9 ", new Date().getFullYear(), " \u0627\u06CC\u062F\u0647 \u06CC\u0627\u0631. \u062A\u0645\u0627\u0645\u06CC \u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638 \u0627\u0633\u062A."] })] }) }));
};
export default Footer;
