import { Button } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { Delete } from "@mui/icons-material";
import './ActionsButton.css';

const ActionsButton = () => {
  return (
    <div className="button-display">
      <Button onClick={() => console.log("Edit clicked")} className="card-button" sx={{ color: "#FFC32E"}}>
        <Edit />
      </Button>
      <Button onClick={() => console.log("Delete clicked")} className="card-button" sx={{ color: "#E50000"}}>
        <Delete />
      </Button>
    </div>
  );
};

export default ActionsButton;
