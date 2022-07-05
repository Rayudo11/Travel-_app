import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "./components/Login";
import PlanTrip from "./components/PlanTrip";

const Router = () => {
  const checkAuth = () => {};

  //Check the cookies for a cookie called "loggedIn"

  //Write ProtectedRoute function here
  const ProtectedRoute = ({ component: Component }) => {
    if (checkAuth()) return <Component />;
    else return <Navigate to="/login" />;
  };
  return (
    <Routes>
      <Route path="/login" element={<LoginForm/>} />
      <Route path="/plan" element={<PlanTrip/>} />
    </Routes>
  );
};

export default Router;
