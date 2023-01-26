import "./HomePageHeader.css";
import { AddCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

function HomePageHeader() {
  return (
    <div className="webpage-header">
      <div className="header__title">
        <h3>Employees</h3>
      </div>
      <div className="header__button-container">
        <Link className="header__button-link" to="/employee-form">
          <button type="button" className="header__add-button">
            <AddCircle />
            <strong>&nbsp;&nbsp;Add Employee</strong>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePageHeader;
