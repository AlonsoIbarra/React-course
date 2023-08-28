import {fireEvent, render, screen} from '@testing-library/react';
import { AddCategory } from '../../src/components';

describe('test  a AddCategory',()=>{

    test('Cambiar valor de caja de texto' , ()=>{
        render( <AddCategory onNewCategory={()=>{}} />);
        const input = screen.getByRole('textbox');

        fireEvent.input(
            input,
            { target: { value:'pokemon' } }
        );

        expect(input.value).toBe('pokemon');

    });

    test('llamar function paramentro' , ()=>{
        const value = 'yajirobe'
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(
            input,
            { target: { value: value } }
        );
        fireEvent.submit( form );

        expect(input.value).toBe('');
        expect( onNewCategory).toHaveBeenCalled();
        expect( onNewCategory).toHaveBeenCalledWith(value);

    });

    test('no llamar function con string cortos' , ()=>{
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input );
        fireEvent.submit( form );

        expect( onNewCategory).toHaveBeenCalledTimes(0);

    });
})
