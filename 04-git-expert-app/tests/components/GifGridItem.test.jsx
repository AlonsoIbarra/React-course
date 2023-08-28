import {render, screen} from '@testing-library/react';
import { GifGridItem } from '../../src/components';

describe('Snapshot test en <GifGridItem>',()=>{
    test('Debe hacer match con snapshop',()=>{
        const props = {
            'id': 'some-id',
            'url': 'hola',
            'title' : 'hola'
        };
        const { container } = render( <GifGridItem id={props.id} {...props }/>);

        expect(container).toMatchSnapshot();

    });

    test('Mostrar imagen y url correcto' , ()=>{
        const props = {
            'id': 'some-id',
            'url': 'http://custom-url/',
            'title' : 'title'
        };
        render( <GifGridItem id={props.id} {...props }/>);
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe(props.url);
        expect( alt ).toBe(props.title);
    });

    test('Mostrar titulo en componente', ()=>{
        const props = {
            'id': 'some-id',
            'url': 'http://custom-url/',
            'title' : 'title'
        };
        render( <GifGridItem id={props.id} {...props }/>);

        expect(screen.getByText(props.title)).toBeTruthy();

    });
})
