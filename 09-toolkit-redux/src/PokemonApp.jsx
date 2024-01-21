import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon";


export const PokemonApp = ()=>{
    const { isLoading, pokemons, page } = useSelector(state => state.pokemons);
    const dispatch = useDispatch();

    useEffect(
        ()=>{
            dispatch( getPokemons() );
        },
        []
    );

    return (
        <>
        <h3>Pokemon app</h3>
        { isLoading ? '<span>Loading...</span>' :  ''}
        
        <ul>
            { pokemons.map( pokemon =>{
                return <li key={ pokemon.name }> { pokemon.name } </li>
            }) }
        </ul>
        <button
            onClick={ ()=>dispatch( getPokemons(page +1 ))}>
                Next
        </button>
        </>
    )
}