import React from "react"
import { Card, CardBody } from "reactstrap"
import { Col, Row } from "react-bootstrap"

const Education = () => {
  return (
    <>
      <Card>
        <CardBody>
          <h4>Add Candidate</h4>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <ul className='nav nav-pills' role='tablist'>
            <li className='nav-item'>
              <a
                className='nav-link d-flex align-items-center'
                id='detail-tab'
                data-toggle='tab'
                aria-controls='detail'
                role='tab'
                aria-selected='false'
                href='/merchant/employees/add_candidate/basic_detail/'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='14'
                  height='14'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='feather feather-user'
                >
                  <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
                  <circle cx='12' cy='7' r='4'></circle>
                </svg>
                <span className='d-none d-sm-block'>Basic Details</span>
              </a>
            </li>

            <li className='nav-item'>
              <a
                className='nav-link d-flex align-items-center'
                id='PersonalDetail-tab'
                href='/merchant/employees/add_candidate/aplication_details/'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='14'
                  height='14'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='feather feather-box'
                >
                  <path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'></path>
                  <polyline points='3.27 6.96 12 12.01 20.73 6.96'></polyline>
                  <line x1='12' y1='22.08' x2='12' y2='12'></line>
                </svg>
                <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
                <circle cx='12' cy='7' r='4'></circle>

                <span className='d-none d-sm-block'>Aplication Details</span>
              </a>
            </li>

            <li className='nav-item'>
              <a
                className='nav-link d-flex align-items-center'
                id='shipping-tab'
                href='/merchant/employees/add_candidate/personal_information/'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='14'
                  height='14'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='feather feather-user-plus'
                >
                  <path d='M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
                  <circle cx='8.5' cy='7' r='4'></circle>
                  <line x1='20' y1='8' x2='20' y2='14'></line>
                  <line x1='23' y1='11' x2='17' y2='11'></line>
                </svg>
                <span class='d-none d-sm-block'>Personal Information</span>
              </a>
            </li>
            <li className='nav-item ' id='company_tab_item'>
              <a
                className='nav-link d-flex align-items-center  active'
                id='company-tab'
                href='/merchant/employees/add_candidate/education_and_work_information/'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='14'
                  height='14'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='feather feather-trello'
                >
                  <rect x='3' y='3' width='18' height='18' rx='2' ry='2'></rect>
                  <rect x='7' y='7' width='3' height='9'></rect>
                  <rect x='14' y='7' width='3' height='5'></rect>
                </svg>
                <span>Eductation and Work Information</span>
              </a>
            </li>
          </ul>
          <CardBody>
            <h4>Education</h4>
            <div>
              <h5 class='mt-1 my-2'>Add School</h5>
              <a>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='14'
                  height='14'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='feather feather-plus'
                  id='plus_icon'
                  onclick='add_school()'
                >
                  <line x1='12' y1='5' x2='12' y2='19'></line>
                  <line x1='5' y1='12' x2='19' y2='12'></line>
                </svg>
              </a>
            </div>

            <input type='hidden' id='s_count' name='s_count' value='0' />

            <div class='high_school_div'>
              <div>
                <h5 class='mt-1 my-2'>Add High School</h5>
                <a>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='14'
                    height='14'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='feather feather-plus'
                    id='hs_plus_icon'
                    onclick='add_high_school()'
                  >
                    <line x1='12' y1='5' x2='12' y2='19'></line>
                    <line x1='5' y1='12' x2='19' y2='12'></line>
                  </svg>
                </a>
              </div>

              <input type='hidden' id='hs_count' name='hs_count' value='0' />
            </div>

            <div class='uni_div'>
              <div>
                <h5 class='mt-1 my-2'>Add University</h5>
                <a>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='14'
                    height='14'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='feather feather-plus'
                    id='uni_plus_icon'
                    onclick='add_uni()'
                  >
                    <line x1='12' y1='5' x2='12' y2='19'></line>
                    <line x1='5' y1='12' x2='19' y2='12'></line>
                  </svg>
                </a>
              </div>
            </div>
            <input type='hidden' id='uni_count' name='uni_count' value='0' />
            <hr />
            <h4>Work Experience</h4>

            <div class='internship_div'>
              <div>
                <h5 class='mt-1 my-2'>Add Internship</h5>
                <a>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='14'
                    height='14'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='feather feather-plus'
                    id='int_plus_icon'
                    onclick='add_internship()'
                  >
                    <line x1='12' y1='5' x2='12' y2='19'></line>
                    <line x1='5' y1='12' x2='19' y2='12'></line>
                  </svg>
                </a>
              </div>
            </div>
            <input
              type='hidden'
              id='internship_count'
              name='internship_count'
              value='0'
            />

            <div class='work_div'>
              <div>
                <h5 class='mt-1 my-2'>Add Work</h5>
                <a>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='14'
                    height='14'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='feather feather-plus'
                    id='int_plus_icon'
                    onclick='add_work()'
                  >
                    <line x1='12' y1='5' x2='12' y2='19'></line>
                    <line x1='5' y1='12' x2='19' y2='12'></line>
                  </svg>
                </a>
              </div>
            </div>

            <input type='hidden' id='work_count' name='work_count' value='0' />

            <Col class='col-12 mt-2'>
              <div class='d-flex justify-content-sm-between'>
                <div>
                  <button
                    type='button'
                    class='btn btn-primary ml-0 waves-effect waves-float waves-light'
                    onclick='goToBackPage()'
                  >
                    Back
                  </button>
                </div>
                <div>
                  <input type='hidden' name='next' />

                  <button
                    className='btn btn-primary waves-effect waves-float waves-light mx-1'
                    href='/merchant/customer/leads_dashboard/'
                    type='button'
                  >
                    SAVE & CLOSE
                  </button>
                </div>
              </div>
            </Col>
          </CardBody>

          <br />
        </CardBody>
      </Card>
    </>
  )
}

export default Education
