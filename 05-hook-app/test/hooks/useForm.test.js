import { renderHook } from "@testing-library/react";
import { useform } from "../../src/hooks/useForm";
import { act } from "react-dom/test-utils";

describe('Pruebas en el useForm,',()=>{
    const initialForm = {
        name:'Username',
        email:'user@mail.com'
    }

    test('Debe regresar valores por defecto', ()=>{
        const { result } =renderHook(()=>useform(initialForm));

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });
    });

    test('Debe cambiar el nombre del formulario', ()=>{
        const { result } =renderHook(()=>useform(initialForm));
        const { onInputChange } = result.current;
        const newName = 'custom';

        act( () => {
            onInputChange({ target: { name:'name', value:newName } } );
        });

        expect(result.current.name).toEqual(newName);
        expect(result.current.formState.name).toEqual(newName);
    });

    test('Debe realizar reset al formulario', ()=>{
        const { result } =renderHook(()=>useform(initialForm));
        const { onInputChange, onResetForm } = result.current;
        const newName = 'custom';

        act( () => {
            onInputChange({ target: { name:'name', value:newName } } );
            onResetForm()
        });

        expect(result.current.name).toEqual(initialForm.name);
        expect(result.current.formState.name).toEqual(initialForm.name);
    });
});