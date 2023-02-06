import { FC, ReactNode } from "react";
import { RootState } from "../../../store";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import EmployeeModal from "./employeeModal";
import "./ModalComponent.css";

interface IModalComponent {
  type: string;
  appElement?: HTMLElement;
  children?: React.ReactNode;
}

const ModalComponent: FC<IModalComponent> = ({ type }) => {
  const modalIsOpen = useAppSelector(
    (state: RootState) => state.screenSettings.modalIsOpen
  );

  const dispatch = useAppDispatch();

  let modalType: { [key: string]: ReactNode } = {
    employee: <EmployeeModal />,
  };

  if (!modalIsOpen) {
    console.log(modalIsOpen);
    return null;
  } else {
    console.log(modalIsOpen);
    return <div className="modal-container">
<div className="modal">{modalType[type]}</div>
    </div>
    
    ;
  }
};

export default ModalComponent;
