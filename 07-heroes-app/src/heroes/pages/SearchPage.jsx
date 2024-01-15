import { HeroCard } from "../components";
import queryString from "query-string";
import { useForm } from "../../hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { getHeroesByName } from "../helpers";

export const SearchPage = () =>{
    const navigte = useNavigate();
    const location = useLocation();
    const { q='' } = queryString.parse(location.search);
    const { searchText, onInputChange } = useForm({
        searchText:q
    });
    const onSearchSubmit = (event)=>{
        event.preventDefault();

        if (searchText.trim().length < 3) return;
        navigte(`?q=${searchText}`);
    }
    const heroes = getHeroesByName(q);

    return (
        <>
            <h2>Search Page</h2>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Searching...</h4>
                    <hr />
                    <form onSubmit={ onSearchSubmit } aria-label="form">
                        <input
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            value={ searchText }
                            onChange={ onInputChange }
                            autoComplete="off"/>
                        <button aria-label="search" className="btn btn-outline-primary mt-1">Search</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    
                    {
                        (q == '')
                        ? <div className="alert alert-primary">Search a hero</div>
                        : (heroes.length == 0 ) && <div className="alert alert-danger"> There is no results with { q } </div>
                    }
                    
                    {
                        heroes.map( (hero)=>(
                            <HeroCard key={hero.id}  {...hero}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}