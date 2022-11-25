import { Col, Row, Container, Section, Tab } from "react-bootstrap"

import { Card, CardBody } from "reactstrap"

const Addlead = () => {
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
                  value=''
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
                className='nav-link d-flex align-items-center  '
                id='PersonalDetail-tab'
                onclick="add_customers_validation('next_personal')"
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
                onclick="add_customers_validation('next_address')"
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
                onclick="add_customers_validation('next_company')"
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

          <div
            className='active'
            id='detail'
            aria-labelledby='detail-tab'
            role='tabpanel'
          >
            <h4 className='mt-1 my-2'>Basic Details</h4>
            <Row className='row'>
              <Col className='col-4'>
                <form className='form-group'>
                  <label for='basicInput'>Title</label>
                  <select
                    id='title'
                    name='title'
                    type='text'
                    placeholder='Title'
                    className='form-control'
                    onkeypress='return (event.charCode > 64 &amp;&amp; event.charCode < 91) || (event.charCode > 96 &amp;&amp; event.charCode < 123)'
                    onclick="clearError('title_val');"
                  >
                    <option selected='' disabled=''>
                      Title
                    </option>
                    <option value='MR'>Mr.</option>
                    <option value='Ms'>Ms.</option>
                    <option value='Mrs'>Mrs.</option>
                  </select>
                </form>
                <span id='title_val' className='validation_msg'>
                  Please select a title
                </span>
              </Col>

              <Col className='col-4'>
                <form className='form-group'>
                  <label for='basicInput'>First Name</label>
                  <input
                    type='text'
                    className='form-control'
                    id='id_cust_name'
                    name='cust_first_name'
                    placeholder='First Name'
                    onclick="clearError('cust_name_val')"
                  />
                </form>
              </Col>
              <Col className='col-4'>
                <form className='form-group'>
                  <label for='Last_Name'>Last Name</label>

                  <input
                    type='text'
                    className='form-control'
                    id='id_cust_last_name'
                    name='cust_last_name'
                    placeholder='Last Name'
                    onclick="clearError('cust_name_val')"
                  />
                </form>
                <span id='cust_name_val' className='validation_msg'></span>
              </Col>
            </Row>
            <br />
            <br />
            <Row className='row'>
              <Col class='col-4'>
                <form class='form-group'>
                  <label for='edit_email'>Email</label>
                  <input
                    type='text'
                    class='form-control'
                    placeholder='Email'
                    name='email'
                    id='email'
                    onclick="clearError('email_val')"
                    onchange='check_lead()'
                  />
                </form>
                <span id='email_val' class='validation_msg'></span>
              </Col>
              <Col className='col-4'>
                <form className='form-group'>
                  <label for='basicInput'>Country</label>
                  <select
                    className='form-control'
                    name='country'
                    id='country_selection'
                  >
                    <option value='Afghanistan'>Afghanistan</option>

                    <option value='Albania'>Albania</option>

                    <option value='Algeria'>Algeria</option>

                    <option value='American Samoa'>American Samoa</option>

                    <option value='Andorra'>Andorra</option>

                    <option value='Angola'>Angola</option>

                    <option value='Anguilla'>Anguilla</option>

                    <option value='Antarctica'>Antarctica</option>

                    <option value='Antigua And Barbuda'>
                      Antigua And Barbuda
                    </option>

                    <option value='Argentina'>Argentina</option>

                    <option value='Armenia'>Armenia</option>

                    <option value='Aruba'>Aruba</option>

                    <option value='Australia'>Australia</option>

                    <option value='Austria'>Austria</option>

                    <option value='Azerbaijan'>Azerbaijan</option>

                    <option value='Bahamas The'>Bahamas The</option>

                    <option value='Bahrain'>Bahrain</option>

                    <option value='Bangladesh'>Bangladesh</option>

                    <option value='Barbados'>Barbados</option>

                    <option value='Belarus'>Belarus</option>

                    <option value='Belgium'>Belgium</option>

                    <option value='Belize'>Belize</option>

                    <option value='Benin'>Benin</option>

                    <option value='Bermuda'>Bermuda</option>

                    <option value='Bhutan'>Bhutan</option>

                    <option value='Bolivia'>Bolivia</option>

                    <option value='Bosnia and Herzegovina'>
                      Bosnia and Herzegovina
                    </option>

                    <option value='Botswana'>Botswana</option>

                    <option value='Bouvet Island'>Bouvet Island</option>

                    <option value='Brazil'>Brazil</option>

                    <option value='British Indian Ocean Territory'>
                      British Indian Ocean Territory
                    </option>

                    <option value='Brunei'>Brunei</option>

                    <option value='Bulgaria'>Bulgaria</option>

                    <option value='Burkina Faso'>Burkina Faso</option>

                    <option value='Burundi'>Burundi</option>

                    <option value='Cambodia'>Cambodia</option>

                    <option value='Cameroon'>Cameroon</option>

                    <option value='Canada'>Canada</option>

                    <option value='Cape Verde'>Cape Verde</option>

                    <option value='Cayman Islands'>Cayman Islands</option>

                    <option value='Central African Republic'>
                      Central African Republic
                    </option>

                    <option value='Chad'>Chad</option>

                    <option value='Chile'>Chile</option>

                    <option value='China'>China</option>

                    <option value='Christmas Island'>Christmas Island</option>

                    <option value='Cocos (Keeling) Islands'>
                      Cocos (Keeling) Islands
                    </option>

                    <option value='Colombia'>Colombia</option>

                    <option value='Comoros'>Comoros</option>

                    <option value='Congo'>Congo</option>

                    <option value='Congo The Democratic Republic Of The'>
                      Congo The Democratic Republic Of The
                    </option>

                    <option value='Cook Islands'>Cook Islands</option>

                    <option value='Costa Rica'>Costa Rica</option>

                    <option value="Cote D'Ivoire (Ivory Coast)">
                      Cote D'Ivoire (Ivory Coast)
                    </option>

                    <option value='Croatia (Hrvatska)'>
                      Croatia (Hrvatska)
                    </option>

                    <option value='Cuba'>Cuba</option>

                    <option value='Cyprus'>Cyprus</option>

                    <option value='Czech Republic'>Czech Republic</option>

                    <option value='Denmark'>Denmark</option>

                    <option value='Djibouti'>Djibouti</option>

                    <option value='Dominica'>Dominica</option>

                    <option value='Dominican Republic'>
                      Dominican Republic
                    </option>

                    <option value='East Timor'>East Timor</option>

                    <option value='Ecuador'>Ecuador</option>

                    <option value='Egypt'>Egypt</option>

                    <option value='El Salvador'>El Salvador</option>

                    <option value='Equatorial Guinea'>Equatorial Guinea</option>

                    <option value='Eritrea'>Eritrea</option>

                    <option value='Estonia'>Estonia</option>

                    <option value='Ethiopia'>Ethiopia</option>

                    <option value='External Territories of Australia'>
                      External Territories of Australia
                    </option>

                    <option value='Falkland Islands'>Falkland Islands</option>

                    <option value='Faroe Islands'>Faroe Islands</option>

                    <option value='Fiji Islands'>Fiji Islands</option>

                    <option value='Finland'>Finland</option>

                    <option value='France'>France</option>

                    <option value='French Guiana'>French Guiana</option>

                    <option value='French Polynesia'>French Polynesia</option>

                    <option value='French Southern Territories'>
                      French Southern Territories
                    </option>

                    <option value='Gabon'>Gabon</option>

                    <option value='Gambia The'>Gambia The</option>

                    <option value='Georgia'>Georgia</option>

                    <option value='Germany'>Germany</option>

                    <option value='Ghana'>Ghana</option>

                    <option value='Gibraltar'>Gibraltar</option>

                    <option value='Greece'>Greece</option>

                    <option value='Greenland'>Greenland</option>

                    <option value='Grenada'>Grenada</option>

                    <option value='Guadeloupe'>Guadeloupe</option>

                    <option value='Guam'>Guam</option>

                    <option value='Guatemala'>Guatemala</option>

                    <option value='Guernsey and Alderney'>
                      Guernsey and Alderney
                    </option>

                    <option value='Guinea'>Guinea</option>

                    <option value='Guinea-Bissau'>Guinea-Bissau</option>

                    <option value='Guyana'>Guyana</option>

                    <option value='Haiti'>Haiti</option>

                    <option value='Heard and McDonald Islands'>
                      Heard and McDonald Islands
                    </option>

                    <option value='Honduras'>Honduras</option>

                    <option value='Hong Kong S.A.R.'>Hong Kong S.A.R.</option>

                    <option value='Hungary'>Hungary</option>

                    <option value='Iceland'>Iceland</option>

                    <option value='India'>India</option>

                    <option value='Indonesia'>Indonesia</option>

                    <option value='Iran'>Iran</option>

                    <option value='Iraq'>Iraq</option>

                    <option value='Ireland'>Ireland</option>

                    <option value='Israel'>Israel</option>

                    <option value='Italy'>Italy</option>

                    <option value='Jamaica'>Jamaica</option>

                    <option value='Japan'>Japan</option>

                    <option value='Jersey'>Jersey</option>

                    <option value='Jordan'>Jordan</option>

                    <option value='Kazakhstan'>Kazakhstan</option>

                    <option value='Kenya'>Kenya</option>

                    <option value='Kiribati'>Kiribati</option>

                    <option value='Korea North'>Korea North</option>

                    <option value='Korea South'>Korea South</option>

                    <option value='Kuwait'>Kuwait</option>

                    <option value='Kyrgyzstan'>Kyrgyzstan</option>

                    <option value='Laos'>Laos</option>

                    <option value='Latvia'>Latvia</option>

                    <option value='Lebanon'>Lebanon</option>

                    <option value='Lesotho'>Lesotho</option>

                    <option value='Liberia'>Liberia</option>

                    <option value='Libya'>Libya</option>

                    <option value='Liechtenstein'>Liechtenstein</option>

                    <option value='Lithuania'>Lithuania</option>

                    <option value='Luxembourg'>Luxembourg</option>

                    <option value='Macau S.A.R.'>Macau S.A.R.</option>

                    <option value='Macedonia'>Macedonia</option>

                    <option value='Madagascar'>Madagascar</option>

                    <option value='Malawi'>Malawi</option>

                    <option value='Malaysia'>Malaysia</option>

                    <option value='Maldives'>Maldives</option>

                    <option value='Mali'>Mali</option>

                    <option value='Malta'>Malta</option>

                    <option value='Man (Isle of)'>Man (Isle of)</option>

                    <option value='Marshall Islands'>Marshall Islands</option>

                    <option value='Martinique'>Martinique</option>

                    <option value='Mauritania'>Mauritania</option>

                    <option value='Mauritius'>Mauritius</option>

                    <option value='Mayotte'>Mayotte</option>

                    <option value='Mexico'>Mexico</option>

                    <option value='Micronesia'>Micronesia</option>

                    <option value='Moldova'>Moldova</option>

                    <option value='Monaco'>Monaco</option>

                    <option value='Mongolia'>Mongolia</option>

                    <option value='Montserrat'>Montserrat</option>

                    <option value='Morocco'>Morocco</option>

                    <option value='Mozambique'>Mozambique</option>

                    <option value='Myanmar'>Myanmar</option>

                    <option value='Namibia'>Namibia</option>

                    <option value='Nauru'>Nauru</option>

                    <option value='Nepal'>Nepal</option>

                    <option value='Netherlands Antilles'>
                      Netherlands Antilles
                    </option>

                    <option value='Netherlands The'>Netherlands The</option>

                    <option value='New Caledonia'>New Caledonia</option>

                    <option value='New Zealand'>New Zealand</option>

                    <option value='Nicaragua'>Nicaragua</option>

                    <option value='Niger'>Niger</option>

                    <option value='Nigeria'>Nigeria</option>

                    <option value='Niue'>Niue</option>

                    <option value='Norfolk Island'>Norfolk Island</option>

                    <option value='Northern Mariana Islands'>
                      Northern Mariana Islands
                    </option>

                    <option value='Norway'>Norway</option>

                    <option value='Oman'>Oman</option>

                    <option value='Pakistan'>Pakistan</option>

                    <option value='Palau'>Palau</option>

                    <option value='Palestinian Territory Occupied'>
                      Palestinian Territory Occupied
                    </option>

                    <option value='Panama'>Panama</option>

                    <option value='Papua new Guinea'>Papua new Guinea</option>

                    <option value='Paraguay'>Paraguay</option>

                    <option value='Peru'>Peru</option>

                    <option value='Philippines'>Philippines</option>

                    <option value='Pitcairn Island'>Pitcairn Island</option>

                    <option value='Poland'>Poland</option>

                    <option value='Portugal'>Portugal</option>

                    <option value='Puerto Rico'>Puerto Rico</option>

                    <option value='Qatar'>Qatar</option>

                    <option value='Reunion'>Reunion</option>

                    <option value='Romania'>Romania</option>

                    <option value='Russia'>Russia</option>

                    <option value='Rwanda'>Rwanda</option>

                    <option value='Saint Helena'>Saint Helena</option>

                    <option value='Saint Kitts And Nevis'>
                      Saint Kitts And Nevis
                    </option>

                    <option value='Saint Lucia'>Saint Lucia</option>

                    <option value='Saint Pierre and Miquelon'>
                      Saint Pierre and Miquelon
                    </option>

                    <option value='Saint Vincent And The Grenadines'>
                      Saint Vincent And The Grenadines
                    </option>

                    <option value='Samoa'>Samoa</option>

                    <option value='San Marino'>San Marino</option>

                    <option value='Sao Tome and Principe'>
                      Sao Tome and Principe
                    </option>

                    <option value='Saudi Arabia'>Saudi Arabia</option>

                    <option value='Senegal'>Senegal</option>

                    <option value='Serbia'>Serbia</option>

                    <option value='Seychelles'>Seychelles</option>

                    <option value='Sierra Leone'>Sierra Leone</option>

                    <option value='Singapore'>Singapore</option>

                    <option value='Slovakia'>Slovakia</option>

                    <option value='Slovenia'>Slovenia</option>

                    <option value='Smaller Territories of the UK'>
                      Smaller Territories of the UK
                    </option>

                    <option value='Solomon Islands'>Solomon Islands</option>

                    <option value='Somalia'>Somalia</option>

                    <option value='South Africa'>South Africa</option>

                    <option value='South Georgia'>South Georgia</option>

                    <option value='South Sudan'>South Sudan</option>

                    <option value='Spain'>Spain</option>

                    <option value='Sri Lanka'>Sri Lanka</option>

                    <option value='Sudan'>Sudan</option>

                    <option value='Suriname'>Suriname</option>

                    <option value='Svalbard And Jan Mayen Islands'>
                      Svalbard And Jan Mayen Islands
                    </option>

                    <option value='Swaziland'>Swaziland</option>

                    <option value='Sweden'>Sweden</option>

                    <option value='Switzerland'>Switzerland</option>

                    <option value='Syria'>Syria</option>

                    <option value='Taiwan'>Taiwan</option>

                    <option value='Tajikistan'>Tajikistan</option>

                    <option value='Tanzania'>Tanzania</option>

                    <option value='Thailand'>Thailand</option>

                    <option value='Togo'>Togo</option>

                    <option value='Tokelau'>Tokelau</option>

                    <option value='Tonga'>Tonga</option>

                    <option value='Trinidad And Tobago'>
                      Trinidad And Tobago
                    </option>

                    <option value='Tunisia'>Tunisia</option>

                    <option value='Turkey'>Turkey</option>

                    <option value='Turkmenistan'>Turkmenistan</option>

                    <option value='Turks And Caicos Islands'>
                      Turks And Caicos Islands
                    </option>

                    <option value='Tuvalu'>Tuvalu</option>

                    <option value='Uganda'>Uganda</option>

                    <option value='Ukraine'>Ukraine</option>

                    <option value='United Arab Emirates'>
                      United Arab Emirates
                    </option>

                    <option value='United Kingdom'>United Kingdom</option>

                    <option value='United States'>United States</option>

                    <option value='United States Minor Outlying Islands'>
                      United States Minor Outlying Islands
                    </option>

                    <option value='Uruguay'>Uruguay</option>

                    <option value='Uzbekistan'>Uzbekistan</option>

                    <option value='Vanuatu'>Vanuatu</option>

                    <option value='Vatican City State (Holy See)'>
                      Vatican City State (Holy See)
                    </option>

                    <option value='Venezuela'>Venezuela</option>

                    <option value='Vietnam'>Vietnam</option>

                    <option value='Virgin Islands (British)'>
                      Virgin Islands (British)
                    </option>

                    <option value='Virgin Islands (US)'>
                      Virgin Islands (US)
                    </option>

                    <option value='Wallis And Futuna Islands'>
                      Wallis And Futuna Islands
                    </option>

                    <option value='Western Sahara'>Western Sahara</option>

                    <option value='Yemen'>Yemen</option>

                    <option value='Yugoslavia'>Yugoslavia</option>

                    <option value='Zambia'>Zambia</option>

                    <option value='Zimbabwe'>Zimbabwe</option>

                    <option value='Kosovo'>Kosovo</option>
                  </select>
                </form>
                <span id='country_val' className='validation_msg'></span>
              </Col>

              <Col class='col-4'>
                <label for='basicInput'>Mobile Number</label>
                <div className='row match-height'>
                  <Col className='col-3'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        id='phone_code'
                        name='phone_code'
                        value='+91'
                        readonly=''
                      />
                    </div>
                  </Col>
                  <Col className='col-9'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        id='id_mob_no'
                        name='mob_no'
                        placeholder='Mobile Number'
                        onclick="clearError('mob_no_val')"
                        onkeypress='return event.charCode >= 48 &amp;&amp; event.charCode <= 57'
                      />
                    </div>
                  </Col>
                </div>

                <span id='mob_no_val' className='validation_msg'></span>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col className='col-xl-4 col-md-6 col-12 mb-1'>
                <div className='form-group'>
                  <label for='basicInput'> Alternate Mobile Number</label>
                  <input
                    type='text'
                    maxlength='10'
                    className='form-control'
                    id='id_alt_mob_no'
                    name='alt_mob_no'
                    placeholder='Mobile Number'
                    onclick="clearError('mob_no_val')"
                    onkeypress='return event.charCode >= 48 &amp;&amp; event.charCode <= 57'
                  />
                </div>

                <span id='mob_no_val' className='validation_msg'></span>
              </Col>
              <Col className='col-xl-4 col-md-6 col-12 mb-1'>
                <div className='form-group'>
                  <label for='Last_Name'>Landline Number</label>

                  <input
                    type='text'
                    maxlength='10'
                    className='form-control'
                    id='landline1'
                    name='landline1'
                    placeholder='Landline Number'
                    onclick="clearError('mob_no_val')"
                    onkeypress='return event.charCode >= 48 &amp;&amp; event.charCode <= 57'
                  />
                </div>
                <span id='landline1_val' className='validation_msg'></span>
              </Col>
              <div className='col-xl-4 col-md-6 col-12 mb-1'>
                <div className='form-group'>
                  <label for='Last_Name'> Alternate Landline Number</label>

                  <input
                    type='text'
                    maxlength='10'
                    className='form-control'
                    id='landline1'
                    name='landline1'
                    placeholder='Landline Number'
                    onclick="clearError('mob_no_val')"
                    onkeypress='return event.charCode >= 48 &amp;&amp; event.charCode <= 57'
                  />
                </div>
                <span id='landline1_val' className='validation_msg'></span>
              </div>
            </Row>
            <div className='d-flex justify-content-sm-between'>
              <div>
                <a
                  className='btn btn-primary waves-effect waves-float waves-light'
                  onclick='next_bill()'
                >
                  Back
                </a>
                <a
                  className='btn btn-primary waves-effect waves-float waves-light'
                  href='/merchant/customer/leads_dashboard/'
                >
                  Cancel
                </a>
              </div>
              <div>
                <button
                  type='button'
                  className='btn btn-primary waves-effect waves-float waves-light'
                  onclick="add_customers_validation('save_basic')"
                  value='SAVE'
                >
                  Save
                </button>
                <a
                  className='btn btn-primary waves-effect waves-float waves-light'
                  onclick="add_customers_validation('next_personal');"
                  value='Next'
                >
                  Next
                </a>
              </div>
            </div>
            <br />
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export default Addlead
