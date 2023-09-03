import { useFetch, useCounter } from "../hooks/";

export const MultipleCustomHook = ()=>{

    const { counter, increment } = useCounter( 33162 );

    const { data, isLoading, hasError } = useFetch( 'https://api.zippopotam.us/us/' + counter );

    const { country, places } = !!data && data;

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
            <h1>BrakingBad Quotes</h1>
            <hr />
            <blockquote className="blockquote text-end">
                <p className="mb-1">{ JSON.stringify( places) }</p>
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