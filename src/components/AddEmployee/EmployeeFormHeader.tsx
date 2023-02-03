import { ArrowCircleLeft } from "@mui/icons-material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { screenResize, ScreenSizeState } from "../../store/ScreenView/screenSize";
import WebpageHeader from "../UI/PageView/WebpageHeader";

import "./EmployeeFormHeader.css";

const EmployeeFormHeader: FC = () => {
  const screenWidth = useAppSelector(
    (state: RootState) => state.screen.screenWidth
  );

  const dispatch = useAppDispatch();

  window.addEventListener("resize", () => {
    const newState: ScreenSizeState = {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    };
    dispatch(screenResize(newState));
  });

  console.log(screenWidth);
  return (
    <WebpageHeader header="Employee Form">
      <Link className="header__button-link" to="/">
        {screenWidth <= 899 ? (
          <ArrowCircleLeft className="header__small-viewport" />
        ) : (
          <button type="button" className="header__back-button">
            <ArrowCircleLeft />
            <strong>&nbsp;&nbsp;Homepage</strong>
          </button>
        )}
      </Link>
    </WebpageHeader>
  );
};

export default EmployeeFormHeader;
