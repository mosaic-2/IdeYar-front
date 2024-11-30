import { IconButton, SvgIcon } from "@mui/material";
import UserIcon from "../../assets/User.svg?react";
import { useNavigate } from "react-router-dom";

const UserButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile");
  };

  return (
    <IconButton sx={{ padding: 0 }} onClick={handleClick}>
      <SvgIcon
        component={UserIcon}
        viewBox="0 0 20 20"
        sx={{ margin: 1, color: "button.tGrayFg" }}
      />
    </IconButton>
  );
};

export default UserButton;
