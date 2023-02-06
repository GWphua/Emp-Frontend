import classes from "./ModalComponent.module.css";

import { FC } from "react";
import Modal from "react-modal";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { RootState } from "../../../store";
import { toggleModal } from "../../../store/ScreenView/screenSettings";
import { unselectEmployee } from "../../../store/Employees/employees";

interface IModalComponent {
  title: string;
  appElement: HTMLElement;
  children: React.ReactNode;
}

const ModalComponent: FC<IModalComponent> = ({
  title,
  appElement,
  children,
}) => {
  const modalIsOpen = useAppSelector(
    (state: RootState) => state.screenSettings.modalIsOpen
  );

  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(unselectEmployee());
    dispatch(toggleModal(false));
  };

  console.log(appElement);

  return (
    <Modal
      appElement={appElement}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={classes}
      contentLabel="Modal"
      className="modal"
    >
      <h2>{title}</h2>
      <button onClick={closeModal}>close</button>
      {children}
    </Modal>
  );
};

export default ModalComponent;
