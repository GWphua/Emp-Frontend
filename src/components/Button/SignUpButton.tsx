import { AppRegistration } from "@mui/icons-material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { useAppSelector } from "../../store/hooks";
import Button from "./Button";

const SignUpButton: FC = () => {
  const screenWidth = useAppSelector(
    (state: RootState) => state.screenSize.screenWidth
  );

  const navigate = useNavigate();
  const signUp = () => {
    navigate("/signup");
  };

  return (
    <Button
      onClick={signUp}
      backgroundColor={screenWidth <= 899 ? "transparent" : "#D65B32"}
      hoverColor={screenWidth <= 899 ? "transparent" : "black"}
    >
      <AppRegistration />
      {screenWidth > 899 && <strong>&nbsp;&nbsp;Sign Up</strong>}
    </Button>
  );
};

export default SignUpButton;
