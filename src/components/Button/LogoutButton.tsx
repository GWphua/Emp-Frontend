import { logout } from "../../store/Users/users";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { LogoutToast } from "../Toast/UserToastTypes";
import Button from "./Button";
import { Logout } from "@mui/icons-material";

const LogoutButton: FC = () => {
  const screenWidth = useAppSelector(
    (state: RootState) => state.screenSize.screenWidth
  );

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    LogoutToast.showToast();
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
