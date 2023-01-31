import { AddCircle } from "@mui/icons-material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { screenResize, ScreenState } from "../../store/screen";
import WebpageHeader from "../UI/WebpageHeader";

import "./HomePageHeader.css";

const HomePageHeader: FC = () => {
  const screenWidth = useAppSelector(
    (state: RootState) => state.screen.screenWidth
  );

  const dispatch = useAppDispatch();

  window.addEventListener("resize", () => {
    const newState: ScreenState = {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    };
    dispatch(screenResize(newState));
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
