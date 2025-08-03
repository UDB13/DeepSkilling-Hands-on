import React from 'react';

export const FlightDetails = ({Login}) => {
  const handleClick=()=>{
    alert("Booking Successfull")
  }
  return (
    <div>
      <h3>Available Flights</h3>
      <ul>
        <li>Delhi → Mumbai - ₹3500 {Login && <button onClick={handleClick}>Book</button>}</li>
        <li>Bangalore → Chennai - ₹2200  {Login && <button onClick={handleClick}>Book</button>}</li>
      </ul>
    </div>
  );
};
