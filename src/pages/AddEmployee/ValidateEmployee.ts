import { handleInvalidSubmission } from "../../components/Form/FormActionHandler";
import { EmployeeFormData } from "./EmployeeFormBody";

const isValidName = (name: string): boolean => {
  if (!name) {
    handleInvalidSubmission("Name cannot be empty!");
    return false;
  } else if (name.length < 4) {
    handleInvalidSubmission("Name should have a minimum of 4 characters!");
    return false;
  } else if (name.length > 30) {
    handleInvalidSubmission("Name should have a maximum of 30 characters!");
    return false;
  } else if (name.match(/\d/)) {
    handleInvalidSubmission("Name should not contain any numbers!");
    return false;
  }

  return true;
};

const isValidSalary = (salary: number): boolean => {
  if (salary <= 0) {
    handleInvalidSubmission("Salary cannot be equal or less than 0!");
    return false;
  }

  return true;
};

export const isValidEmployeeForm = (employeeFormData: EmployeeFormData): boolean => {
  const isValidFormName = isValidName(employeeFormData.name);
  const isValidFormSalary = isValidSalary(employeeFormData.salary);
  return isValidFormName && isValidFormSalary;
};
