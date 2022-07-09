import { Button, TextField } from "@mui/material";
import { useState, useContext, useRef } from "react";
import AuthContext from "../context/AuthProvider";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  let navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    try {
      let response = await axios.post("http://localhost:3001/login", {
        user,
        password,
      });
      console.log("response", response);
      let usertoken = await response.data.token;
      let userID = await response.data.userID;
      console.log("userID", userID);
      console.log("usertoken", usertoken);
      localStorage.setItem("token", usertoken);
      localStorage.setItem("userID", userID);
      // console.log("localstorage", localStorage.getItem("userID"));
      navigate("/plan");
    } catch (error) {
      console.log("error", error);
      if (!error?.response) {
        setErrorMessage("No Server Tesponse");
      } else if (errRef.response?.status === 400) {
        setErrorMessage("Missing Username or Password");
      } else if (errRef.response?.status === 401) {
        setErrorMessage("Unauthorized");
      } else {
        setErrorMessage("Login Failed");
      }
      errRef.current.focus();
    }
    //handle error//
    //learn about jwt tokens//
  };
  return (
    <div style={{ position: "relative", height: "700px" }}>
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
          Login
        </p>
        <p
          ref={errRef}
          className={errorMessage ? "errorMessage" : "offscreen"}
          aria-live="assertive"
        >
          {errorMessage}
        </p>
        <TextField
          type="email"
          name="email"
          label="email"
          id="email"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
          style={{
            marginTop: "30px",
            marginBottom: "60px",
            marginLeft: "20%",
            width: "300px",
          }}
        />
        <br />
        <TextField
          type="password"
          name="password"
          label="password"
          id="password"
          ref={userRef}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          style={{ marginLeft: "20%", width: "300px" }}
        />
        <br />
        <Button
          variant="contained"
          onClick={handleSubmit}
          style={{
            fontSize: "20px",
            width: "150px",
            height: "50px",
            marginTop: "40px",
            marginLeft: "175px",
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
export default LoginForm;
