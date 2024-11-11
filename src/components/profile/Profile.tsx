import { Box } from "@mui/material";
import StickyLeftLayout from "../layouts/StickyLeftLayout";
import ProfileBox from "./ProfileBox";

const Profile = () => {
  return (
    <StickyLeftLayout leftFrame={<ProfileBox />}>
      <Box width="100%" height="2400px" sx={{ bgcolor: "red" }} />
    </StickyLeftLayout>
  );
};

export default Profile;
