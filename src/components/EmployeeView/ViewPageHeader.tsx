import "./ViewPageHeader.css";
import { AddCircle } from "@mui/icons-material";

function ViewPageHeader() {
  const handleAddEmployee = () => {
    console.log("HELLO");
  };

  return (
    <div className="webpage-header">
      <div className="header__title">
        <h3>Employees</h3>
      </div>

      <div className="header__button-container">
        <button onClick={handleAddEmployee} className="header__add-button"><AddCircle />
        <strong>&nbsp;&nbsp;Add Employee</strong></button>
      </div>
    </div>
  );
}

export default ViewPageHeader;
