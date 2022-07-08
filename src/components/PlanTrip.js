import React, {useRef} from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Weather from "./Weather";


function PlanTrip() {
  const budgetInput = useRef('')
  const locationInput = useRef('')
  const transportationInput = useRef('')
  const attendeesInput = useRef('')

  const handleSubmit = () => {
    console.log(budgetInput.current.value)
    const budget = budgetInput.current.value
    const location = locationInput.current.value
    const transportation = transportationInput.current.value
    const attendees = attendeesInput.current.value
    const body = {budget,location,transportation,attendees}
    console.log(body)
  }

  const handlePlan = (error) => {
    axios.post('http://localhost:3001/addconsultation',({
       customer_id:'1', 
       budget: budgetInput,
       location:locationInput,
       transportation:transportationInput,
       attendees:attendeesInput,
     })) 
     console.log(error)
  };
  
   return (
     <div style={{display: "grid", gridTemplateColumns: "35%, 65%"}}>
       <Box style={{gridColumn: "1", alignItems: "center" ,justifyContent: "center"}}>
       <h1 style={{ width: "240px"}}>Plan Your Trip</h1>
         <TextField style={{ marginBottom: "20px", marginLeft: "40%", width: "300px"}}helperText="What's your budget" label="amount" inputRef={budgetInput} required/>
         <br/>
        <TextField style={{ marginBottom: "20px",  marginLeft: "40%", width: "300px"}} helperText="Do you need Transportation?" label="???" inputRef={transportationInput} required/>
        <br/>
        <TextField style={{ marginBottom: "10px",  marginLeft: "40%", width: "300px"}} helperText="How many?" label="Attendees" inputRef={attendeesInput} required/>
        <br/>
        <select style={{ textalign: "center", marginBottom:"20px",  marginLeft: "40%", width: "300px", height: "56px", fontSize: "20px", color: "gray"}} ref={locationInput}>
          <option style={{}}>London, England</option>
          <option >Paris, France</option>
          <option >Sydney, Australia</option>
        </select>
        <br/>
        <Button style={{ border: "red" , marginLeft: "50%"}} variant="contained" onClick={handleSubmit}>Submit</Button>
       </Box>
        <div style={{gridColumn: "2"}}>
          <h1></h1>
         {/* <img src={"./public/bigben.jpeg"} height={1279} width={1920} style={{}} alt="london" /> */}
         <Weather/>
        </div>
      
     </div>
   )
   }

export default PlanTrip;
