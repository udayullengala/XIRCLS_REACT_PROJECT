import { lazy } from "react"
const Basic = lazy(() => import("../../views/Employees/Basic"))
const Aplication = lazy(() => import("../../views/Employees/Application"))
const Personal = lazy(() => import("../../views/Employees/Personal"))
const Education = lazy(() => import("../../views/Employees/Education"))

const Employees_Routes = [
  {
    path: "/merchant/employees/add_candidate/basic_detail/",
    element: <Basic />
  },
  {
    path: "/merchant/employees/add_candidate/aplication_details/",
    element: <Aplication />
  },
  {
    path: "/merchant/employees/add_candidate/personal_information/",
    element: <Personal />
  },
  {
    path: "/merchant/employees/add_candidate/education_and_work_information/",
    element: <Education />
  }
]

export default Employees_Routes
