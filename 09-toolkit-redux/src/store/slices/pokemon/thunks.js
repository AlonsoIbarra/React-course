import { pokemonAPI } from "../../../api/pokemonAPI";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons=( page = 0)=>{
    return async ( dispatch, getState )=>{
        dispatch( startLoadingPokemons());

        //TODO: realizar peticion HTTP
        // const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        const response = await pokemonAPI.get(`/pokemon?limit=10&offset=${page * 10}`);
        dispatch(
            setPokemons(
                {
                    pokemons: response.data.results,
                    page: page
                }
            )
        );
    }

}