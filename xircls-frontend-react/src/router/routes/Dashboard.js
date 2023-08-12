import { lazy } from 'react'
import Demo from '../../views/dashboard/Demo'
const Dashboard = lazy(() => import('../../views/dashboard/Dashboard'))


const Dashboard_Routes = [
  {
    path: '/merchant/dashboard',
    element: <Dashboard />
  },
  {
    path: '/merchant/demo/',
    element: <Demo />
  }
]

export default Dashboard_Routes