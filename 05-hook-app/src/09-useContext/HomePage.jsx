import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = ()=>{
    const { user } = useContext( UserContext );
    console.log(user);
    return (
        <>
            <h2>Home page</h2>
            <h5>{ user.name ?? '' }</h5>
            <hr />


        </>
    )
}