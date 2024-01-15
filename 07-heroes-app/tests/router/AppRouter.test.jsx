import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../../src/auth/context';
import { AppRouter } from '../../src/router/AppRouter';

describe('Pruebas en AppRouter', ()=>{

    test('Debe de mostrar login si no esta autenticado', ()=>{
        const contextValue = {
            logged: false,
        }

        render(
            <MemoryRouter initialEntries={['/dc']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getByText('Login Page')).toBeTruthy();
    });

    test('Debe de mostrar pagina si  esta autenticado', ()=>{
        const contextValue = {
            logged: true,
            user : {
                id: '3434',
                name: 'saul'
            }
        }

        render(
            <MemoryRouter initialEntries={['/dc']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getByText('DC Page')).toBeTruthy();
    });

});