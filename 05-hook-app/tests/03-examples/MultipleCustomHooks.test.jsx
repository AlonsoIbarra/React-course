import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHook } from '../../src/03-examples';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHook />', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });


        render( <MultipleCustomHook /> );

        expect( screen.getByText('Cargando...') );

        const nextButton = screen.getByRole('button',{ name: 'Next' });
        expect(nextButton.disabled).toBeTruthy();

    });

    test('debe de mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Alonso', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHook /> );
        expect( screen.getByText('Hola Mundo') ).toBeTruthy();
        expect( screen.getByText('Alonso') ).toBeTruthy();

        const nextButton = screen.getByRole('button',{ name: 'Next' });
        expect(nextButton.disabled).toBeFalsy();
    });


    test('debe de llamar la función de incrementar', () => {


        useFetch.mockReturnValue({
            data: [{ author: 'Alonso', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });


        render( <MultipleCustomHook /> );
        const nextButton = screen.getByRole('button',{ name: 'Next' });
        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();

    });


});