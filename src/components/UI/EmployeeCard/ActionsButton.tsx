import { Delete, Edit } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store";
import { selectEmployee } from "../../../store/Employees/employees";
import { Employee } from "../../../store/Employees/employeeType";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { openModal } from "../../../store/ScreenView/screenSettings";
import ModalComponent from "../Modal/ModalComponent";
import "./ActionsButton.css";

type ICardActions = {
  employee: Employee;
};

const ActionsButton: React.FC<ICardActions> = ({ employee }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const selectedEmployee = useAppSelector(
    (state: RootState) => state.employee.referencedEmployee
  );

  const handleEditEmployee = () => {
    console.log("Edit clicked");
    dispatch(selectEmployee(employee));
    navigate("/employee-form", { state: { mode: "Edit" } });
  };

  const openDeleteModal = () => {
    dispatch(selectEmployee(employee));
    dispatch(openModal());
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
        onClick={openDeleteModal}
        className="card-button"
        sx={{ color: "#E50000" }}
      >
        <Delete />
      </Button>
    </div>
  );
};

export default ActionsButton;
