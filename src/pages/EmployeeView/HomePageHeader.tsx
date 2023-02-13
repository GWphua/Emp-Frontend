import { FC } from "react";
import AddEmployeeButton from "../../components/Button/AddEmployeeButton";
import LogoutButton from "../../components/Button/LogoutButton";
import WebpageHeader from "../../components/PageView/WebpageHeader";
import "./HomePageHeader.css";

const HomePageHeader: FC = () => {
  return (
    <WebpageHeader header="Employees">
      <AddEmployeeButton />
      <LogoutButton />
    </WebpageHeader>
  );
};

export default HomePageHeader;
