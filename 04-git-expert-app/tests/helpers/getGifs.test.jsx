import { getGifs } from "../../src/helpers/getGifs";

describe('Testing getGifs helper',()=>{
    test('Recupera gifs correctamente', async()=>{
        const gifs = await getGifs('goku');

        expect(gifs.length).toBeGreaterThan(0);
    });
    test('Valida contenido de arreglo de gifs', async()=>{
        const gifs = await getGifs('goku');

        expect(gifs[0]).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        });
    });
});
