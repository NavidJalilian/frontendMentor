import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
function MySteps() {
  return (
    <div className='navbar'>
      <div className='option'>
        <button className='btn-round'>1</button>
        <h5>Step 1</h5>
        <h3>Your info</h3>
      </div>
      <div className='option'>
        <button className='btn-round'>2</button>
        <h5>Step 2</h5>
        <h3>Select plan</h3>
      </div>
      <div className='option'>
        <button className='btn-round'>3</button>
        <h5>Step 3</h5>
        <h3> Add-ons</h3>
      </div>
      <div className='option'>
        <button className='btn-round'>4</button>
        <h5>Step 4</h5>
        <h3> Summary</h3>
      </div>
    </div>
  );
}
export default MySteps;
