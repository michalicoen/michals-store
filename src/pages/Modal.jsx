import React from 'react'
import './Modal.css';

const Modal = ({ item, close }) => {
  if (!item) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={() => close()}>
          X
        </button>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>Price: ${item.price}</p>
      </div>
    </div>
  );
}

export default Modal