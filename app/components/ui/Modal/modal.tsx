import React, {
  DialogHTMLAttributes,
  FC,
  useEffect,
  useRef,
  useState,
} from "react";
import "./modal.css";
import CloseIcon from "../../home/closeIcon";

interface ModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, hasCloseBtn, onClose, children }) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      handleCloseModal();
    }
  };

  return (
    <dialog ref={modalRef} className="modal" onKeyDown={handleKeyDown}>
      {hasCloseBtn && (
        <CloseIcon
          onClick={handleCloseModal}
          className="modal-close-btn"
        ></CloseIcon>
      )}
      {children}
    </dialog>
  );
};

export default Modal;
