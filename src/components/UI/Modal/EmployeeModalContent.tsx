import { FC } from "react";
import { RootState } from "../../../store";
import {
  deleteEmployee,
  fetchEmployees,
  unselectEmployee,
} from "../../../store/Employees/employees";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { closeModal } from "../../../store/ScreenView/screenSettings";
import "./EmployeeModalContent.css";

const EmployeeModalContent: FC = () => {
  const dispatch = useAppDispatch();
  const selectedEmployee = useAppSelector(
    (state: RootState) => state.employee.referencedEmployee
  );

  const closeEmployeeModal = () => {
    dispatch(unselectEmployee());
    dispatch(closeModal());
  };

  const onEmployeeDelete = () => {
    if (selectedEmployee != null) {
      dispatch(deleteEmployee(selectedEmployee));
      dispatch(fetchEmployees());
    }
    closeEmployeeModal();
  };

  return (
    <div className="modal__content">
      <h2 className="modal__title">
        Delete Employee <br></br>
        {selectedEmployee == null ? "" : selectedEmployee.name}?
      </h2>

      <div className="modal__button-container">
        <button className="modal__close-button" onClick={closeEmployeeModal}>
          Close Modal
        </button>
        <button className="modal__delete-button" onClick={onEmployeeDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default EmployeeModalContent;
