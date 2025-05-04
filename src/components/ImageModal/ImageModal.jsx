import Modal from "react-modal";
import { useEffect } from "react";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

function ImageModal({ isOpen, onRequestClose, imageUrl, alt }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onRequestClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onRequestClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={s.overlay}
      className={s.modal}
      shouldCloseOnOverlayClick={true}
    >
      <img src={imageUrl} alt={alt} className={s.image} />
    </Modal>
  );
}

export default ImageModal;
