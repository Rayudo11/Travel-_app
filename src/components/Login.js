import { Button, TextField } from "@mui/material";
import { useState, setState, useEffect, useContext, useRef } from "react";
import AuthContext from "../context/AuthProvider";
import React from "react";
import CustomStack from "./CustomStack";
import CustomCard from "./CustomCard";
import axios from "axios";

function LoginForm() {
  // const requestLogin = {
  //   method: 'GET',
  //   headers: {'Content-Type' : 'application/json' },
  //   body: JSON.stringify({ title: 'REACT GET REQUEST EXAMPLE'})
  // };

  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage();
  }, [user, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        "http://localhost:3001/login",

        { user, password },
        {
          headers: { "Content-type": "application/json" },
          // withCredentials: true,
        }
      );

      console.log("Response", JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, password, roles, accessToken });
      setUser("");
      setPassword("");
      // setSuccess(true);
    } catch (error) {
      console.log("error", error);
      if (!error?.response) {
        setErrorMessage("No Server Response");
      } else if (errRef.response?.status === 400) {
        setErrorMessage("Missing Username or Password");
      } else if (error.response?.status === 401) {
        setErrorMessage("Unauthorized");
      } else {
        setErrorMessage("Login Failed");
      }
      errRef.current.focus();
    }
    setUser("");
    setPassword("");
    // setSuccess(true);
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="/plan">Go to Home</a>
          </p>
        </section>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h1>Lets Get Packing</h1>
          <CustomCard
            className="card"
            sx={{ textAlign: "center" }}
            onSubmit={handleSubmit}
          >
            <CustomStack sx={{ width: 350, margin: "40px" }}>
              <p
                ref={errRef}
                className={errorMessage ? "errorMessage" : "offscreen"}
                aria-live="assertive"
              >
                {errorMessage}
              </p>
              <h2>Login</h2>
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
              />
              <TextField
                type="password"
                name="password"
                label="password"
                id="password"
                ref={userRef}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <Button variant="contained" onClick={handleSubmit}>
                Login
              </Button>
            </CustomStack>
          </CustomCard>
        </div>
      )}
    </>
  );
}
export default LoginForm;
