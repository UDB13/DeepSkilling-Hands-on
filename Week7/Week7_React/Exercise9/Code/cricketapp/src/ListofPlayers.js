import React from "react";

export const players = [
    { name: "Jack", score: 50 },
    { name: "Michael", score: 70 },
    { name: "John", score: 40 },
    { name: "Ann", score: 61 },
    { name: "Elisabeth", score: 61 },
    { name: "Sachin", score: 95 },
    { name: "Dhoni", score: 100 },
    { name: "Virat", score: 84 },
    { name: "Jadeja", score: 64 },
    { name: "Raina", score: 75 },
    { name: "Rohit", score: 80 }
  ]

export default function ListofPlayers({players}){
  return (
    <>
      <ul>
        {players.map((item)=>{
          return(
            <>
              <li>Mr. {item.name}<span> {item.score}</span></li>
            </>
        )})}
      </ul>
    </>)
  }

export const Scorebelow70=({players})=>{
    let player70 = [];

  players.map((item)=>{
      if(item.score<70){
        player70.push(item);
      }
      return null;
    });

    return(
      <>
      <ul>
        {player70.map((item)=>{
          return(
          <li>Mr. {item.name}<span> {item.score}</span></li>
        )})}
      </ul>
      </>
    )
  }