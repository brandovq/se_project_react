import "./ItemModal.css";
import modalCloseButton from "../../assets/modal-close-btn.svg";

function ItemModal({ isOpen, onClose, card, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(card._id);
  };

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
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div>
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <button
            onClick={handleDeleteClick}
            type="button"
            className="modal__delete-btn"
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
