import React, { useEffect } from 'react';
import './Modal.css'
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const Modal = ({ isOpen, closeModal, title, description, imageUrl }) => {
  // Close the modal when pressing Escape key
  const handleKeyPress = (e) => {
    if (e.keyCode === 27) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`} onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Card>
        <img src={imageUrl} alt={title} />
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        </Card>
      </div>
    </div>
  );
};

export default Modal;