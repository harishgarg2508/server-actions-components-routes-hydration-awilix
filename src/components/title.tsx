'use client'
import { Typography } from "@mui/material";
import React, { memo } from "react";

const Title = memo(() => {
  console.log("Title rendered");
  return <Typography variant="h1">Counter</Typography>;
});


export default Title;