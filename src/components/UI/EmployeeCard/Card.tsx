import React from "react";

import "./Card.css";
import ActionsButton from "./ActionsButton";
import CardContent from "./CardContent";
import { Employee } from "../../../store/Employees/employeeType";

interface ICard {
  employee: Employee;
}

const EmployeeCard: React.FC<ICard> = ({ employee }) => {
  return (
    <div className="employee__card">
      <CardContent employee={employee} />
      <ActionsButton employee={employee} />
    </div>
  );
};

export default EmployeeCard;
