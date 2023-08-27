import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiftExperApp = () =>{
    const [ categories, setCategories ] =useState( [] );

    const onAddCategory = ( newCategory )=>{
        if ( categories.includes( newCategory ) ) return;
        setCategories(
            ( categories ) => [ newCategory, ...categories ]
        );
    }

    return(
        <>
            <h1>GiftExperApp</h1>
            <AddCategory onNewCategory={ onAddCategory } />
            { categories.map(
                category =>{
                    return <GifGrid category={ category } key={ category }/>
                }
            ) }
        </>
    );
}