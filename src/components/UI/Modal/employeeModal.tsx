import { FC } from "react";
import { unselectEmployee } from "../../../store/Employees/employees";
import { useAppDispatch } from "../../../store/hooks";
import { closeModal } from "../../../store/ScreenView/screenSettings";

const EmployeeModal: FC = () => {
  const dispatch = useAppDispatch();

  const closeEmployeeModal = () => {
    dispatch(unselectEmployee());
    dispatch(closeModal());
  };

  return (
    <div>
      <h2>Employee Modal</h2>
      <button onClick={closeEmployeeModal}>Close Modal</button>
    </div>
  );
};

export default EmployeeModal;
