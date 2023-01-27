import { AddCircle } from "@mui/icons-material";
import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { screenResize } from "../../store/screen";
import WebpageHeader from "../UI/WebpageHeader";

import "./HomePageHeader.css";

const HomePageHeader: FC = () => {
  const screenWidth = useSelector(
    (state: RootState) => state.screen.screenWidth
  );

  const dispatch: Dispatch<PayloadAction<number>> = useDispatch();

  window.addEventListener("resize", () => {
    dispatch(screenResize(window.innerWidth));
  });

  return (
    <WebpageHeader header="Employees">
      <Link className="header__button-link" to="/employee-form">
        {screenWidth <= 899 ? (
          <AddCircle className="header__small-viewport" />
        ) : (
          <button type="button" className="header__add-button">
            <AddCircle />
            <strong>&nbsp;&nbsp;Add Employee</strong>
          </button>
        )}
      </Link>
    </WebpageHeader>
  );
};

export default HomePageHeader;
