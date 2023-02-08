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

import Button from "../../components/Button/Button";
import "./ErrorPageHeader.css";

const ErrorPageHeader: FC = () => {
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
    <WebpageHeader header="Routing Error">
      <Button
        onClick={handleBackToMainPage}
        backgroundColor={screenWidth <= 899 ? "transparent" : "green"}
        hoverColor={screenWidth <= 899 ? "transparent" : "black"}
      >
        <ArrowCircleLeft />
        {screenWidth > 899 && <strong>&nbsp;&nbsp;Homepage</strong>}
      </Button>
    </WebpageHeader>
  );
};

export default ErrorPageHeader;
