import React from "react";

import "./Card.css";
import ActionsButton from "./ActionsButton";
import CardContent from "./CardContent";

type ICard = {
  children?: React.ReactNode;
};

const Card: React.FC<ICard> = ({ children }) => {
  return (
    <div className="card">
      <CardContent>{children}</CardContent>
      <ActionsButton />
    </div>
  );
};

export default Card;
