import "./HomePageHeader.css";
import { AddCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import WebpageHeader from "../UI/WebpageHeader";

function HomePageHeader() {
  return (
    <WebpageHeader header="Employees">
      <Link className="header__button-link" to="/employee-form">
        <button type="button" className="header__add-button">
          <AddCircle />
          <strong>&nbsp;&nbsp;Add Employee</strong>
        </button>
      </Link>
    </WebpageHeader>
  );
}

export default HomePageHeader;
