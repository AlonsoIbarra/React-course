import { useState } from "react"
import { UserContext } from "./UserContext"

const initialUser = {
    name:'',
    email:'',
    token: ''
}


export const UserProvider = ({ children })=>{
    const [user, setUser] = useState(initialUser);
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}