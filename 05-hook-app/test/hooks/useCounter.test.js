import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "react-dom/test-utils";

describe('pruebas en el use counter',()=>{

    test('debe de retornar los valores por defecto', ()=>{
        const { result } =renderHook(()=>useCounter());
        const { counter, decrement, increment, reset } = result.current;

        expect(counter).toBe(1);
        expect(decrement).toEqual( expect.any(Function));
        expect(increment).toEqual( expect.any(Function));
        expect(reset).toEqual( expect.any(Function));

    });

    test('debe de generar el counter el valor de 100', ()=>{
        const { result } =renderHook(()=>useCounter(100));
        const { counter } = result.current;

        expect(counter).toBe(100);
    });

    test('Probar incrementar el counter', ()=>{
        const { result } =renderHook(()=>useCounter(1));
        const { increment } = result.current;

        act(() => {
            /* fire events that update state */
            increment();
            increment();
        });

        /* assert on the output */
        expect(result.current.counter).toBe(3);
    });

    test('Probar decrementar el counter', ()=>{
        const { result } =renderHook(()=>useCounter(1));
        const { decrement } = result.current;

        act(() => {
            decrement();
        });

        expect(result.current.counter).toBe(0);
    });

    test('Probar reset counter', ()=>{
        const { result } =renderHook(()=>useCounter(1));
        const { increment, reset } = result.current;

        act(() => {
            increment();
            increment();
            increment();
            increment();
            reset();
        });

        expect(result.current.counter).toBe(1);
    });
});