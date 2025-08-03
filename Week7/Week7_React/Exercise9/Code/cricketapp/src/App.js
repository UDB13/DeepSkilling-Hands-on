//import logo from './logo.svg';
import './App.css';
import ListofPlayers from './ListofPlayers';
import { Scorebelow70 } from './ListofPlayers';
import { OddPlayers, EvenPlayers, ListofIndianPlayers, IndianTeam } from './IndianPlayers';
import { players } from './ListofPlayers';

let flag = true;

function App() {
  
  if(flag===true){
    return (
      <div className="App">
        <h1>List of Players</h1>
        <ListofPlayers players={players}/>
        <hr/>
        <h1>List of Players having Scores less than 70</h1>
        <Scorebelow70 players={players}/>
      </div>
    );
  }
  else{
    return(
      <div className="App">
        <div>
          <h1>Odd Players</h1>
          {OddPlayers(IndianTeam)}
          <hr/>
          <h1>Even Players</h1>
          {EvenPlayers(IndianTeam)}
        </div>
        <div>
          <hr/>
          <h1>List of Indian Players Merged:</h1>
          <ListofIndianPlayers IndianPlayers={players}/>
        </div>
      </div>
    )
  }
}

export default App;
