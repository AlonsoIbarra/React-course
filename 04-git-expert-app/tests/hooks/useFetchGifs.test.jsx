import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Testing useFetchGifs hook',()=>{
    test('Validar estado inicial',()=>{
        const category = 'goku';
        const { result } = renderHook(
            ()=>useFetchGifs(category)
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('Validar regresar imagenes y loading en falso', async ()=>{
        const category = 'goku';
        const { result } = renderHook(
            ()=>useFetchGifs(category)
        );

        await waitFor(
            ()=> expect( result.current.images.length ).toBeGreaterThan(0)
        );
        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});
