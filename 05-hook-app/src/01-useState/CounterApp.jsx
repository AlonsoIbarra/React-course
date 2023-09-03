import { useState } from "react";

export const CounterApp = ()=>{
    const [state, setCounter ] = useState(
        {
            counter1: 10,
            counter2: 20,
            counter3: 30,
        }
    );
    return (
        <>
        <h1>Counter</h1>
        <h3>{ state.counter1 }</h3>
        <h3>{ state.counter2 }</h3>
        <h3>{ state.counter3 }</h3>
        <hr />

        <button className="btn btn-success" onClick={()=>setCounter({...state,counter1 : state.counter1 + 1})}>+1</button>
        </>
    )
}