import { FC } from "react";
import "./WebpageHeader.css";

interface IHeader {
  children?: React.ReactNode;
  header: string;
}

const WebpageHeader: FC<IHeader> = ({ children, header }) => {
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
