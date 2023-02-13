import { FC } from "react";
import WebpageHeader from "../../components/PageView/WebpageHeader";
import HomepageButton from "../../components/Button/HomepageButton";
import LogoutButton from "../../components/Button/LogoutButton";
import "./EmployeeFormHeader.css";

const EmployeeFormHeader: FC = () => {
  return (
    <WebpageHeader header="Employee Form">
      <HomepageButton />
      <LogoutButton />
    </WebpageHeader>
  );
};

export default EmployeeFormHeader;
