import { FC } from "react";
import LoginButton from "../../components/Button/LoginButton";
import WebpageHeader from "../../components/PageView/WebpageHeader";
import "./SignUpPageHeader.css";

const SignUpPageHeader: FC = () => {
  return (
    <WebpageHeader header="Sign Up Page">
      <LoginButton />
    </WebpageHeader>
  );
};

export default SignUpPageHeader;
