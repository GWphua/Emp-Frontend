import { ChangeEvent, FC, FormEventHandler, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import CircularBackground from "../../components/Form/CircularBackground";
import { handleInvalidSubmission } from "../../components/Form/FormActionHandler";

import { InfoToast } from "../../components/Toast/ToastTypes";
import { RootState } from "../../store";
import {
  createEmployee,
  unselectEmployee,
  updateEmployee
} from "../../store/Employees/employees";
import { EmployeeDepartmentType } from "../../store/Employees/employeeType";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./EmployeeFormBody.css";
import { isValidEmployeeForm } from "./ValidateEmployee";

export interface EmployeeFormData {
  name: string;
  salary: number;
  department: EmployeeDepartmentType;
}

const EmployeeFormBody: FC = () => {
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
  const [department, setDepartment] = useState<EmployeeDepartmentType>(
    defaultFormValues.department
  );

  const handleEmployeeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSalaryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSalary(+event.target.value);
  };

  const handleDepartmentChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value !== "HR" && event.target.value !== "PS") {
      handleInvalidSubmission("Department values can only be 'HR' or 'PS'");
      return;
    }

    setDepartment(event.target.value);
  };

  const notEdited = (employeeFormData: EmployeeFormData): boolean => {
    return (
      employeeFormData.name === defaultFormValues.name &&
      employeeFormData.salary === defaultFormValues.salary &&
      employeeFormData.department === defaultFormValues.department
    );
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { mode } = location.state;

  const submitHandler: FormEventHandler<HTMLElement> = async (event) => {
    event.preventDefault();

    const employeeFormData = {
      name: name.trim(),
      salary: salary,
      department: department,
    } as EmployeeFormData;

    if (!isValidEmployeeForm(employeeFormData)) {
      return;
    }
    
    if (mode === "Add") {
      await dispatch(createEmployee(employeeFormData));
    } else if (mode === "Edit") {
      if (notEdited(employeeFormData)) {
        handleInvalidSubmission("Edit fields are unchanged!");
        return;
      }

      const employeeUpdateData = {
        id: employee!.id,
        employeeFormData: employeeFormData,
      };

      await dispatch(updateEmployee(employeeUpdateData));
    }

    dispatch(unselectEmployee);
    navigate("/homepage");
  };

  const resetHandler = () => {
    setName(defaultFormValues.name);
    setSalary(defaultFormValues.salary);
    setDepartment(defaultFormValues.department);
    InfoToast.showToast("Form Reset");
  };

  return (
    <CircularBackground>
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
          <Button
            buttonType="reset"
            backgroundColor="rgb(221, 0, 214)"
            onClick={() => {}}
          >
            Reset
          </Button>
          <Button
            buttonType="submit"
            backgroundColor="rgb(0, 151, 221)"
            onClick={() => {}}
          >
            Submit
          </Button>
        </div>
      </form>
    </CircularBackground>
  );
};

export default EmployeeFormBody;
