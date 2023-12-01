import { render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { HomePage } from '../../src/09-useContext/HomePage';


describe('Pruebas en <HomePage />', () => {

    const user = {
        id: 1,
        name: 'ALONSO'
    }

    test('debe de mostrar el componente sin el usuario', () => {

        render( 
            <UserContext.Provider value={{ user: null }}>
                <HomePage /> 
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('username'); // aria-label
        expect( preTag.innerHTML ).toBe( '' );
    });


    test('debe de mostrar el componente CON el usuario', () => {

        render( 
            <UserContext.Provider value={{ user }}>
                <HomePage /> 
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('username'); // aria-label
        expect( preTag.innerHTML ).toContain( user.name );
    });

});