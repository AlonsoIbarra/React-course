import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { AuthContext } from '../../src/auth/context';
import { PrivateRoute } from '../../src/router/PrivateRoute';

describe('Pruebas en PivateRoute', ()=>{

    test('Debe de mostrar el children si esta autenticado', ()=>{
        const contextValue = {
            logged: true,
            user : {
                id: '3434',
                name: 'saul'
            }
        }
        Storage.prototype.setItem = jest.fn();
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    });

    test('Debe de navegar a login si no esta autenticado', ()=>{
        const contextValue = {
            logged: false
        }
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Routes>
                        <Route path="/*" element={<PrivateRoute>
                            <h1>Ruta privada</h1>
                            </PrivateRoute>} />
                        <Route path='/login' element={<h1>Página</h1> }></Route>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Página')).toBeTruthy()
    });
});