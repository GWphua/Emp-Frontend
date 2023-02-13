import { FC } from "react";
import LogoutButton from "../../components/Button/LogoutButton";
import WebpageHeader from "../../components/PageView/WebpageHeader";
import "./ErrorPageHeader.css";

const ErrorPageHeader: FC = () => {
  return (
    <WebpageHeader header="Routing Error">
      <LogoutButton />
    </WebpageHeader>
  );
};

export default ErrorPageHeader;
