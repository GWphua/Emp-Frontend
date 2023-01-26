import "./EmployeeFormHeader.css";
import { FC } from "react";
import { Link } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import WebpageHeader from "../UI/WebpageHeader";

const EmployeeFormHeader: FC = () => {
  return (
    <WebpageHeader header="Employee Form">
      <Link className="header__button-link" to="/">
        <button type="button" className="header__back-button">
          <ArrowBack />
          <strong>&nbsp;&nbsp;Homepage</strong>
        </button>
      </Link>
    </WebpageHeader>
  );
};

export default EmployeeFormHeader;
