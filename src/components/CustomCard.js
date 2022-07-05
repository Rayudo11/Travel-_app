import React from "react";
import { Paper } from "@mui/material";

export default function SimplePaper(props) {
    return (
     
        <Paper sx={props.sx}>{props.children}</Paper>
    );
  }