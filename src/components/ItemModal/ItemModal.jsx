import "./ItemModal.css";
import modalCloseButton from "../../assets/modal-close-btn.svg";
import { useModalClose } from "../../hooks/useModalClose.js";

function ItemModal({ isOpen, onClose, card }) {
  useModalClose(isOpen, onClose);
  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Above I added on MouseDown Overlay checks */}
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
          aria-label="Close"
        >
          <img src={modalCloseButton} alt="Close" aria-hidden="true" />
        </button>
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
