import React from "react";

import "./Card.css";
import ActionsButton from "./ActionsButton";
import CardContent from "./CardContent";
import { Employee } from "../../../store/Employees/employeeType";
import { useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store";

interface ICard {
  employee: Employee;
  openDeleteEmployeeModal: (employee: Employee) => void;
}

const EmployeeCard: React.FC<ICard> = ({
  employee,
  openDeleteEmployeeModal,
}) => {
  const selectedEmployee = useAppSelector(
    (state: RootState) => state.employee.referencedEmployee
  );

  return (
    <div
      className={`employee__card ${
        selectedEmployee === employee ? "selected" : ""
      }`}
    >
      <CardContent employee={employee} />
      <ActionsButton
        openDeleteEmployeeModal={openDeleteEmployeeModal}
        employee={employee}
      />
    </div>
  );
};

export default EmployeeCard;
