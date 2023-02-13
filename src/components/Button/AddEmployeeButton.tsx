import { AddCircle } from "@mui/icons-material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { useAppSelector } from "../../store/hooks";
import Button from "./Button";

const AddEmployeeButton: FC = () => {
  const screenWidth = useAppSelector(
    (state: RootState) => state.screenSize.screenWidth
  );

  const navigate = useNavigate();
  const handleAddEmployee = () => {
    navigate("/employee-form", { state: { mode: "Add" } });
  };

  return (
    <Button
      onClick={handleAddEmployee}
      backgroundColor={screenWidth <= 899 ? "transparent" : "green"}
      hoverColor={screenWidth <= 899 ? "transparent" : "black"}
    >
      <AddCircle />
      {screenWidth > 899 && <strong>&nbsp;&nbsp;Add Employee</strong>}
    </Button>
  );
};

export default AddEmployeeButton;
