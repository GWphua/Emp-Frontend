import { Logout } from "@mui/icons-material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logout } from "../../store/Users/users";
import Button from "./Button";

const LogoutButton: FC = () => {
  const screenWidth = useAppSelector(
    (state: RootState) => state.screenSize.screenWidth
  );

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Button
      onClick={handleLogout}
      backgroundColor={screenWidth <= 899 ? "transparent" : "#D65B32"}
      hoverColor={screenWidth <= 899 ? "transparent" : "black"}
    >
      <Logout />
      {screenWidth > 899 && <strong>&nbsp;&nbsp;Logout</strong>}
    </Button>
  );
};

export default LogoutButton;
