import { Button } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { Delete } from "@mui/icons-material";
import "./ActionsButton.css";
import { selectEmployee } from "../../../store/Employees/employees";
import { useAppDispatch } from "../../../store/hooks";
import { useNavigate } from "react-router-dom";
import { Employee } from "../../../store/Employees/employeeType";

type ICardActions = {
  employee: Employee;
};

const ActionsButton: React.FC<ICardActions> = ({ employee }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleEditEmployee = () => {
    console.log("Edit clicked");
    dispatch(selectEmployee(employee));
    navigate("/employee-form", { state: { mode: "Edit", employee: employee } });
  };

  const handleDeleteEmployee = (event: React.MouseEvent<HTMLElement>) => {
    console.log("Delete clicked");
  };

  return (
    <div className="button-display">
      <Button
        onClick={handleEditEmployee}
        className="card-button"
        sx={{ color: "#FFC32E" }}
      >
        <Edit />
      </Button>
      <Button
        onClick={handleDeleteEmployee}
        className="card-button"
        sx={{ color: "#E50000" }}
      >
        <Delete />
      </Button>
    </div>
  );
};

export default ActionsButton;
