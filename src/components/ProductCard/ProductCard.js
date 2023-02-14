import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ProductCard = ({data})=> {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {data.producto}
          alt="product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {`${data.marca} ${data.modelo}`}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default ProductCard