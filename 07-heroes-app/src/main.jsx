import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";

import './styles.css'
import { HeroesApp } from './HeroesAPP.jsx'
import { AppRouter } from './router/AppRouter.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter}>
      {/* <HeroesApp /> */}
    </RouterProvider>
  </React.StrictMode>,
)
