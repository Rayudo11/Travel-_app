import React, { useRef, useState } from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Weather from "./Weather";

function PlanTrip() {
  const budgetInput = useRef("");
  const locationInput = useRef("");
  const transportationInput = useRef("");
  const attendeesInput = useRef("");

  const [budget, setBudget] = useState("");
  const [location, setLocation] = useState("");
  const [transportation, setTransportation] = useState("");
  const [attendees, setAttendees] = useState("");

  const handleSubmit = () => {
    console.log(budgetInput.current.value);
    const budget = budgetInput.current.value;
    const location = locationInput.current.value;
    const transportation = transportationInput.current.value;
    const attendees = attendeesInput.current.value;
    const body = { budget, location, transportation, attendees };
    console.log(body);
  };

  const locationChange = () => {
    setLocation(location);
  };

  const handlePost = () => {
    try {
      let response = axios.post("http://localhost:3001/addconsultation", {
        budget,
        location,
        transportation,
        attendees,
      });
      let body = [budget, location, transportation, attendees];
      console.log("body", body);
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "35%, 65%" }}>
      <Box
        style={{
          gridColumn: "1",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ width: "240px" }}>Plan Your Trip</h1>
        <TextField
          style={{ marginBottom: "20px", marginLeft: "40%", width: "300px" }}
          helperText="What's your budget"
          label="amount"
          inputRef={budgetInput}
          required
        />
        <br />
        <TextField
          style={{ marginBottom: "20px", marginLeft: "40%", width: "300px" }}
          helperText="Do you need Transportation?"
          label="???"
          inputRef={transportationInput}
          required
        />
        <br />
        <TextField
          style={{ marginBottom: "10px", marginLeft: "40%", width: "300px" }}
          helperText="How many?"
          label="Attendees"
          inputRef={attendeesInput}
          required
        />
        <br />
        <select
          style={{
            textalign: "center",
            marginBottom: "20px",
            marginLeft: "40%",
            width: "300px",
            height: "56px",
            fontSize: "20px",
            color: "gray",
          }}
          id={"mylocation"}
          onChange={locationChange}
        >
          <option>London, England</option>
          <option>Paris, France</option>
          <option>Sydney, Australia</option>
        </select>
        <br />
        <Button
          style={{ border: "red", marginLeft: "50%" }}
          variant="contained"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
      <div style={{ gridColumn: "2" }}>
        <Weather location={location} />
      </div>
    </div>
  );
}

export default PlanTrip;
