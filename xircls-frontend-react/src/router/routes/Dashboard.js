import { lazy } from 'react'
import EmailSetup from '../../views/dashboard/EmailSetup'
const Dashboard = lazy(() => import('../../views/dashboard/Dashboard'))


const Dashboard_Routes = [
  {
    path: '/merchant/dashboard',
    element: <Dashboard />
  },
  {
    path: '/merchant/EmailSetup',
    element: <EmailSetup />
  }
]

export default Dashboard_Routes