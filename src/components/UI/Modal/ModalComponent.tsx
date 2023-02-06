import { FC } from "react";
import { RootState } from "../../../store";
import { useAppSelector } from "../../../store/hooks";
import "./ModalComponent.css";

interface IModalComponent {
  children: React.ReactNode;
}

const ModalComponent: FC<IModalComponent> = ({ children }) => {
  const modalIsOpen = useAppSelector(
    (state: RootState) => state.screenSettings.modalIsOpen
  );

  if (!modalIsOpen) {
    return null;
  }

  return (
    <div className="modal__container">
      <div className="modal">{children}</div>
    </div>
  );
};

export default ModalComponent;
