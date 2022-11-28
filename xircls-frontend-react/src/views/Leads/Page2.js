import { Col, Row} from "react-bootstrap"

const Page2 = () => {
  return (
    <>
      <div >
																<h4 className="mt-1 my-2">Personal Details</h4>
																<Row className="row" id="personal">
																	

																	<Col className="col-xl-4 col-md-6 col-12 mb-1">
																		<div className="form-group">
																			<label>Date Of Birth</label>
																			<input type="text" className="js-datepicker form-control flatpickr-input" name="birth_date" id="date_of_birth" data-date-format="dd-mm-yyyy" data-week-start="1" placeholder="Date of Birth" data-autoclose="true" data-today-highlight="true" value="" readonly="readonly"/>
																		</div>
																			<span id="birth_date_val" className="validation_msg"></span>
																	</Col>
																
																	
																	<Col className="col-xl-4 col-md-6 col-12 mb-1">
																		<div className="form-group">
																			<label for="basicInput">Gender</label>
																			<select id="gender" name="gender" type="text" placeholder="Gender" className="form-control" value="" onclick="clearError('Gender_val');">
																							<option selected="" disabled="">Gender</option>
																							<option value="Male">Male</option>
																							<option value="Female">Female</option>
																						</select>
																		</div>
																		<span id="Gender_val" className="validation_msg"></span>
																	</Col>
									
																	
																	
																	<Col className="col-xl-4 col-md-6 col-12 mb-1">
																		<div className="form-group">
																			<label for="basicInput">Marital Status</label>
																			<select id="marital_status" name="marital_status" placeholder="Marital Status" type="text" className="form-control" value="" onclick="clearError('Marital_status_val'); Marriedaniversery();">
																						<option selected="" disabled="">Marital Status</option>
																						<option value="Single">Single</option>
																						<option value="Relationship">In Relationship</option>
																						<option value="Married">Married</option>
									
									
																						<option value="Divorced">Divorced</option>
																						<option value="Widowed">Widowed</option>
																						</select>
																		</div>
																		<span id="Marital_status_val" className="validation_msg"></span>
																	</Col>
									
																	
																	<Col className="col-xl-4 col-md-6 col-12 mb-1">
																		<div className="form-group">
																			<label for="basicInput">Children</label>
																			<select id="children" name="children" placeholder="Children" type="text" className="form-control" value="" onclick="clearError('Children_val');Childrendata();">
																							<option selected="" disabled="">Children</option>
																							<option value="Yes">Yes</option>
																							<option value="No">No</option>
																						</select>
																		</div>
																		<span id="Children_val" className="validation_msg"></span>
																	
																	</Col>
																	<div id="no0fchild" style="display: none;" className="col-xl-4 col-md-6 col-12 mb-1">   
																		<div className="form-group">
																			
																			<label for="basicInput">Number of Children</label>                              
																		<input type="text" className="form-control" maxlength="2" id="no0fchild" name="no0fchild" value="" placeholder="Number of Children"/>
																
																		</div>
																	</div>
																
																	
																	<Col className="col-xl-4 col-md-6 col-12 mb-1">
																		<div className="form-group">
																			<label for="basicInput">Occupation</label>
																			<select id="occupation" name="occupation" placeholder="Occupation" maxlength="6" className="form-control" value="" onclick="clearError('Occupation_val');abc();">
																							<option selected="" disabled="">Occupation</option>
																							<option value="Employed">Employed</option>
																							<option value="Business_Owner">Business Owner</option>
																							<option value="Retired Professional">Retired Professional</option>
																							<option value="Student">Student</option>
																							<option value="Homemaker">Homemaker</option>
																							
																						</select>
																		</div>
																		<span id="Occupation_val" className="validation_msg"></span>
																	</Col>
																	<Col className="col-xl-4 col-md-6 col-12 mb-1" id="employed" style="display: none;">   
																		<div className="form-group">
																			
																			<label for="basicInput">Sector</label>                           
																		<input type="text" className="form-control" id="employed" name="employed" value="" placeholder="Category"/>
																		</div>
																	</Col>
																	
																	<Col className="col-4">
																		<div className="form-group">
																			<label>Designation</label>
																	<input type="text" className="form-control" id="designation" name="designation" placeholder="Designation" onclick="clearError('designation')" style="text-transform: capitalize;"/>
																	</div>
																	<span id="designation_val" className="validation_msg"></span>

																</Col>
																</Row>

																
																<h4>Social Presence &nbsp; </h4>
																<div className="row" id="social_presence">
																	<div className="col-lg-4 col-md-6 form-group">
																	<label for="twitter-input">Twitter</label>
																	<div className="input-group input-group-merge">
																		<div className="input-group-prepend">
																		<span className="input-group-text" id="basic-addon3" style="background-color: transparent !important;">
																			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter font-medium-2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
																		</span>
																		</div>
																		<input id="twitter_link" name="twitter_link" type="text" className="form-control" placeholder="https://www.twitter.com/" aria-describedby="basic-addon3"/>
																	</div>
																	</div>
																	<div className="col-lg-4 col-md-6 form-group">
																	<label for="facebook_link">Facebook</label>
																	<div className="input-group input-group-merge">
																		<div className="input-group-prepend">
																		<span className="input-group-text" id="basic-addon4" style="background-color: transparent !important;">
																			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-facebook font-medium-2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
																		</span>
																		</div>
																		<input id="facebook_link" name="facebook_link" type="text" className="form-control" placeholder="https://www.facebook.com/" aria-describedby="basic-addon4"/>
																	</div>
																	</div>
																	<div className="col-lg-4 col-md-6 form-group">
																	<label for="instagram_link">Instagram</label>
																	<div className="input-group input-group-merge">
																		<div className="input-group-prepend">
																		<span className="input-group-text" id="basic-addon5" style="background-color: transparent !important;">
																			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram font-medium-2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
																		</span>
																		</div>
																		<input id="instagram_link" name="instagram_link" type="text" className="form-control" placeholder="https://www.instagram.com/" aria-describedby="basic-addon5"/>
																	</div>
																	</div>
																	<div className="col-12 mt-2">
																		<div className="d-flex justify-content-sm-between">
																			<div>
																				<a type="button" className="btn btn-primary  waves-effect waves-float waves-light" onclick="prev_basic();">Back</a>
																				<a className="btn btn-primary waves-effect waves-float waves-light" href="/merchant/customer/leads_dashboard/">Cancel</a>
																				
																			</div>
																			
																			<div>
																				<button type="button" className="btn btn-primary waves-effect waves-float waves-light" onclick="add_customers_validation('save_personal')" value="SAVE">Save</button>
																				<a className="btn btn-primary waves-effect waves-float waves-light" onclick="add_customers_validation('next_address');" value="Next">Next</a>
																				
																			</div>
																		</div>
																	</div>
																</div>
																

															</div>
    </>
  )
}

export default Page2;