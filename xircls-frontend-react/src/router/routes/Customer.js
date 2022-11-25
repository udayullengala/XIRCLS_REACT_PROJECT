import { lazy } from 'react'
const Leads = lazy(() => import('../../views/Leads/Leads'))
const Addlead = lazy(() => import('../../views/Leads/Add-lead'))

const Customers_Routes = [
  {
    path: '/merchant/leads',
    element: <Leads />
  },
  {
    path: '/merchant/customer/add-lead/',
    element: <Addlead />
  }
]

export default Customers_Routes