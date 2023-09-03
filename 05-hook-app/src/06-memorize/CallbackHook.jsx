import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = ()=>{
    const [counter, setCounter ] = useState(0);
    const inrementCallback = useCallback(
        (increment)=>{
            setCounter((counter)=> counter+increment);
        },
        []
    );

    // const increment = ()=>{
    //     setCounter(counter+1);
    // }
    return (
        <>
            <div> Callback Hook</div>
            <h1>UseCallback Hook: {counter} </h1>
            <hr />
            <ShowIncrement increment={()=>inrementCallback(3)} />
        </>
    );
}