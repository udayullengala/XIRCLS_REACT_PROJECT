import P1 from "./Page1"
import P2 from "./Page2"
import P3 from "./Page3"
import P4 from "./Page4"
import React, { useState } from "react"
import { Card, CardBody } from "reactstrap"
import { Col, Row} from "react-bootstrap"
const BasicExample = () => {
  const [pgNo, setPgNo] = useState(1)

  return (
    <>
    <Card>
    <CardBody>
      <h4>Add Lead</h4>
    </CardBody>
  </Card>
  <Card>
    <CardBody>
      <h4>Lead Status</h4>
      <br />
      <Row className='match-height'>
        <Col className='col-4'>
          <form className='form-group'>
            <label>Status</label>
            <select
              name='cust_status_dropdown'
              id='cust_status'
              placeholder='reward_price_status'
              type='text'
              className='form-control'
              onclick=''
            >
              <option value='status' selected='' disabled=''>
                Status
              </option>
              <option value='Open'>Open</option>
              <option value='Contacted'>Contacted</option>
              <option value='Qualified'>Qualified</option>
              <option value='Unqualified'>Unqualified</option>
            </select>
          </form>
          <span
            id='cust_status_validation'
            className='validation_msg'
          ></span>
        </Col>
        <Col className='col-4'>
          <form className='form-group'>
            <label for='helperText'>Source </label>
            <select
              name='cust_source_dropdown'
              id='cust_source'
              placeholder='reward_price_status'
              type='text'
              className='source form-control'
              onclick='checksource(this.value);'
            >
              <option value='Source' selected='' disabled=''>
                Source
              </option>
              <option value='Networking'>Networking</option>
              <option value='Phone Enquiry'>Phone Enquiry</option>
              <option value='Cold Call'>Cold Call</option>
              <option value='Cold Email'>Cold Email</option>
              <option value='Trade Show'>Trade Show</option>
              <option value='Employee Referral'>Employee Referral</option>
              <option value='Client Referral'>Client Referral</option>
              <option value='External Referral'>External Referral</option>
              <option value='SEO / SEM Campaign'>SEO / SEM Campaign</option>
              <option value='Email Marketing Campaign'>
                Email Marketing Campaign
              </option>
              <option value='Web - Contact Form'>Web - Contact Form</option>
              <option value='Web - Enquiry Form'>Web - Enquiry Form</option>
              <option value='Web - Search'>Web - Search</option>
              <option value='Webinar'>Webinar</option>
              <option value='Other'>Other</option>
            </select>
          </form>
          <span
            id='cust_source_validation'
            className='validation_msg'
          ></span>
        </Col>

        <Col className='col-4'>
          <form className='form-group' id='other_source_field'>
            <label for='helperText' id='label_lead_source'>
              Other Source{" "}
            </label>
            <input
              type='text'
              name='cust_source'
              id='other_source'
              className='form-control'
              placeholder='Other'
              
            />
          </form>
        </Col>
      </Row>
      <br></br>

      <Row>
        {" "}
        <Col className='col-4'>
          <form className='form-group'>
            <label>Rating</label>
            <select
              name='cust_rating_dropdown'
              id='cust_rating'
              type='text'
              className='form-control'
              onclick=''
            >
              <option value='Rating' selected='' disabled=''>
                Rating
              </option>
              <option value='Cold'>Cold</option>
              <option value='Warm'>Warm</option>
              <option value='Hot'>Hot</option>
            </select>
          </form>
          <span
            id='cust_rating_validation'
            className='validation_msg'
          ></span>
        </Col>
        <Col className='col-4'>
          <form className='form-group'>
            <label>Lead Stage</label>
            <select
              name='cust_leadstage_dropdown'
              id='cust_leadstage'
              type='text'
              className='form-control'
              onclick='checkleadstage(this.value)'
            >
              <option value='Lead Stage' selected='' disabled=''>
                Lead Stage
              </option>

              <option value='2'>Prospect</option>

              <option value='3'>Presentation/Pitch</option>

              <option value='4'>Demo</option>

              <option value='5'>Planning</option>

              <option value='9'>Query solving</option>

              <option value='10'>Request for Proposal</option>

              <option value='11'>Negotiation</option>

              <option value='12'>LOI/Heads of Terms</option>

              <option value='13'>Signed Agreement</option>

              <option value='14'>Invoice Raised</option>

              <option value='15'>Signed Up</option>

              <option value='16'>Add Company</option>

              <option value='17'>Add Outlet</option>

              <option value='18'>Offers Designed</option>

              <option value='19'>Campaign created</option>

              <option value='20'>Plugin Integration</option>

              <option value='21'>Campaign Live</option>

              <option value='22'>Offers Active</option>

              <option value='23'>DNS Integration</option>

              <option value='26'>Parked Funnel</option>

              <option value='24'>Customer</option>

              <option value='25'>Single Offer Created</option>
            </select>
          </form>
          <span
            id='cust_rating_validation'
            className='validation_msg'
          ></span>
        </Col>
      </Row>
    </CardBody>
  </Card>
    <Card>
    <CardBody>
      <ul className='nav nav-pills' role='tablist'>
        <li className='nav-item'>
          <a
            className='nav-link d-flex align-items-center  active'
            id='detail-tab'
            data-toggle='tab'
            href='#detail'
            aria-controls='detail'
            role='tab'
            aria-selected='false'
            onclick={() => {
              const nextPgNo = pgNo = 1
              setPgNo(nextPgNo)
            }}
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
            <span className='d-none d-sm-block'>Basic Information</span>
          </a>
        </li>

        <li className='nav-item'>
          <a
            className='nav-link d-flex align-items-center'
            id='PersonalDetail-tab'
            onclick={() => {
              const nextPgNo = pgNo = 2
              setPgNo(nextPgNo)
            }}
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
            <span className='d-none d-sm-block'>Personal Informaion</span>
          </a>
        </li>

        <li className='nav-item'>
          <a
            className='nav-link d-flex align-items-center'
            id='shipping-tab'
            onclick={() => {
              const nextPgNo = pgNo = 3
              setPgNo(nextPgNo)
            }}
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
              className='feather feather-share-2'
            >
              <circle cx='18' cy='5' r='3'></circle>
              <circle cx='6' cy='12' r='3'></circle>
              <circle cx='18' cy='19' r='3'></circle>
              <line x1='8.59' y1='13.51' x2='15.42' y2='17.49'></line>
              <line x1='15.41' y1='6.51' x2='8.59' y2='10.49'></line>
            </svg>
            <span class='d-none d-sm-block'> Address</span>
          </a>
        </li>
        <li className='nav-item ' id='company_tab_item'>
          <a
            className='nav-link d-flex align-items-center '
            id='company-tab'
            onclick={() => {
              const nextPgNo = pgNo = 4
              setPgNo(nextPgNo)
            }}
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
              className='feather feather-info'
            >
              <circle cx='12' cy='12' r='10'></circle>
              <line x1='12' y1='16' x2='12' y2='12'></line>
              <line x1='12' y1='8' x2='12.01' y2='8'></line>
            </svg>
            <span>Company Information</span>
          </a>
        </li>
      </ul>
      <div>
    <div>
            
    {pgNo === 2 ? <P2 /> : pgNo === 3 ? <P3 /> : <P4 />}
  </div>
    <div className='d-flex justify-content-sm-between'>
    <div>
    {pgNo > 1 && (
            <button
            className='btn btn-primary waves-effect waves-float waves-light mx-1'
              
              onClick={() => {
                let pg = pgNo;
                setPgNo(pg - 1);
              }}
            >
              Back
            </button>
          )}
    <button
      className='btn btn-primary waves-effect waves-float waves-light'
      href='/merchant/customer/leads_dashboard/'
    >
      Cancel
    </button>
  </div>
  <div>
    <button
      
      className='btn btn-primary waves-effect waves-float waves-light'
      onclick="add_customers_validation('save_basic')"
    >
      Save
    </button>
    {pgNo < 4 && (
            <button
            className='btn btn-primary waves-effect waves-float waves-light mx-1'
              type="button"
              onClick={() => {
                let pg = pgNo;
                setPgNo(pg + 1);
              }}
            >
              Next
            </button>
          )}

             {pgNo > 3 && (
            <button
            className='btn btn-primary waves-effect waves-float waves-light mx-1'
            href='/merchant/customer/leads_dashboard/'
              type="button"
              onClick={() => {
                let pg = pgNo;
                setPgNo(pg + 1);
              }}
            >
              SAVE & CLOSE
            </button>
          )}
  </div>
  </div>
  </div>
       <br />
       </CardBody>
     </Card>
     </>
  );
}

export default BasicExample;
