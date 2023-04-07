import { createBrowserRouter } from 'react-router-dom'
// import Home from './pages/Home'
import Login from './pages/Login'
import { lazy } from 'react'

const Home = lazy(() => import('./pages/Home'))

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default routes
