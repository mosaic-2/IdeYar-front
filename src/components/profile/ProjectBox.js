import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Box, Typography, Tabs, Tab, useTheme, useMediaQuery, CircularProgress, } from "@mui/material";
import { getUserFunds } from "../../apis/userFundsApi.ts";
import { getUserProjects } from "../../apis/userProjectsApi";
import PostPreview from "../../pages/PreviewPage/PostPreview";
const CustomTab = ({ label, selected, ...props }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    return (_jsx(Tab, { label: _jsx(Typography, { variant: "body1", sx: {
                fontWeight: selected ? "bold" : "normal",
                color: selected ? "black" : "gray",
                fontSize: isSmallScreen ? "14px" : "16px",
                textTransform: "none",
                "&:hover": {
                    color: "black",
                },
            }, children: label }), ...props }));
};
const ProjectsBox = () => {
    const [tabValue, setTabValue] = useState(0);
    const [projects, setProjects] = useState([]);
    const [funds, setFunds] = useState([]);
    const [loading, setLoading] = useState(false);
    const fetchProjects = async () => {
        setLoading(true);
        try {
            const { posts } = await getUserProjects();
            setProjects(posts);
            console.log(posts);
        }
        catch (error) {
            console.error("Error fetching projects:", error);
        }
        finally {
            setLoading(false);
        }
    };
    const fetchFunds = async () => {
        setLoading(true);
        try {
            const { fundOverviews } = await getUserFunds();
            setFunds(fundOverviews);
        }
        catch (error) {
            console.error("Error fetching funds:", error);
        }
        finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (tabValue === 0) {
            fetchProjects();
        }
        else if (tabValue === 1) {
            fetchFunds();
        }
    }, [tabValue]);
    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };
    return (_jsxs(Box, { display: "flex", flexDirection: "column", alignItems: "center", p: 3, children: [_jsx(Box, { sx: {
                    width: "100%",
                    borderBottom: 1,
                    borderColor: "divider",
                    mb: 2,
                }, children: _jsxs(Tabs, { value: tabValue, onChange: handleChange, variant: "fullWidth", "aria-label": "Projects and Supports Tabs", sx: {
                        "& .MuiTabs-indicator": {
                            backgroundColor: "blue",
                            height: "3px",
                        },
                    }, children: [_jsx(CustomTab, { label: "\u067E\u0631\u0648\u0698\u0647 \u0647\u0627\u06CC \u0645\u0646", selected: tabValue === 0 }), _jsx(CustomTab, { label: "\u062D\u0645\u0627\u06CC\u062A \u0647\u0627\u06CC \u0645\u0646", selected: tabValue === 1 })] }) }), loading ? (_jsx(CircularProgress, {})) : tabValue === 0 ? (_jsx(Box, { p: 2, children: projects.length === 0 ? (_jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mt: 2, textAlign: "center" }, children: ".\u0634\u0645\u0627 \u0647\u06CC\u0686 \u067E\u0631\u0648\u0698\u0647 \u0627\u06CC \u0646\u062F\u0627\u0631\u06CC\u062F" })) : (projects.map((project, index) => (_jsx(PostPreview, { ...project }, index)))) })) : (_jsx(Box, { p: 2, children: funds.length === 0 ? (_jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mt: 2, textAlign: "center" }, children: ".\u0634\u0645\u0627 \u0627\u0632 \u0647\u06CC\u0686 \u067E\u0631\u0648\u0698\u0647 \u0627\u06CC \u062D\u0645\u0627\u06CC\u062A \u0646\u06A9\u0631\u062F\u06CC\u0646" })) : (funds.map((fund, index) => (_jsx(PostPreview, { ...fund.clearpost, fundRaised: fund.amount }, index)))) }))] }));
};
export default ProjectsBox;
