import { FC } from "react";
import { useAppDispatch } from "../../store/hooks";
import {
  screenResize,
  ScreenSizeState,
} from "../../store/ScreenView/screenSize";
import "./WebpageHeader.css";

interface IHeader {
  children?: React.ReactNode;
  header: string;
}

const WebpageHeader: FC<IHeader> = ({ children, header }) => {
  const dispatch = useAppDispatch();

  window.addEventListener("resize", () => {
    const newState: ScreenSizeState = {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    };
    dispatch(screenResize(newState));
  });

  return (
    <div className="header">
      <div className="header__title">
        <h3>{header}</h3>
      </div>
      <div className="header__button-container">{children}</div>
    </div>
  );
};

export default WebpageHeader;
