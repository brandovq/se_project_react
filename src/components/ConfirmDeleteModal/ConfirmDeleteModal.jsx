import { useEffect } from "react";
import "./ConfirmDeleteModal.css";
import modalCloseButton from "../../assets/modal-close-btn.svg";

function ConfirmDeleteModal({ isOpen, onConfirm, onCancel }) {
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && isOpen) {
        onCancel();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onCancel]);
  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onCancel();
        }
      }}
    >
      <div className="modal__content modal__content_type_confirm">
        <button
          onClick={onCancel}
          type="button"
          className="modal__close"
          aria-label="Close"
        >
          <img src={modalCloseButton} alt="Close" aria-hidden="true" />
        </button>
        <p className="confirm-modal__title">
          Are you sure you want to delete this item?
        </p>
        <p className="confirm-modal__subtitle">This action is irreversible.</p>
        <div className="confirm-modal__buttons">
          <button
            onClick={onConfirm}
            type="button"
            className="confirm-modal__delete-btn"
          >
            Yes, delete item
          </button>
          <button
            onClick={onCancel}
            type="button"
            className="confirm-modal__cancel-btn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
