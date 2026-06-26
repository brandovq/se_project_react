import "./ModalWithForm.css";
import modalCloseButton from "../../assets/modal-close-btn.svg";

function ModalWithForm({ children, buttonText, title, isOpen, onClose, name }) {
  return (
    <div
      className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Above I added on MouseDown Overlay checks */}
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close_type_form"
          aria-label="Close"
        >
          <img src={modalCloseButton} alt="" aria-hidden="true" />
        </button>
        <form className="modal__form" name={name}>
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
