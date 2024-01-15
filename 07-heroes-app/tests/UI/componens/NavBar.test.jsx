import { HeroesRoutes } from '../../../src/heroes/routes/HeroesRoutes';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { AuthContext } from '../../../src/auth/context';
import { PrivateRoute } from '../../../src/router/PrivateRoute';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockUseNavigate,
}));

describe('Pruebas en NavBar', ()=>{
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

    test('Debe de llamar logout y navigate al hacer clic en logout', ()=>{

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Routes>
                        <Route path="login" element={<h1>Page</h1>} />
                        <Route path ="/*" element={ <PrivateRoute>
                            <HeroesRoutes/>
                        </PrivateRoute> } />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockUseNavigate).toHaveBeenCalled();

    });

    test('Debe de mostrar el nombre del usuario autenticado', ()=>{
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <HeroesRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('saul username')).toBeTruthy();
    });
});