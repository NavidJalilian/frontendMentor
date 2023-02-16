import React, { useState } from "react";

import { Button, typography } from "@mui/material/Button";

function MyForm() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target.name;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };
  return (
    <main>
      <div>
        <h1 className='heading'>Personal info</h1>
        <typography>
          Please provide your name, email address, and phone number.
        </typography>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='label'>
            <h5>Name</h5>
            <input type='text' name='name' onChange={handleChange} />
          </label>
        </div>
        <label className='label'>
          <h5>Email Address</h5>
          <input type='email' name='email' onChange={handleChange} />
        </label>
        <label className='label'>
          <h5>Phone Number</h5>
          <input type='number' name='phoneNumber' onChange={handleChange} />
        </label>
        <div>
          <button type='submit' variant='contained'>
            Next Step
          </button>
        </div>
      </form>
    </main>
  );
}
export default MyForm;
