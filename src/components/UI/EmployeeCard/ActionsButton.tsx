import { Delete, Edit } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { selectEmployee } from "../../../store/Employees/employees";
import { Employee } from "../../../store/Employees/employeeType";
import { useAppDispatch } from "../../../store/hooks";
import "./ActionsButton.css";

type ICardActions = {
  employee: Employee;
  openDeleteEmployeeModal: (employee: Employee) => void;
};

const ActionsButton: React.FC<ICardActions> = ({
  employee,
  openDeleteEmployeeModal,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleEditEmployee = () => {
    console.log("Edit clicked");
    dispatch(selectEmployee(employee));
    navigate("/employee-form", { state: { mode: "Edit" } });
  };

  const handleDeleteEmployee = () => {
    openDeleteEmployeeModal(employee);
  };

  return (
    <div id="ActionsButton" className="button-display">
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
