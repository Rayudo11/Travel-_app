import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';



function ReviewTrip() {
  return (
    <div>
    {/* <Card sx={{ maxWidth: 500}}>
    <CardMedia
      component="img"
      height="500"
      image="./src/image/hugo-sousa-1Z7QDZqT2QQ-unsplash"
      alt="London"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        London, England
      </Typography>
      <Typography variant="body2" color="text.secondary">
        You have chosen England as your next destination.
        Would you like to continue with this purchase?
      </Typography>
      Details:

    </CardContent>
    <CardActions>
      <Button size="small">Submit</Button>
      <Button size="small">Edit</Button>
      <Button size="small">Cancel</Button>
    </CardActions>
    
  </Card> */}
  {/* <Card sx={{ maxWidth: 500}}>
    <CardMedia
      component="img"
      height="500"
      image="./src/image/hugo-sousa-1Z7QDZqT2QQ-unsplash"
      alt="London"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Paris, France
      </Typography>
      <Typography variant="body2" color="text.secondary">
        You have chosen France as your next destination.
        Would you like to continue with this purchase?
      </Typography>
      Details:

    </CardContent>
    <CardActions>
      <Button size="small">Submit</Button>
      <Button size="small">Edit</Button>
      <Button size="small">Cancel</Button>
    </CardActions>
  </Card> */}
  <Card sx={{ maxWidth: 500}}>
    <CardMedia
      component="img"
      height="500"
      image="./src/image/hugo-sousa-1Z7QDZqT2QQ-unsplash"
      alt="London"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Sydney NSW, Australia
      </Typography>
      <Typography variant="body2" color="text.secondary">
        You have chosen Australia as your next destination.
        Would you like to continue with this purchase?
      </Typography>
      Details:

    </CardContent>
    <CardActions>
      <Button size="small" >Submit</Button>
      <Button  component={Link}
                to="/plan"
                key="plan"
               >Edit</Button>
      <Button size="small"component={Link}
                to="/login"
                key="login">Cancel</Button>
    </CardActions>
  </Card>
  <section>
    Congratulations!! Enjoy your trip to Australia
  </section>
  
  </div>
  )
}

export default ReviewTrip;