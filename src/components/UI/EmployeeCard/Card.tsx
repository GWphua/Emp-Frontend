import React from "react";

import "./Card.css";
import ActionsButton from "./ActionsButton";
import CardContent from "./CardContent";

interface ICard {
  children?: React.ReactNode;
};

const EmployeeCard: React.FC<ICard> = ({ children }) => {
  return (
    <div className="employee__card">
      <CardContent>{children}</CardContent>
      <ActionsButton />
    </div>
  );
};

export default EmployeeCard;
