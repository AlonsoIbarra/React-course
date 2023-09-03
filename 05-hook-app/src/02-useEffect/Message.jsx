import { useEffect, useState } from "react";

export const Message = ()=>{
    const [cords, setCords ] = useState({x:0,y:0});
    useEffect(
        ()=>{
            const onMouseMove = ({x,y}) => {
                console.log({x,y});
                setCords({x,y});
            };

            console.log('message mounted');
            window.addEventListener('mousemove',onMouseMove);
            
            return ()=>{
                window.removeEventListener('mousemove',onMouseMove);
                console.log('message unmounted');
            };
        },
        []
    );
    return (
        <>
            <h3>Usuario existe</h3>
            { JSON.stringify( cords)}
        </>
    );
}