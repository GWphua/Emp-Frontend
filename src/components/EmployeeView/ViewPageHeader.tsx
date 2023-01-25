import "./ViewPageHeader.css";
import { AddCircle } from "@mui/icons-material";
import { Button } from "@mui/material";

function ViewPageHeader() {
  const handleAddEmployee = () => {
    console.log("HELLO");
  };

  return (
    <div className="header">
      <div>
        <strong>Employees</strong>
      </div>

      <div>
        <Button onClick={handleAddEmployee} className="add-button"><AddCircle /> Add Employee</Button>
      </div>
    </div>
  );
}

export default ViewPageHeader;
