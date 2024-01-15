import { HeroesRoutes } from '../../../src/heroes/routes/HeroesRoutes';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../../src/auth/context';
import { SearchPage } from '../../../src/heroes/pages';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockUseNavigate,
}));

describe('Pruebas en SarchPage', ()=>{
    const contextValue = {
        logged: true,
        user : {
            id: '3434',
            name: 'saul username'
        },
        logout: jest.fn(),
    }

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Debe mostrar con valores por defecto', ()=>{

        const {container} = render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();

    });

    test('Debe mostrar a baman y setear el query en el input', ()=>{

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage/>
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        const img = screen.getByRole('img');

        expect(input.value).toBe('batman');
        expect(img.src).toContain('/heroes/dc-batman.jpg');
        

    });

    test('Debe buscar a baman123 y mostrar mensaje de error', ()=>{
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage/>
            </MemoryRouter>
        );

        expect(screen.getByText('There is no results with batman123')).toBeTruthy();
    });

    test('Debe mostrar a baman y setear el query en el input', ()=>{

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/search']}>
                    <HeroesRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        
        const input = screen.getByRole('textbox');
        
        fireEvent.change(input, { target: { name: 'searchText', value: 'Spider' } });

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(mockUseNavigate).toHaveBeenCalledWith('?q=Spider')
    });
});