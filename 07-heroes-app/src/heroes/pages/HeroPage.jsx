import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () =>{

    const { id } = useParams();
    const hero = useMemo(()=>getHeroById(id), [id]);
    const heroImgPath = `/assets/heroes/${id}.jpg`;
    const navigate = useNavigate();
    const onNavigateBack = ()=>{
        navigate(-1);
    }

    if (!hero) {
        return <Navigate to={'/'}></Navigate>;
    }

    return (
        <>
        <div className="row mt-5">
            <div className="col-4">
                <img src={heroImgPath} alt={hero.superhero} className="img-thumbnail animate__animated animate__fadeInLeft" />
            </div>
        </div>
        <div className="col-8">
            <h3 className="">{hero.superhero}</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>Alter ego:</b>{hero.alter_ego}</li>
                <li className="list-group-item"><b>Publisher:</b>{hero.publisher}</li>
                <li className="list-group-item"><b>First appearance:</b>{hero.first_appearance}</li>
            </ul>
        </div>
        <h5 className="mt-5">Characters</h5>
        <p>{hero.characters}</p>
        <button className="brn btn-outline-primary" onClick={ onNavigateBack }>
            Regresar
        </button>
        </>
    )
}