import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = ()=>{
    const { user, setUser } = useContext( UserContext );
    console.log(user);
    return (
        <>
            <h2>Login page</h2>
            <h5>{ user.name ?? '' }</h5>
            <hr />
            <button className="btn btn-primary" onClick={()=>setUser({...user,name:'alonso'})}>
                logIn
            </button>
        </>
    )
}