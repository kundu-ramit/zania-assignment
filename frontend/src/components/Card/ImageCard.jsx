import React, { useState } from 'react';
import Modal from '../Modal/Modal'
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import './ImageCard.css'

const ImageCard = ({ Type,Title,Image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

    return (
      <>
      <Card className = "image-card" sx={{ maxWidth: 345 }} onClick={openModal}>
        <CardMedia
          component="img"
          height="140"
          image={Image}
          alt={Title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Type}
          </Typography>
        </CardContent>
       
      </Card>
       <Modal
       isOpen={isModalOpen}
       closeModal={closeModal}
       title={Title}
       description={Type}
       imageUrl={Image}
     />
     </>
    );
  };
  
  export default ImageCard;