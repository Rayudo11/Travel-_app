import { Button,TextField } from '@mui/material';
import { useState, useEffect} from "react";
import React from 'react'
import CustomStack from './CustomStack'
import CustomCard from './CustomCard'


function LoginForm() {
  


  return (
    <div style={{textAlign:"center"}}>
      <h1>Lets Get Packing</h1>
    <CustomCard className="card"sx={{ textAlign:'center'}}>
      <CustomStack sx={{width:350, margin: '40px'}}>
        <h2>Login</h2>
          <TextField type="email" name="email" label="email" id="email" />
         <TextField type="password" name="password" label="password" id="password" />
        <Button variant='contained'>Login</Button>
      </CustomStack>
    </CustomCard> 
    </div>
  )
}
export default LoginForm;