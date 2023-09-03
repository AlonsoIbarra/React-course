import { useLayoutEffect, useRef } from "react";
import { useFetch, useCounter } from "../hooks/";

export const Layout = ()=>{

    const reference = useRef();

    const { counter, increment } = useCounter( 33162 );

    const { data, isLoading, hasError } = useFetch( 'https://api.zippopotam.us/us/' + counter );

    const { country, places } = !!data && data;

    useLayoutEffect(
        ()=>{
            console.log(reference);
            console.log(reference.current);
            console.log(reference.current.getBoundingClientRect);
        },
        [places]
    );

    if ( isLoading ) 
        return (
            <>
                <div className="alert alert-info">
                    Cargando...
                </div> 
            </>
        )
    return (
        <>
            <h1>US PostalCodes</h1>
            <hr />
            <blockquote className="blockquote text-end" style={{ display:'flex'}}>
                <p ref={ reference } className="mb-1">{ JSON.stringify( places) }</p>
                <footer className="blockquote-footer">{ country }</footer>
            </blockquote>
            <button
            className="btn btn-primary"
            disabled={ isLoading }
            onClick={()=>increment()}>
                Next
            </button>
        </>
    );
};