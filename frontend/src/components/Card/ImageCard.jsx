import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import './ImageCard.css'

const ImageCard = ({ imageUrl, title, description }) => {
    return (
      <Card className = "image-card" sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    );
  };
  
  export default ImageCard;