import React from "react"
import { Card, CardBody } from "reactstrap"
import { Col, Row } from "react-bootstrap"

const Personal = () => {
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
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                  <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
                  <circle cx='12' cy='7' r='4'></circle>
                
                <span className='d-none d-sm-block'>Aplication Details</span>
              </a>
            </li>

            <li className='nav-item'>
              <a
                className='nav-link d-flex align-items-center  active'
                id='shipping-tab'
                href='/merchant/employees/add_candidate/personal_information/'
              >
                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                <span class='d-none d-sm-block'>Personal Information</span>
              </a>
            </li>
            <li className='nav-item ' id='company_tab_item'>
              <a
                className='nav-link d-flex align-items-center '
                id='company-tab'
                href='/merchant/employees/add_candidate/education_and_work_information/'
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trello"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect></svg>
                <span>Eductation and Work Information</span>
              </a>
            </li>
          </ul>
          <CardBody>
                <div class="tab-pane active" id="Basic" aria-labelledby="Permissions-tab" role="tabpanel">
                                <h4 class="mt-1 my-2">Personal Information</h4><hr/>

                                    <input type="hidden" name="object_id" value=""/>
                                
                                    <input type="hidden" name="method" id="method"/>
                                    <Row class="row">
                                    <Col class="col-xl-4 col-md-6 col-12 mb-1">
                                                            <div class="form-group">
                                                                <label for="dob">Date of Birth</label>
                                                                <div>
                                                                    <input class="form-control date-picker" type="date" data-min-date="1970-01-01" id="dob" name="dob" placeholder="Date of Birth"/>
                                                                </div>
                                                            </div>
                                                            <span id="dob_val" class="validation_msg"></span>
                                                        </Col>
        
                                                        
                                                        <Col class="col-xl-4 col-md-6 col-12 mb-1">
                                                            <div class="form-group">
                                                                <label for="basicInput">Gender</label>
                                                                <select id="gender" name="gender" type="text" placeholder="Gender" class="form-control" onclick="clearError('Gender_val');">
                                                                    <option selected="" disabled="">Gender</option>
                                                                    <option value="Male">Male</option>
                                                                    <option value="Female">Female</option>
                                                                </select>
                                                            </div>
                                                            <span id="Gender_val" class="validation_msg"></span>
                                                        </Col>
        
        
                                                        
                                                        <Col class="col-xl-4 col-md-6 col-12 mb-1">
                                                            <div class="form-group">
                                                                <label for="basicInput">Marital Status</label>
                                                                <select id="marital_status" name="marital_status" placeholder="Marital Status" type="text" class="form-control" onclick="clearError('Marital_status_val'); ">
                                                                    <option selected="" disabled="">Marital Status</option>
                                                                    <option value="Single">Single</option>
                                                                    <option value="Relationship">In Relationship</option>
                                                                    <option value="Married">Married</option>
        
        
                                                                    <option value="Divorced">Divorced</option>
                                                                    <option value="Widowed">Widowed</option>
                                                                </select>
                                                            </div>
                                                            <span id="Marital_status_val" class="validation_msg"></span>
                                                        </Col>
                                        </Row>
                                        </div>
                                        <br />
                                        <Row>
                                        <hr/><h4>Social Presence </h4>
                                                    <Row class="row" id="social_presence">
        
                                                     
                                                        <Col class="col-lg-4 col-md-6 form-group">
                                                            <label for="twitter-input">Twitter</label>
                                                            <div class="input-group input-group-merge">
                                                                <div class="input-group-prepend">
                                                                    <span class="input-group-text" id="basic-addon3" >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter font-medium-2">
                                                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
                                                                            </path>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <input id="twitter_link" name="twitter_link" type="text" class="form-control" placeholder="https://www.twitter.com/" aria-describedby="basic-addon3"/>
                                                            </div>
                                                        </Col>
        
                                                       
                                                        <Col class="col-lg-4 col-md-6 form-group">
                                                            <label for="facebook_link">Facebook</label>
                                                            <div class="input-group input-group-merge">
                                                                <div class="input-group-prepend">
                                                                    <span class="input-group-text" id="basic-addon4" >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook font-medium-2">
                                                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z">
                                                                            </path>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <input id="facebook_link" name="facebook_link" type="text" class="form-control" placeholder="https://www.facebook.com/" aria-describedby="basic-addon4"/>
                                                            </div>
                                                        </Col>
        
                                                        
                                                        <Col class="col-lg-4 col-md-6 form-group">
                                                            <label for="instagram_link">Instagram</label>
                                                            <div class="input-group input-group-merge">
                                                                <div class="input-group-prepend">
                                                                    <span class="input-group-text" id="basic-addon5" >
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram font-medium-2">
                                                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z">
                                                                            </path>
                                                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <input id="instagram_link" name="instagram_link" type="text" class="form-control" placeholder="https://www.instagram.com/" aria-describedby="basic-addon5"/>
                                                            </div>
                                                        </Col>
                                                    </Row>

                                        </Row>
                                        <br />
                                       <hr/>
                                                    <h4> Address Details</h4>
                                                    <Row class="row" id="address_details">
                                                    <Row>
                                                        <Col class="col-xl-4 col-md-6 col-12 mb-1">
                                                            <div class="form-group">
                                                                <label>Flat/Building/House details</label>
                                                                <input type="text" class="form-control" name="address_flat" id="address_flat" placeholder=""/>
                                                            </div>
                                                            <span id="address_flat_val" class="validation_msg"></span>
                                                        </Col>
        
                                                
                                                        <Col class="col-xl-4 col-md-6 col-12 mb-1">
                                                            <div class="form-group">
                                                                <label>Street/Lane/Road</label>
                                                                <input type="text" class=" form-control" name="address_street" id="address_street" placeholder=""/>
                                                            </div>
                                                            <span id="address_street_val" class="validation_msg"></span>
                                                        </Col>
        
                                                
                                                        <Col class="col-xl-4 col-md-6 col-12 mb-1">
                                                            <div class="form-group">
                                                                <label>Area / Locality / Suburb </label>
                                                                <input type="text" class=" form-control" name="address_area" id="address_area" placeholder="e.g. Bandra" data-autoclose="true"/>
                                                            </div>
                                                            <span id="address_area_val" class="validation_msg"></span>
                                                        </Col>
        
                                                        </Row>
                                                        <Row>
                                                        <Col class="col-xl-4 col-md-6 col-12 mb-1">
                                                            <div class="form-group">
                                                                <label for="basicInput">Landmark</label>
                                                                <input type="text" class="form-control" id="address_landmark" name="address_landmark" placeholder=""/>
                                                            </div>
                                                            <span id="address_landmark_val" class="validation_msg"></span>
                                                        </Col>
        
                                                        <Col class="col-xl-4 col-md-6 col-12 mb-1">
                                                            <div class="form-group">
                                                                <label for="basicInput">City</label>
                                                                <input type="text" class="form-control" id="address_city" name="address_city" placeholder=""/>
                                                            </div>
                                                            <span id="address_city_val" class="validation_msg"></span>
                                                        </Col>
        
                                                     
                                                        <Col class="col-xl-4 col-md-6 col-12 mb-1">
                                                            <div class="form-group">
                                                                <label for="basicInput">State / Province / Region</label>
                                                                <input type="text" class="form-control" id="address_state" name="address_state" placeholder=""/>
                                                            </div>
                                                            <span id="address_state_val" class="validation_msg"></span>
                                                        </Col>
                                                        </Row>
                                                        <Row>
                                                        <Col class="col-xl-4 col-md-6 col-12 mb-1">
                                                            <div class="form-group">
                                                                <label for="basicInput">Country</label>
                                                                <input type="text" class="form-control" id="address_country" name="address_country" placeholder=""/>
                                                            </div>
                                                            <span id="address_country_val" class="validation_msg"></span>
                                                        </Col>
        
                                                       
                                                        <Col class="col-xl-4 col-md-6 col-12 mb-1">
                                                            <div class="form-group">
                                                                <label for="basicInput">Postal Code</label>
                                                                <input type="text" class="form-control" id="id_postalcode" name="postalcode" placeholder=""/>
                                                            </div>
                                                            <span id="postalcode_val" class="validation_msg"></span>
                                                        </Col>
        
                                                        
                                                        <Col class="col-xl-4 col-md-6 col-12 mb-1">
                                                            <div class="form-group">
                                                                <label for="pincode">Pincode</label>
                                                                <input type="text" class="form-control" id="id_pincode" name="pincode" placeholder=""/>
                                                            </div>
                                                            <span id="pincode_val" class="validation_msg"></span>
                                                        </Col>
                                                        </Row>
                                                    </Row>
                                        <br />
                                        <Col class="col-12 mt-2">
                                            <div class="d-flex justify-content-sm-between">
                                                <div>
                                                    <button type="button" class="btn btn-primary ml-0 waves-effect waves-float waves-light" onclick="goToBackPage()">Back</button>
                                                </div>
                                                <div>
                                                    <input type="hidden" name="next"/>
                                                
                                                    <a name="save_proceed" value="save_&amp;_proceed" class="btn btn-primary  waves-effect waves-float waves-light " onclick="saveBasicDetails('yes');">Save &amp; Proceed</a>
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

export default Personal
