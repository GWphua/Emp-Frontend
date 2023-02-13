import { Logout } from "@mui/icons-material";
import { FC } from "react";
import { RootState } from "../../store";
import { useAppSelector } from "../../store/hooks";
import Button from "./Button";

const LogoutButton: FC = () => {
  const screenWidth = useAppSelector(
    (state: RootState) => state.screenSize.screenWidth
  );

  return (
    <Button
      onClick={() => console.log("Logging out")}
      backgroundColor={screenWidth <= 899 ? "transparent" : "#D65B32"}
      hoverColor={screenWidth <= 899 ? "transparent" : "black"}
    >
      <Logout />
      {screenWidth > 899 && <strong>&nbsp;&nbsp;Logout</strong>}
    </Button>
  );
};

export default LogoutButton;
