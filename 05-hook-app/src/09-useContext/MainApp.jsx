import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { NavBar } from "./NavBar";
import { UserProvider } from "./context/UserProvider";


export const MainApp = ()=>{
    return (
        <UserProvider>
            <h2>Main App</h2>
            <NavBar/>
            <hr />

            <Routes>
                <Route path="/" element={ <HomePage/> } />
                <Route path="/login" element={ <LoginPage/> } />
                <Route path="/about" element={ <AboutPage/> } />
                <Route path="/*" element={ <Navigate to="/" /> } />
            </Routes>
        </UserProvider>
    )
}