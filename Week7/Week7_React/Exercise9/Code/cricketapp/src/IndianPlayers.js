import React from "react";

export const IndianTeam = [
  "Rohit Sharma",
  "Virat Kohli",
  "Shubman Gill",
  "KL Rahul",
  "Hardik Pandya",
  "Ravindra Jadeja",
  "Rishabh Pant",
  "Kuldeep Yadav",
  "Jasprit Bumrah",
  "Mohammed Shami",
  "Mohammed Siraj"
];

export function OddPlayers([first,,third,,fifth,,seventh,,ninth,,eleventh]){
    return(
        <div>
            <ul>
                <li>First : {first}</li>
                <li>Third : {third}</li>
                <li>Fifth : {fifth}</li>
                <li>Seventh : {seventh}</li>
                <li>Ninth : {ninth}</li>
                <li>Eleventh : {eleventh}</li>
            </ul>

        </div>
    )
}

export function EvenPlayers([,second,,fourth,,sixth,,eighth,,tenth]){
    return(
        <>
        <ul>
            <li>Second : {second}</li>
            <li>Fourth : {fourth}</li>
            <li>Sixth : {sixth}</li>
            <li>Eighth : {eighth}</li>
            <li>Tenth : {tenth}</li>
        </ul>
        </>
    )
}

export const ListofIndianPlayers=({IndianPlayers})=>{

    const T20Players=['First Player', 'Second Player', 'Third Player', 'Fourth Player', 'Fifth Player'];

    const RanjiPlayers=['Sixth Player', 'Seventh Player', 'Eighth Player', 'Ninth Player', 'Tenth Player', 'Eleventh Player'];

    IndianPlayers=[...T20Players, ...RanjiPlayers]

    return(
        <>
            <ul>
                {IndianPlayers.map((item)=>{
                    return(
                    <li>Mr. {item}</li>
                    )
                })}
            </ul>
        </>
    )
}