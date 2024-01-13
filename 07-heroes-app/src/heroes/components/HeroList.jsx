import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "./";

export const HeroList = ({publisher})=>{
    const herosList = useMemo(()=> getHeroesByPublisher(publisher), [ publisher]);
    return (
        <>
            <div className="row rows-cols-1 rows-cols-md-1 g-3">
                <div>Hero List</div>
                <ul>
                    {herosList.map((hero) => (
                        <HeroCard key={hero.id}  {...hero}/>
                    ))}
                </ul>
            </div>
        </>
    )
}