import React from 'react'
import './Modal.css';

const Modal = ({ items, setShowModal }) => {
  if (!items) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={() => setShowModal(false)}>
          X
        </button>
        <h2>{items.name}</h2>
        <p>{items.description}</p>
        <p>Price: ${items.price}</p>
      </div>
    </div>
  );
}

export default Modal