import { useCounter } from "../hooks/useCounter";

export const CounterAppWhitCustomHook = () => {
    const { counter, increment, reset, decrement } = useCounter();

    return (
        <>
            <h1>Counter</h1>
            <h3>{ counter }</h3>
            <hr />

            <button className="btn btn-success" onClick={decrement}>-1</button>
            <button className="btn btn-success" onClick={reset}>0</button>
            <button className="btn btn-success" onClick={increment}>+1</button>
        </>
    )
}