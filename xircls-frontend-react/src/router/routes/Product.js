import { lazy } from 'react'

const Semper = lazy(() => import('../../views/Products/Semper'))


const Product_Routes = [
  {
    path: '/products/semperfi/customer-loyalty',
    element: <Semper />
  }
]

export default Product_Routes