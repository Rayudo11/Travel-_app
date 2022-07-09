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
  const [data, setData] = useState({});
  const [budget, setBudget] = useState("");
  const [location, setLocation] = useState("");
  const [transportation, setTransportation] = useState("");
  const [attendees, setAttendees] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  const handleSubmit = (e) => {
    // console.log(budgetInput.current.value);
    // budget = budgetInput.current.value;
    // location = locationInput.current.value;
    // transportation = transportationInput.current.value;
    // attendees = attendeesInput.current.value;
    // const body = { budget, location, transportation, attendees };
    // console.log(body);
    searchLocation(e);
    handlePost();
  };

  const searchLocation = (event) => {
    // if (event.key === "Enter") {
    console.log(location);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log("searchLocation response", response.data);
        // });
        setLocation("");
        // console.log("error",);
      })
      .catch((e) => console.log("searchLocation error", e));
  };

  const locationChange = (e) => {
    setLocation(e.target.value);
  };

  const handlePost = (userID) => {
    try {
      let customer_id = localStorage.getItem(userID);
      let body = { customer_id, budget, location, transportation, attendees };
      console.log("body", body);
      let response = axios.post("http://localhost:3001/addconsultation", body);

      console.log("handlepost", response);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleBudget= (e) => {
    setBudget(e.target.value);
  }

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
          value={budget}
          onChange={{handleBudget}}
          required
        />
        <br />
        <TextField
          style={{ marginBottom: "20px", marginLeft: "40%", width: "300px" }}
          helperText="Do you need Transportation?"
          label="???"
          inputRef={transportationInput}
          //foreing input react//
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
          <option>--Select an destionation--</option>
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
        <Weather
          searchLocation={searchLocation}
          data={data}
          location={location}
          setLocation={setLocation}
        />
      </div>
    </div>
  );
}

export default PlanTrip;
