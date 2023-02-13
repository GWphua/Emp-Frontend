import { FC } from "react";
import SignUpButton from "../../components/Button/SignUpButton";
import WebpageHeader from "../../components/PageView/WebpageHeader";
import "./LoginPageHeader.css";

const LoginPageHeader: FC = () => {
  return (
    <WebpageHeader header="Log In Page">
      <SignUpButton />
    </WebpageHeader>
  );
};

export default LoginPageHeader;
