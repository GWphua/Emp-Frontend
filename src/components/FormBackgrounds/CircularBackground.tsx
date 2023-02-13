import { FC } from "react";
import { RootState } from "../../store";
import { useAppSelector } from "../../store/hooks";
import "./CircularBackground.css";

interface ICircularBackground {
  children: React.ReactNode;
}

const CircularBackground: FC<ICircularBackground> = ({ children }) => {
  const screenWidth = useAppSelector(
    (state: RootState) => state.screenSize.screenWidth
  );

  const screenHeight = useAppSelector(
    (state: RootState) => state.screenSize.screenHeight
  );

  // If viewport is too small, revert to box form.
  const formStyle =
    screenHeight < screenWidth ? "form__body__circle" : "form__body__box";

  return <div className={formStyle}>{children}</div>;
};

export default CircularBackground;
