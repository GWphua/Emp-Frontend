import { AddCircle } from "@mui/icons-material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  screenResize,
  ScreenSizeState,
} from "../../store/ScreenView/screenSize";
import WebpageHeader from "../../components/PageView/WebpageHeader";

import "./HomePageHeader.css";
import { Button } from "../../components/Button/Button";

const HomePageHeader: FC = () => {
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

  return (
    <WebpageHeader header="Employees">
      <Link
        className="header__button-link"
        to="/employee-form"
        state={{ mode: "Add" }}
      >
        {screenWidth <= 899 ? (
          <AddCircle className="header__small-viewport" />
        ) : (
          <Button color="green">
            <AddCircle />
            <strong>&nbsp;&nbsp;Add Employee</strong>
          </Button>
        )}
      </Link>
    </WebpageHeader>
  );
};

export default HomePageHeader;
