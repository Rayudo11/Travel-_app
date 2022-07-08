import React from "react";
import { Route, Routes } from "react-router-dom";
import DropDown from "./components/Weather";
import LoginForm from "./components/Login";
import PlanTrip from "./components/PlanTrip";
import ReviewTrip from "./components/reviewTrip";
import Weather from "./components/Weather";
import Logout from "./components/Logout";
import Home from "./components/Home";

const Router = () => {
  
  
  // const checkAuth = () => {};

  //Check the cookies for a cookie called "loggedIn"

  //Write ProtectedRoute function here
  // const ProtectedRoute = ({ component: Component }) => {
  //   if (checkAuth()) return <Component />;
  //   else return <Navigate to="/login" />;
  // };
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/plan" element={<PlanTrip />} />
      <Route path="/review" element={<ReviewTrip />} />
      <Route path="/drop" element={<DropDown />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/" element={<Home/>}/>
    </Routes>
  );
};

export default Router;
