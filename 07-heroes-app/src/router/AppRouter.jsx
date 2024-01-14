
import { Route, Routes } from "react-router-dom";

import { HeroesRoutes } from "./../heroes";
import { AboutPage, LoginPage } from "../auth/pages";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = ()=>{
  return(
    <>
      <Routes>
        <Route path="about" element={<AboutPage/>} />
        <Route path="login" element={<PublicRoute>
          <LoginPage/>
        </PublicRoute>} />
        <Route path ="/*" element={ <PrivateRoute>
          <HeroesRoutes/>
        </PrivateRoute> } />
      </Routes>
    </>
  )
}