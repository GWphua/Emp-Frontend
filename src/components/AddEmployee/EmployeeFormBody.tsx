import { ChangeEvent, FC, FormEventHandler, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import "./EmployeeFormBody.css";

const EmployeeFormBody: FC = () => {
  const [employee, setEmployee] = useState("");
  const [salary, setSalary] = useState(0);
  const [department, setDepartment] = useState("HR");

  const screenWidth = useSelector((state: RootState) => state.screen.screenWidth);
  const screenHeight = useSelector((state: RootState) => state.screen.screenHeight);

  const formStyle =
    screenHeight < screenWidth
      ? "form__body__circle"
      : "form__body__box";

  const handleEmployeeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmployee(event.target.value);
  };
  const handleSalaryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSalary(+event.target.value);
  };
  const handleDepartmentChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setDepartment(event.target.value);
  };

  const submitHandler: FormEventHandler = (event) => {
    event.preventDefault();
  };

  const resetHandler: FormEventHandler = () => {
    setEmployee("");
    setSalary(0);
    setDepartment("HR");
  };

  return (
    <div className={formStyle}>
      <form onSubmit={submitHandler} onReset={resetHandler}>
        <div className="title">Create Employee</div>
        <div className="subtitle">Enter Employee details below!</div>
        <div className="input-container">
          <label>Employee Name</label>
          <input
            type="text"
            onChange={handleEmployeeChange}
            value={employee}
          ></input>
        </div>
        <div className="input-container">
          <label>Salary</label>
          <input
            type="number"
            min="0"
            onChange={handleSalaryChange}
            value={salary}
          ></input>
        </div>
        <div className="input-container">
          <label>Department</label>
          <select onChange={handleDepartmentChange} value={department}>
            <option>HR</option>
            <option>PS</option>
          </select>
        </div>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
};

export default EmployeeFormBody;
