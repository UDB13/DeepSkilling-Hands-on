import React, {useState} from "react";
import './CurrencyConvertor.css';

export const CurrencyConvertor=()=>{

    let [amt, setAmt] = useState(0);

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Converting to Euro Amount is ${amt*0.01}`);
    }

    return(
        <div className="container">
            <h1>Currency Convertor!!!</h1>
            <form onSubmit={handleSubmit}>
                <label>Amount: </label>
                <input type="text" onChange={(e)=>setAmt(e.target.value)}/><br/>
                <label>Currency: </label>
                <textarea rows="2" readOnly>Euro</textarea><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}