import { lazy } from 'react'
import EmailSetup from '../../views/dashboard/EmailSetup'
import EmailMarketing from '../../views/dashboard/EmailMarketing'
const Dashboard = lazy(() => import('../../views/dashboard/Dashboard'))


const Dashboard_Routes = [
  {
    path: '/merchant/dashboard',
    element: <Dashboard />
  },
  {
    path: '/merchant/EmailSetup',
    element: <EmailSetup />
  },
  {
    path: '/merchant/EmailMarketing',
    element: <EmailMarketing />
  }

]

export default Dashboard_Routes