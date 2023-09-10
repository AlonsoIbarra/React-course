import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const AboutPage = ()=>{
    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <h2>About Page</h2>
            <h5>{ user.name ?? '' }</h5>
            <hr />
            <button className="btn btn-primary" onClick={()=>setUser({...user,name:'another'})}>
                updateUser
            </button>
        </>
    )
}