import React, {useEffect, useRef} from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import Weather from "./Weather";

// import Map from './Map'

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
  

  return (
    <div>
      <h1>Plan Your Trip</h1>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <TextField
          helperText="What's your budget?"
          id="demo-helper-text-aligned"
          label="000"
            inputRef={budgetInput}
            required
          //   onChange={handleChange}
        />
        <select name="destination" id="destination"  ref={locationInput} >
          <option value="London" >London,England</option>
          <option value="France">Paris,France</option>
          <option value="Sydney">Sydney, Australia</option>
        </select>
        <TextField
          helperText="Do you need transportation? "
          id="demo-helper-text-aligned-no-helper"
          label="Name"
            inputRef={transportationInput}
            required
          //    onChange={handleChange}
        />
        <TextField
          helperText="How many?"
          id="demo-helper-text-aligned-no-helper"
          label="Attendees"
            inputRef={attendeesInput}
            required
          //   onChange={handleChange}
        />
        <Button variant="contained"  onClick={handleSubmit}>Submit</Button>
      </Box>
      
      <div>{/* <Map /> */}</div>
      <Weather />
    </div>
  );
}

export default PlanTrip;
