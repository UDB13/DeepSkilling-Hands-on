//import logo from './logo.svg';
import './App.css';
import DBS from './DBS.jpg';
import ABC from './ABC.jpg';
import USS from './USS.webp';
import SVT from './SVT.jpg';

function App() {
  const element = "Office Space";
  const Sites = [
    {name:"DBS", rent:50000, address:"Chennai"},
    {name:"ABC", rent:55000, address:"Chennai"},
    {name:"USS", rent:75000, address:"Chennai"},
    {name:"SVT", rent:650000, address:"Chennai"}
  ];
  const images = {DBS:DBS, ABC:ABC, USS:USS, SVT:SVT};
  return (
    <div className="App">
      <h1>{element}, at Affordable Range</h1>
      {Sites.map((site)=>{
        const sr=images[site.name];
        const attribute = <img src={sr} width="75%" height="50%" alt={site.name}/>;
        const color = (site.rent<=60000)?"red":"green";
      
        return(
          <div className='site'>
            
            {attribute}
            <h1>Name: {site.name}</h1>
            <h3 style={{color:color}}>Rent: Rs. {site.rent}</h3>
            <h3>Address: {site.address}</h3>
          </div>
        )
      })}
    </div>
  );
}

export default App;
