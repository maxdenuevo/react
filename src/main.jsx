import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ContactPage } from './pages/ContactPage.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { NotFoundPage } from './pages/NotFoundPage.jsx' 
import { UserDynamic } from './pages/UserDynamic.jsx'

let router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/contact",
      element: <ContactPage />
    },
    {
      path: "/users/:id",
      element: <UserDynamic />
    },
    {
      path: "*",
      element: <NotFoundPage /> 
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
