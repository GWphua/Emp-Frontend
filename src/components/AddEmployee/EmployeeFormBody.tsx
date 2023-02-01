import { ChangeEvent, FC, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import {
  createEmployee,
  updateEmployee
} from "../../store/Employees/employees";
import { Employee } from "../../store/Employees/employeeType";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./EmployeeFormBody.css";

export interface EmployeeFormData {
  name: string;
  salary: number;
  department: "HR" | "PS";
}

const EmployeeFormBody: FC = () => {
  const [employee, setEmployee] = useState("");
  const [salary, setSalary] = useState(0);
  const [department, setDepartment] = useState<"HR" | "PS">("HR");

  const screenWidth = useAppSelector(
    (state: RootState) => state.screen.screenWidth
  );
  const screenHeight = useAppSelector(
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

  //TODO LATER
  const handleInvalidSubmission = () => {
    resetHandler();
  };

  const handleDepartmentChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "HR" || event.target.value === "PS") {
      setDepartment(event.target.value);
    } else {
      handleInvalidSubmission();
    }
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const formSettings = location.state as {
    mode: "Add" | "Edit";
    employee?: Employee;
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const employeeFormData = {
      name: employee,
      salary: salary,
      department: department,
    } as EmployeeFormData;

    if (formSettings.mode === "Add") {
      console.log("ADDING");
      
      await dispatch(createEmployee(employeeFormData));
    } else if (formSettings.mode === "Edit") {
      console.log("EDITING");

    const employeeUpdateData = {
      id: formSettings.employee!.id,
      employeeFormData: employeeFormData
    };

      await dispatch(updateEmployee(employeeUpdateData));
    }

    navigate("/");
  };

  const resetHandler = () => {
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
