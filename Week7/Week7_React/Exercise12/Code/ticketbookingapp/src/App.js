//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { GuestPage } from './GuestPage';
import { LoginPage } from './LoginPage';
import { FlightDetails } from './FlightDetails';

function App() {
  const [isLoggedIn , SetLoggedIn] = useState(false);
  return (
    <div className="App">
      <h1>Ticket Booking App</h1>
      <hr/>
      {isLoggedIn ? <LoginPage onLogout={()=>{SetLoggedIn(false)}}/>:<GuestPage onLogin={()=>SetLoggedIn(true)}/>}
      <FlightDetails Login={isLoggedIn}/>
    </div>
  );
}

export default App;
