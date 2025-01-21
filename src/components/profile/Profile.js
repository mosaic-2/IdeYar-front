import { jsx as _jsx } from "react/jsx-runtime";
import { Box } from "@mui/material";
import StickyLeftLayout from "../layouts/StickyLeftLayout";
import ProfileBox from "./ProfileBox";
import ProjectBox from "./ProjectBox";
const Profile = () => {
    return (_jsx(StickyLeftLayout, { leftFrame: _jsx(ProfileBox, {}), children: _jsx(Box, { width: "100%", height: "auto", sx: { p: 2 }, children: _jsx(ProjectBox, {}) }) }));
};
export default Profile;
