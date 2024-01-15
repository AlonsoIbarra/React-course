import { types } from '../../../src/auth/types/types';

describe('Pruebas en types.js', ()=>{

    test('Debe de retornar types', ()=>{
        expect(types).toEqual({
            login: 'Login',
            logout: 'Logout'
        });
    });
});