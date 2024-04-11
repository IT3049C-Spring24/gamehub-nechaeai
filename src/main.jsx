import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import './index.css'
import Layout from './components/Layout.jsx'
import HomePage from './routes/HomePage.jsx'
import AboutPage from './routes/AboutPage.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Game from './routes/RPS-Game/Game.jsx'
import TicTac from './routes/Tic-Tac-Toe/TicTac.jsx'



const routes = createBrowserRouter([
  {
    path: `/`,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: `/rps`,
        element: <Game />,
      },
      {
        path: `/about`,
        element: <AboutPage />,
      },
      {
        path: `/tic-tac`,
        element: <TicTac />,
      },
    ]
  }
], {basename: import.meta.env.BASE_URL})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)

