import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';




function ReviewTrip() {
  return (
    <div>
    <div style={{ borderRadius: "25px", borderStyle: "outset", marginTop: "50px",position: "absolute" , left: "35%" , width: 500, height: "75%"}}>
    <p style={{textAlign: "center", fontFamily: "Monospcace , Monaco",  fontSize: "40px", color: "#0163A4"}}>Let's Go!!</p>
    <h1 style={{color:"orange" ,marginLeft: "80px"}}> Sydney NSW, Australia</h1>
    <p > You have chosen Australia as your next destination.
    Would you like to continue with this purchase?</p>
    <Button variant="contained" >Submit</Button>
    <Button variant="contained" component={Link}to="/login" key="login">Cancel</Button>
    <Button variant="contained" component={Link} to="/plan"key="plan">Edit</Button>
    </div>
    </div>
  )
}

export default ReviewTrip;