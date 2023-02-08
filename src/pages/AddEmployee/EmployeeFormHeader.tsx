import { ArrowCircleLeft } from "@mui/icons-material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import WebpageHeader from "../../components/PageView/WebpageHeader";
import { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  screenResize,
  ScreenSizeState
} from "../../store/ScreenView/screenSize";

import { Button } from "../../components/Button/Button";
import "./EmployeeFormHeader.css";

const EmployeeFormHeader: FC = () => {
  const screenWidth = useAppSelector(
    (state: RootState) => state.screenSize.screenWidth
  );

  const dispatch = useAppDispatch();

  window.addEventListener("resize", () => {
    const newState: ScreenSizeState = {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    };
    dispatch(screenResize(newState));
  });

  const navigate = useNavigate();
  const handleBackToMainPage = () => {
    navigate("/");
  };
  return (
    <WebpageHeader header="Employee Form">
      {screenWidth <= 899 ? (
        <Button onClick={handleBackToMainPage}>
          <ArrowCircleLeft className="header__small-viewport" />
        </Button>
      ) : (
        <Button
          onClick={handleBackToMainPage}
          backgroundColor="green"
          hoverColor="black"
        >
          <ArrowCircleLeft />
          <strong>&nbsp;&nbsp;Homepage</strong>
        </Button>
      )}
    </WebpageHeader>
  );
};

export default EmployeeFormHeader;
