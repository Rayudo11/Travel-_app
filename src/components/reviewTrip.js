import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function ReviewTrip() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    setSuccess(true);
  };
  return (
    <>
      {success ? (
        <div
          style={{
            borderRadius: "25px",
            borderStyle: "outset",
            marginTop: "50px",
            position: "absolute",
            left: "35%",
            width: 500,
            height: "75%",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontFamily: "Monospcace , Monaco",
              fontSize: "40px",
              color: "#0163A4",
            }}
          >
            Pack your bags and lets go, go, GO!!
          </p>
        </div>
      ) : (
        <div>
          <div
            style={{
              borderRadius: "25px",
              borderStyle: "outset",
              marginTop: "50px",
              position: "absolute",
              left: "35%",
              width: 500,
              height: "75%",
            }}
          >
            <p
              style={{
                textAlign: "center",
                fontFamily: "Monospcace , Monaco",
                fontSize: "40px",
                color: "#0163A4",
              }}
            >
              Let's Go!!
            </p>
            <h1 style={{ color: "orange", marginLeft: "90px" }}>
              Sydney NSW, Australia
            </h1>
            <p style={{ margin: "20px" }}>
              You have chosen Australia as your next destination. Would you like
              to continue with this purchase?
            </p>
            <div
              style={{
                position: "absolute",
                bottom: "70px",
                marginLeft: "90px",
              }}
            >
              <Button variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
              <Button
                style={{ marginLeft: "20px", marginRight: "20px" }}
                variant="contained"
                component={Link}
                to="/login"
                key="login"
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                component={Link}
                to="/plan"
                key="plan"
              >
                Edit
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ReviewTrip;
