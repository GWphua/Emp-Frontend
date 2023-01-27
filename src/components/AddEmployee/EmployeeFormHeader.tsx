import { ArrowCircleLeft } from "@mui/icons-material";
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { screenResize } from "../../store/screenData";
import WebpageHeader from "../UI/WebpageHeader";

import "./EmployeeFormHeader.css";

const EmployeeFormHeader: FC = () => {
  const screenWidth = useSelector(
    (state: RootState) => state.screen.screenWidth
  );

  const dispatch: Dispatch<PayloadAction<number>> = useDispatch();

  window.addEventListener("resize", () => {
    dispatch(screenResize(window.innerWidth));
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
