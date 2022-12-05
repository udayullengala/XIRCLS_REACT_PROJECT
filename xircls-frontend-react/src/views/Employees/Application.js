import React from "react"
import { Card, CardBody } from "reactstrap"
import { Col, Row } from "react-bootstrap"

const Aplication = () => {
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
                className='nav-link d-flex align-items-center  active'
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
                className='nav-link d-flex align-items-center'
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
                                <h4 class="mt-1 my-2">Aplication Details</h4>

                                    <input type="hidden" name="object_id" value=""/>
                                
                                    <input type="hidden" name="method" id="method"/>
                                    <Row class="row">

                                        
                                    <Col class="col-xl-4 col-md-6 col-12 mb-1">
                                        <div class="form-group">
                                            <label for="basicInput">Role Description</label>
                                            <select id="Department" name="Department" type="text" placeholder="Title" onchange="pfToggle()" class="form-control">
                                                <option selected="" disabled="">Role Description</option>
                                                
                                                <option value="Administration HR">Administration HR</option>
                                                <option value="Recruitment">Recruitment</option>
                                                <option value="Human Resource Management">Human Resource Management</option>
                                                <option value="Operations">Operations</option>
                                                <option value="Sales">Sales</option>
                                                <option value="Marketing">Marketing</option>
                                                <option value="Luxury Sales">Luxury Sales</option>
                                                <option value="Digital Marketing">Digital Marketing</option>
                                                <option value="Client Success Management">Client Success Management</option>
                                                <option value="Content Writing">Content Writing</option>
                                                <option value="Graphic Design">Graphic Design</option>
                                                <option value="Python Programming">Python Programming</option>
                                                <option value="Front-End Development">Front-End Development</option>
                                                <option value="Android App Development">Android App Development</option>
                                                <option value="iOS App Development">iOS App Development</option>
                                                <option value="Sales Business Development">Sales Business Development</option>
                                                <option value="UI/UX Design">UI/UX Design</option>
                                                <option value="Financial Analyst">Financial Analyst</option>
                                                <option value="Founder's Business Plan Analyst">Founder's Business Plan Analyst</option>
                                                <option value="Risk Analyst">Risk Analyst</option>
                                                <option value="Market Research &amp; Competitive Analysis">Market Research &amp; Competitive Analysis</option>
                                                <option value="Luxury Sales Partner">Luxury Sales Partner</option>
                                                <option value="Sales Partner - Automobiles">Sales Partner - Automobiles</option>
                                                <option value="Sales Partner - Business Consultants">Sales Partner - Business Consultants</option>
                                                <option value="Sales Partner - Hospitality">Sales Partner - Hospitality</option>
                                                <option value="Sales Partner - IT Consultants">Sales Partner - IT Consultants</option>
                                                <option value="Sales Partner - Loyalty Programs">Sales Partner - Loyalty Programs</option>
                                                <option value="Sales Partner - SaaS">Sales Partner - SaaS</option>
                                                <option value="Content Coordinator">Content Coordinator</option>
                                                <option value="Financial Forecasting">Financial Forecasting</option>
                                                <option value="Video">Video</option>
                                                <option value="Lead Generation">Lead Generation</option>
                                                <option value="HR and Content Writing">HR and Content Writing</option>
                                                <option value="Content Coordination &amp; Strategy">Content Coordination &amp; Strategy</option>
                                                <option value="Social Media Marketing">Social Media Marketing</option>
                                                <option value="Growth Partner - Digital Marketing Consultants">Growth Partner - Digital Marketing Consultants</option>
                                                <option value=" mySQL / MariaDB Developer Intern"> mySQL / MariaDB Developer Intern</option>
                                                <option value=" Public Relations"> Public Relations</option>
                                                <option value=" Data Analyst"> Data Analyst</option>
                                                <option value=" Machine Learning Engineer">Machine Learning Engineer</option>
                                              
                    
                                                

                                          
                                            </select>
                                        </div>
                                        <span id="Department_val" class="validation_msg"></span>
                                    </Col>
            
                                  
                                    <Col class="col-xl-4 col-md-6 col-12 mb-1">
                                        <div class="form-group">
                                            <label for="basicInput">Role Type</label>
                                            
                                            <select id="Position" name="Position" type="text" placeholder="Title" class="form-control">
                                                <option selected="" disabled="">Role Type</option>
                                                <option value="Intern">Intern</option>
                                                <option value="Part-Time Employment">Part-TimeEmployment</option>
                                                <option value="Full-Time Employment">Full-TimeEmployment</option>
                                                <option value="Partner/Associate">Partner/Associate (for senior professionals only)</option>

                                               

                                            </select>
                                        </div>
                                        <span id="Position_val" class="validation_msg"></span>
                                    </Col>
            
                                    
                                    <Col class="col-xl-4 col-md-6 col-12 mb-1">
                                        <div class="form-group">
                                            <label for="work_type">Type</label>
                                            <select id="work_type" name="work_type" type="text" placeholder="Type" class="form-control">
                                                <option selected="" disabled="">Type</option>
                                                <option value="In-Office (Mumbai - Andheri East)">In-Office (Mumbai - Andheri East)</option>
                                                <option value="Remote">Remote</option>
                                                <option value="Both">Both</option>

                                            </select>
                                        </div>
                                        <span id="Type_val" class="validation_msg"></span>
                                    </Col>
                                        </Row>
                                        </div>
                                        <br />
                                        <Row>
                                        <Col class="col-xl-4 col-md-6 col-12 mb-1">
                                        <div class="form-group">
                                            <label for="basic_edit_email">Salary Structure</label>
                                            
                                                <select id="salary_struct" name="salary_struct" type="text" placeholder="Title" class="form-control">
                                                <option selected="" disabled="">Salary Structure</option>
                                                <option value="Contractual">Contractual</option>
                                                <option value="Commission">Commission</option>
                                                <option value="Salary">Salary</option>
                                                <option value="Stipend">Stipend</option>
                                                <option value="Unpaid">Unpaid</option>
                                            
                                            </select>
                                        </div>
                                        <span id="salary_struct_val" class="validation_msg"></span>
                                    </Col>

                                    
            
                                    <Col class="col-xl-4 col-md-6 col-12 mb-1">
                                        <div class="form-group">
                                            <label for="basicInput">Source</label>
                                            
                                                <select id="source" name="source" type="text" placeholder="Title" class="form-control" required="">
                                                <option selected="" disabled="">Source</option>
                                                <option value="LinkedIn">LinkedIn</option>
                                                <option value="Internshala">Internshala</option>
                                                <option value="Indeed">Indeed</option>
                                                <option value="Naukri">Naukri</option>
                                                <option value="LetsIntern">LetsIntern</option>
                                                <option value="HelloIntern">HelloIntern</option>
                                                <option value="Employee Referral">Employee Referral</option>
                                                <option value="Times Job">Times Job</option>
                                                <option value="College Placement Cell">College Placement Cell</option>
                                                <option value="Outsourced">Outsourced</option>
                                                <option value="Other">Other</option>

                                            
                                            </select>
                                        </div>
                                        <span id="source_val" class="validation_msg"></span>
                                    </Col>
            
                               
                                    <Col class="col-xl-4 col-md-6 col-12 mb-1">
                                        <div class="form-group">
                                            <label for="basicInput">Stage</label>
                                            
                                                <select id="Stage" name="cand_stage" type="text" placeholder="Title" class="form-control" onchange="toggleTab()">
                                                    <option selected="" disabled="">Stage</option>
                                                    <option value="Resume Screening">Resume Screening</option>
                                                    <option value="Contacted">Contacted</option>
                                                    <option value="Screening Call">Screening Call</option>
                                                    <option value="Test/Portfolios/Assignments">Test/Portfolios/Assignments</option>
                                                    <option value="Panel Interview">Panel Interview</option>
                                                    <option value="Final Interview">Final Interview</option>
                                                    <option value="Documentation Stage">Documentation Stage</option>
                                                    <option value="In Probation">In Probation</option>
                                                    <option value="Training">Training</option>
                                                    <option value="Employed">Employed</option>
                                                    <option value="Withdrawn">Withdrawn</option>
                                                    <option value="Withdrew">Withdrew</option>
                                                </select>
                                        </div>
                                        <span id="Stage_val" class="validation_msg"></span>
                                    </Col>

                                        </Row>
                                        <br />
                                       
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

export default Aplication
