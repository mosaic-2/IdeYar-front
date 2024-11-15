import { Box } from "@mui/material";
import StickyLeftLayout from "../layouts/StickyLeftLayout";
import ProfileBox from "./ProfileBox";
import ProjectBox from "./ProjectBox";

const Profile = () => {
  return (
    <StickyLeftLayout leftFrame={<ProfileBox />}>
      <Box width="100%" height="auto" sx={{ p: 2 }}>
        <ProjectBox />
      </Box>
    </StickyLeftLayout>
  );
};

export default Profile;
