import React from "react";
import { Button } from '@mui/material';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
// import Map from './Map'


function PlanTrip() {

    

  

    return(
        <div>
            <h1>Plan Your Trip</h1>
        <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          '& > :not(style)': { m: 1 },
        }}
      >
        <TextField
          helperText="What's your budget?"
          id="demo-helper-text-aligned"
          label="000"
        //   inputRef={budgetInput} 
        //   onChange={handleChange}
        />
        <TextField
          helperText="Where would you like to go "
          id="demo-helper-text-aligned-no-helper"
          label="choose"
        //   inputRef={addressInput} 
        //   onChange={handleChange}
        />
         <TextField
          helperText="Do you need transportation? "
          id="demo-helper-text-aligned-no-helper"
          label="Name"
        //   inputRef={transportationInput}
        //    onChange={handleChange}
        />
         <TextField
          helperText="How many?"
          id="demo-helper-text-aligned-no-helper"
          label="Attendees"
        //   inputRef={attendeeInput} 
        //   onChange={handleChange}
        />
        <Button variant='contained'>Submit</Button>
      </Box>
      {/* onClick={handleSubmit} */}
      <div>
            {/* <Map /> */}
        </div>
        </div>
    
    );
}

export default PlanTrip;
