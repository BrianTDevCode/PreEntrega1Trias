import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ItemList = ({data})=> {

  

  return (
    
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {data.img}
          alt="product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {`${data.brand} ${data.model}`}
          </Typography>

          <Typography gutterBottom variant="p" component="div">
           {`U$: ${data.price}`}
          </Typography>

          <Typography gutterBottom variant="p" component="div">
           {`Stock: ${data.stock}`}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
   
  );
}
export default ItemList