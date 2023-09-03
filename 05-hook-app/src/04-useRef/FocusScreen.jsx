import { useRef } from "react"

export const FocusScreen = ()=>{
    const inputRef = useRef();
    const setFocus = ()=>{
        inputRef.current.select();
    };
    return (
        <>
            <h1>Focus screen </h1>
            <hr />
            <input
                ref={inputRef}
                type="text"
                name=""
                id=""
                placeholder="Ingrese su nombre"
                className="form-control"
            />
            <button
             className="btn btn-secondary"
             onClick={setFocus}
            >
                set Focus
            </button>
        </>
    )
}