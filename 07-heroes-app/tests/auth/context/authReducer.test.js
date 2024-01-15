import { types } from '../../../src/auth/types/types';
import { authReducer } from './../../../src/auth/context/authReducer';

describe('Pruebas de auth reducer', ()=>{

    test('Debe de retornar el estado por defecto', ()=>{
        const state = authReducer({logged: false}, {});
        expect (state).toEqual({logged: false});
    });

    test('Debe de llamar login autenticar y establecer usuario (login)', ()=>{
        const action = {
            type: types.login,
            payload: {
                id: '1',
                name: 'alonso'
            }
        };
        const state = authReducer({logged: false}, action);
        expect( state ).toEqual(
            {
                logged: true,
                user: action.payload
            }
        );
    });

    test('Debe de borrar el name del usuario y loggen en false (logout)', ()=>{
        const state = {
            logged: true,
            user: {
                id: '1',
                name: 'alonso'
            }
        };
        const action = {
            type: types.logout
        };
        const newState = authReducer(state, action);

        expect( newState ).toEqual(
            {
                logged: false
            }
        );
    });
});