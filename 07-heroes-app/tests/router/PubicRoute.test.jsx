import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { AuthContext } from '../../src/auth/context';
import { PublicRoute } from '../../src/router/PublicRoute';

describe('Pruebas en PublicRoute', ()=>{

    test('Debe de mostrar el children si no esta autenticado', ()=>{
        const contextValue = {
            logged: false
        }
        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Ruta Publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta Publica')).toBeTruthy()
    });

    test('Debe de navegar a raiz si esta autenticado', ()=>{
        const contextValue = {
            logged: true,
            user : {
                id: '3434',
                name: 'saul'
            }
        }
        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <Routes>
                        <Route path="login" element={<PublicRoute>
                            <h1>Ruta Publica</h1>
                            </PublicRoute>} />
                        <Route path='/' element={<h1>Página</h1> }></Route>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Página')).toBeTruthy()
    });
});