import { AddCircle } from "@mui/icons-material";
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
import "./HomePageHeader.css";

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

  const navigate = useNavigate();
  const handleAddEmployee = () => {
    navigate("/employee-form", { state: { mode: "Add" } });
  };

  return (
    <WebpageHeader header="Employees">
      {screenWidth <= 899 ? (
        <Button onClick={handleAddEmployee}>
          <AddCircle className="header__small-viewport" />
        </Button>
      ) : (
        <Button
          onClick={handleAddEmployee}
          backgroundColor="green"
          hoverColor="black"
        >
          <AddCircle />
          <strong>&nbsp;&nbsp;Add Employee</strong>
        </Button>
      )}
    </WebpageHeader>
  );
};

export default HomePageHeader;
