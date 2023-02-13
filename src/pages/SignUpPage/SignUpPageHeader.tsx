import { FC } from "react";
import LogoutButton from "../../components/Button/LogoutButton";
import WebpageHeader from "../../components/PageView/WebpageHeader";
import "./SignUpPageHeader.css";

const SignUpPageHeader: FC = () => {
  return (
    <WebpageHeader header="Sign Up Page">
      <LogoutButton />
    </WebpageHeader>
  );
};

export default SignUpPageHeader;
