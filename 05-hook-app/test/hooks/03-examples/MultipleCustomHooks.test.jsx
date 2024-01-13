import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHook } from "../../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../src/hooks/useFetch";
import { useCounter } from "../../../src/hooks/useCounter";

jest.mock("../../../src/hooks/useFetch");
jest.mock("../../../src/hooks/useCounter");

describe('pruebas en <MultipleCustomHook>',()=>{
    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(()=>{
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', ()=>{
        useFetch.mockReturnValue(
            {
                data: [],
                isLoading: true,
                hasError: null
            }
        );

        render( <MultipleCustomHook></MultipleCustomHook>);

        expect(screen.getByText('Cargando...'));
    });

    test('debe de mostrar un postal code', ()=>{
        useFetch.mockReturnValue(
            {
                data: {
                    "post code": "23443",
                    "country": "United States",
                },
                isLoading: false,
                hasError: null
            }
        );

        render( <MultipleCustomHook></MultipleCustomHook>);

        const nextButton = screen.getByRole('button', {name: 'Next'});

        expect(screen.getByText('United States')).toBeTruthy();
        expect(nextButton.disable).toBeFalsy();
    });

    test('debe de llamar ala funcion incrementar', ()=>{

        useFetch.mockReturnValue(
            {
                data: {
                    "post code": "23443",
                    "country": "United States",
                },
                isLoading: false,
                hasError: null
            }
        );

        render( <MultipleCustomHook></MultipleCustomHook>);

        const nextButton = screen.getByRole('button', {name: 'Next'});

        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();

    });
});