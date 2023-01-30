import { ChangeEvent, FC, FormEventHandler, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import "./EmployeeFormBody.css";

const EmployeeFormBody: FC = () => {
  const [employee, setEmployee] = useState("");
  const [salary, setSalary] = useState(0);
  const [department, setDepartment] = useState("HR");

  const screenWidth = useSelector(
    (state: RootState) => state.screen.screenWidth
  );
  const screenHeight = useSelector(
    (state: RootState) => state.screen.screenHeight
  );

  const formStyle =
    screenHeight < screenWidth ? "form__body__circle" : "form__body__box";

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
        <div className="form__title">Create Employee</div>
        <div className="form__subtitle">Enter Employee details below!</div>
        <div className="form__input-container">
          <label>Employee Name</label>
          <input
            type="text"
            className="form__input"
            onChange={handleEmployeeChange}
            value={employee}
          ></input>
        </div>
        <div className="form__input-container">
          <label>Salary</label>
          <input
            type="number"
            min="0"
            onChange={handleSalaryChange}
            value={salary}
            className="form__input"
          ></input>
        </div>
        <div className="form__input-container">
          <label>Department</label>
          <select
            onChange={handleDepartmentChange}
            value={department}
            className="form__input"
          >
            <option>HR</option>
            <option>PS</option>
          </select>
        </div>
        <div className="form__button-container">
          <button type="reset" className="form__reset">
            Reset
          </button>
          <button type="submit" className="form__submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeFormBody;
