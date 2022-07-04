import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import Login from './components/Login'

const Router = () => {
    const checkAuth = () => {
        
    }

  //Check the cookies for a cookie called "loggedIn"

  //Write ProtectedRoute function here
  const ProtectedRoute = ({component: Component}) => {
    
    if (checkAuth())return <Component/>
    else return <Navigate to="/login"/>
  }
  return(
      <Routes>

      </Routes>
  )
}

export default Router