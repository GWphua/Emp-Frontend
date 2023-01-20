import React from "react";
import "./Card.css";


type Props = {
  children?: React.ReactNode;
};

const Card: React.FC<Props> = (props) => {
  return (

<div className="card">
      <div className="list-display">
        <ul className="list-style">{props.children}</ul>
      </div>
      <div className="button-display">
        <button className="card-button">Hi</button>
      </div>
    </div>

    
  );
};

export default Card;
