import { ArrowCircleLeft } from "@mui/icons-material";
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { screenResize, ScreenState } from "../../store/screen";
import WebpageHeader from "../UI/WebpageHeader";

import "./EmployeeFormHeader.css";

const EmployeeFormHeader: FC = () => {
  const screenWidth = useSelector(
    (state: RootState) => state.screen.screenWidth
  );

 const dispatch: Dispatch<PayloadAction<ScreenState>> = useDispatch();

  window.addEventListener("resize", () => {
    const newState: ScreenState = {
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
