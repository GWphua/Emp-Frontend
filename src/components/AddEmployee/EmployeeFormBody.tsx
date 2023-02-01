import { ChangeEvent, FC, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import {
  createEmployee,
  unselectEmployee,
  updateEmployee,
} from "../../store/Employees/employees";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./EmployeeFormBody.css";

export interface EmployeeFormData {
  name: string;
  salary: number;
  department: "HR" | "PS";
}

const EmployeeFormBody: FC = () => {
  const screenWidth = useAppSelector(
    (state: RootState) => state.screen.screenWidth
  );

  const screenHeight = useAppSelector(
    (state: RootState) => state.screen.screenHeight
  );

  const formStyle =
    screenHeight < screenWidth ? "form__body__circle" : "form__body__box";

  const employee = useAppSelector(
    (state: RootState) => state.employee.referencedEmployee
  );

  const defaultFormValues = {
    name: employee ? employee.name : "",
    salary: employee ? employee.salary : 0,
    department: employee ? employee.department : "HR",
  };

  const [name, setName] = useState(defaultFormValues.name);
  const [salary, setSalary] = useState(defaultFormValues.salary);
  const [department, setDepartment] = useState<"HR" | "PS">(
    defaultFormValues.department
  );

  const handleEmployeeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSalaryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSalary(+event.target.value);
  };

  const handleInvalidSubmission = () => {
    // Handle Invalid Submission here

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
  const { mode } = location.state;

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const employeeFormData = {
      name: name,
      salary: salary,
      department: department,
    } as EmployeeFormData;

    if (mode === "Add") {
      console.log("ADDING");

      await dispatch(createEmployee(employeeFormData));
    } else if (mode === "Edit") {
      console.log("EDITING");

      const employeeUpdateData = {
        id: employee!.id,
        employeeFormData: employeeFormData,
      };

      await dispatch(updateEmployee(employeeUpdateData));
    }

    dispatch(unselectEmployee);
    navigate("/");
  };

  const resetHandler = () => {
    setName(defaultFormValues.name);
    setSalary(defaultFormValues.salary);
    setDepartment(defaultFormValues.department);
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
            value={name}
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
