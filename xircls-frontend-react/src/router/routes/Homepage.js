import { lazy } from 'react'
const Homepage = lazy(() => import('../../views/Homepage/JS/Homepage'))


const Home_Routes = [
  {
    path: '/home',
    element: <Homepage />
  }
]

export default Home_Routes