import "./ViewPageHeader.css";

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
        <button onClick={handleAddEmployee}>Add Employee</button>
      </div>
    </div>
  );
}

export default ViewPageHeader;
