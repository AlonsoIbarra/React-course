import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";


describe('Pruebas en <LoginPage />', () => {

    test('debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('username');
        expect( preTag.innerHTML ).toBe('');


    });


    test('debe de llamar el setUser cuando se hace click en el boton', () => {

        const setUserMock = jest.fn();
        const user = {"email": "juan@google.com", "id": 123, "name": "alonso"};

        render(
            <UserContext.Provider value={{ user: user, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click( button );

        expect( setUserMock ).toHaveBeenCalledWith(user);


    });


});