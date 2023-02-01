import { Delete, Edit } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  deleteEmployee,
  selectEmployee,
  unselectEmployee,
} from "../../../store/Employees/employees";
import { Employee } from "../../../store/Employees/employeeType";
import { useAppDispatch } from "../../../store/hooks";
import "./ActionsButton.css";

type ICardActions = {
  employee: Employee;
};

const ActionsButton: React.FC<ICardActions> = ({ employee }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleEditEmployee = () => {
    console.log("Edit clicked");
    dispatch(selectEmployee(employee));
    navigate("/employee-form", { state: { mode: "Edit" } });
  };

  const handleDeleteEmployee = async () => {
    dispatch(selectEmployee(employee));
    await dispatch(deleteEmployee(employee));
    console.log("DELETED");
    dispatch(unselectEmployee());
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
