import { Login } from "@mui/icons-material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { useAppSelector } from "../../store/hooks";
import Button from "./Button";

const LoginButton: FC = () => {
  const screenWidth = useAppSelector(
    (state: RootState) => state.screenSize.screenWidth
  );

  const navigate = useNavigate();
  const login = () => {
    navigate("/");
  };

  return (
    <Button
      onClick={login}
      backgroundColor={screenWidth <= 899 ? "transparent" : "green"}
      hoverColor={screenWidth <= 899 ? "transparent" : "black"}
    >
      <Login />
      {screenWidth > 899 && <strong>&nbsp;&nbsp;Login</strong>}
    </Button>
  );
};

export default LoginButton;
