import { useCounter } from "../hooks";
import { useMemo, useState } from "react";

function hevyStuff(iterator) {
    for (let index = 0; index < iterator; index++) {
        console.log(index);
    }    
}
export const MemoHook = ()=>{
    const { counter, increment } = useCounter();
    const [ show, setShow ] =  useState( true );
    const dataMemorized = useMemo(
        () => hevyStuff(counter),
        [
            counter
        ]
    );
    return (
        <>
            <div>Memorize</div>
            <h1>Counter </h1>
            <h4> { dataMemorized } </h4>
            {counter}
            <hr />
            <button
            className="btn btn-primary"
            onClick={()=>increment()}
            >
                +1
            </button>
            <button
            className="btn btn-primary"
            onClick={()=>setShow(!show)}
            >
                Show/Hide
                { JSON.stringify(show) }
            </button>
        </>
    );
}