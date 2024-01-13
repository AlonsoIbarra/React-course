
import { Route, Routes } from "react-router-dom";

import { HeroesRoutes } from "./../heroes";
import { AboutPage, LoginPage } from "../auth/pages";

export const AppRouter = ()=>{
  return(
    <>
      <Routes>
        <Route path="login" element={<LoginPage/>} />
        <Route path="about" element={<AboutPage/>} />
        <Route path="/*" element={<HeroesRoutes/>} />
      </Routes>
    </>
  )
}