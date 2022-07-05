import React, {useState, useEffect} from "react";
import LoginForm from "./components/Login";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import PlanTrip from "./components/PlanTrip";
import Router from "./Router";



function App() {

  const [clients,setClients ] = useState([]);
 
  useEffect(()=>{
    fetch('https://capstone-api-rayudo11.vercel.app/clients')
      .then(res => res.json())
      .then(data => setClients(data))
  },[])

  useEffect(()=>{console.log(clients)},[clients])
 
  return(
    <BrowserRouter>
    <NavBar/>
    <Router/>
    {/* <Footer/> */}
   </BrowserRouter>
  )
}

export default App;
