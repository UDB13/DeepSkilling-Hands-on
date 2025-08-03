//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { GuestPage } from './GuestPage';
import { LoginPage } from './LoginPage';
function App() {
  const [isLoggedIn , SetLoggedIn] = useState(false);
  return (
    <div className="App">
      {isLoggedIn ? <LoginPage onLogout={()=>{SetLoggedIn(false)}}/>:<GuestPage onLogin={()=>SetLoggedIn(true)}/>}
    </div>
  );
}

export default App;
