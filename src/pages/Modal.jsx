import React from 'react'
import './Modal.css';

const Modal=({items})=> {
    if (!product) return null;

  return (
    
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={() => setShowModal(false)}>
              X
            </button>
            <h2>{items.name}</h2>
            <p>{items.description}</p>
            <p>Price: ${items.price}</p>
            {/* הוסף פרטים נוספים של המוצר כאן */}
          </div>
        </div>
      );
  
}

export default Modal