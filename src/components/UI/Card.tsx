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
      <div>
        <CardContent>{children}</CardContent>
      </div>

      <div>
        <ActionsButton />
      </div>
    </div>
  );
};

export default Card;
