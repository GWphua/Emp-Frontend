import { Employee } from "../../store/Employees/employeeType";
import "./CardContent.css";

type ICardContent = {
  employee: Employee;
};

const CardContent: React.FC<ICardContent> = ({ employee }) => {
  // Regex to add commas as thousands seperators.
  const showSalary = (salary: number): string => {
    return "$" + salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="content-display">
      <ul className="list-style">
        <li className="employee__name">{employee.name}</li>
        <li className="employee__details">{employee.department}</li>
        <li className="employee__details">{showSalary(employee.salary)}</li>
      </ul>
    </div>
  );
};

export default CardContent;
