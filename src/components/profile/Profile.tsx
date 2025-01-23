import { Box, Grid } from "@mui/material";
import ProfileBox from "./ProfileBox";
import ProjectBox from "./ProjectBox";

const Profile = () => {
  return (
    <Box width="100%" height="auto" sx={{ display: "flex", p: 2 }}>
      {/* Left side: ProfileBox */}
      <Box sx={{ flex: 1, p: 2 }}>
        <ProfileBox />
      </Box>

      {/* Right side: ProjectBox */}
      <Box sx={{ flex: 2, p: 2 }}>
        <ProjectBox />
      </Box>
    </Box>
  );
};

export default Profile;
