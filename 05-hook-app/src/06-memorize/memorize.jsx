import { useCounter } from "../hooks";
import { Small } from '../06-memorize/small';
import { useState } from "react";

export const Memorize = ()=>{
    const { counter, increment } = useCounter();
    const [ show, setShow ] =  useState( true );
    return (
        <>
            <div>Memorize</div>
            <h1>Counter </h1>
            <Small counter={counter}/>
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