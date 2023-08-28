import {render, screen} from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('test en <GifGrid>',()=>{

    const category = 'futurama';

    test('Mostrar mensaje de cargando.', ()=>{
        useFetchGifs.mockReturnValue(
            {
                images: [],
                isLoading: true                
            }
        );
        render( <GifGrid category={ category} />);

        expect(screen.getByText('Cargando...'));

    });

    test('Mostrar dos imagenes', ()=>{
        const gifs = [
            {
                id: '13df',
                title:'random',
                url: 'http://demo'
            },
            {
                id: 'asddf',
                title:'random tring',
                url: 'http://demo-string'
            }
        ];
        useFetchGifs.mockReturnValue(
            {
                images: gifs,
                isLoading: false                
            }
        );

        render( <GifGrid category={ category} />);

        expect(screen.getAllByRole('img').length).toBe(2);

    });
})
