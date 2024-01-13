import { heroes } from "./../data/heroes-with-desc";


export const getHeroesByName = (name='')=>{
    name = name.toLocaleLowerCase().trim();

    return (name=='')
    ? []
    : heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes(name));
}