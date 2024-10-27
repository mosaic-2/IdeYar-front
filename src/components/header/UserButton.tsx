import { IconButton, SvgIcon } from "@mui/material";
import UserIcon from "../../assets/User.svg?react";

const UserButton = () => {
  return (
    <IconButton sx={{ padding: 0 }}>
      <SvgIcon
        component={UserIcon}
        viewBox="0 0 20 20"
        sx={{ margin: 1, color: "button.tGrayFg" }}
      />
    </IconButton>
  );
};

export default UserButton;
