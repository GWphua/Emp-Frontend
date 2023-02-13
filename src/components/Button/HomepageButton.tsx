import { ArrowCircleLeft } from "@mui/icons-material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { useAppSelector } from "../../store/hooks";
import Button from "./Button";

const HomepageButton: FC = () => {
  const screenWidth = useAppSelector(
    (state: RootState) => state.screenSize.screenWidth
  );

  const navigate = useNavigate();
  const handleBackToMainPage = () => {
    navigate("/");
  };

  return (
    <Button
      onClick={handleBackToMainPage}
      backgroundColor={screenWidth <= 899 ? "transparent" : "green"}
      hoverColor={screenWidth <= 899 ? "transparent" : "black"}
    >
      <ArrowCircleLeft />
      {screenWidth > 899 && <strong>&nbsp;&nbsp;Homepage</strong>}
    </Button>
  );
};

export default HomepageButton;
