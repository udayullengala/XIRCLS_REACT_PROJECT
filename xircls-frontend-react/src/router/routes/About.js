import { lazy } from 'react'
const Collaborative = lazy(() => import('../../views/About/Collaborative'))
const Vision = lazy(() => import('../../views/About/Vision'))


const About_Routes = [
  {
    path: '/about-us/why-collaborative-marketing',
    element: <Collaborative />
  },
  {
    path: '/about-us/vision-&-mission-statement',
    element: <Vision />
  }
]

export default About_Routes