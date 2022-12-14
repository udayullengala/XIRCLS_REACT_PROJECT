import React from "react"
import { Card, CardBody } from "reactstrap"
import { Col, Row } from "react-bootstrap"

const Basic = () => {
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
                className='nav-link d-flex align-items-center  active'
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
                
                                <h4 class="mt-1 my-2">Basic Details</h4>

                                    <input type="hidden" name="object_id" value=""/>
                                
                                    <input type="hidden" name="method" id="method"/>
                                    
                                    <Row class="row">
                                        <Col xl={4} md={6} class="col-12 mb-1">
                                            <div class="form-group">
                                                <label for="basicInput">First Name</label>
                                                <input type="text" class="form-control" placeholder="First Name"/>
                                            </div>
                                            <span id="basic_cust_name_val" class="validation_msg"></span>
                                        </Col>

                                        <Col xl={4} md={6} class="col-12 mb-1">
                                            <div class="form-group">
                                                <label for="Last_Name">Last Name</label>
                
                                                <input type="text" class="form-control" id="basic_id_cust_last_name" name="basic_cust_last_name" placeholder="Last Name"/>
                                            </div>
                                            <span id="basic_cust_lastname_val" class="validation_msg"></span>
                                        </Col>
                                        <Col xl={4} md={6} class="col-12 mb-1">
                                            <div class="form-group">
                                                <label for="basic_edit_email">Email</label>
                                                <input type="email" class="form-control" placeholder="Email" name="basic_email" id="basic_email"/>
                                                <span id="basic_email_val" class="validation_msg"></span>
                                            </div>
                                            
                                        </Col>
                                        
                                        
                                        <Col xl={4} md={6} class="col-12 mb-1">
                                        <br />
                                        <br />
                                            <div class="form-group">
                                                <label for="basicInput">Country Code (Mobile Number)</label>
                                                
                                                <select name="country_code" id="country_code" class="form-control">
                                                   
                                                    
                                                    <option value="+93">Afghanistan (+93)</option>
                                                    
                                                    
                                                    <option value="+355">Albania (+355)</option>
                                                    
                                                    
                                                    <option value="+213">Algeria (+213)</option>
                                                    
                                                    
                                                    <option value="+1684">American Samoa (+1684)</option>
                                                    
                                                    
                                                    <option value="+376">Andorra (+376)</option>
                                                    
                                                    
                                                    <option value="+244">Angola (+244)</option>
                                                    
                                                    
                                                    <option value="+1264">Anguilla (+1264)</option>
                                                    
                                                    
                                                    <option value="+0">Antarctica (+0)</option>
                                                    
                                                    
                                                    <option value="+1268">Antigua And Barbuda (+1268)</option>
                                                    
                                                    
                                                    <option value="+54">Argentina (+54)</option>
                                                    
                                                    
                                                    <option value="+374">Armenia (+374)</option>
                                                    
                                                    
                                                    <option value="+297">Aruba (+297)</option>
                                                    
                                                    
                                                    <option value="+61">Australia (+61)</option>
                                                    
                                                    
                                                    <option value="+43">Austria (+43)</option>
                                                    
                                                    
                                                    <option value="+994">Azerbaijan (+994)</option>
                                                    
                                                    
                                                    <option value="+1242">Bahamas The (+1242)</option>
                                                    
                                                    
                                                    <option value="+973">Bahrain (+973)</option>
                                                    
                                                    
                                                    <option value="+880">Bangladesh (+880)</option>
                                                    
                                                    
                                                    <option value="+1246">Barbados (+1246)</option>
                                                    
                                                    
                                                    <option value="+375">Belarus (+375)</option>
                                                    
                                                    
                                                    <option value="+32">Belgium (+32)</option>
                                                    
                                                    
                                                    <option value="+501">Belize (+501)</option>
                                                    
                                                    
                                                    <option value="+229">Benin (+229)</option>
                                                    
                                                    
                                                    <option value="+1441">Bermuda (+1441)</option>
                                                    
                                                    
                                                    <option value="+975">Bhutan (+975)</option>
                                                    
                                                    
                                                    <option value="+591">Bolivia (+591)</option>
                                                    
                                                    
                                                    <option value="+387">Bosnia and Herzegovina (+387)</option>
                                                    
                                                    
                                                    <option value="+267">Botswana (+267)</option>
                                                    
                                                    
                                                    <option value="+0">Bouvet Island (+0)</option>
                                                    
                                                    
                                                    <option value="+55">Brazil (+55)</option>
                                                    
                                                    
                                                    <option value="+246">British Indian Ocean Territory (+246)</option>
                                                    
                                                    
                                                    <option value="+673">Brunei (+673)</option>
                                                    
                                                    
                                                    <option value="+359">Bulgaria (+359)</option>
                                                    
                                                    
                                                    <option value="+226">Burkina Faso (+226)</option>
                                                    
                                                    
                                                    <option value="+257">Burundi (+257)</option>
                                                    
                                                    
                                                    <option value="+855">Cambodia (+855)</option>
                                                    
                                                    
                                                    <option value="+237">Cameroon (+237)</option>
                                                    
                                                    
                                                    <option value="+1">Canada (+1)</option>
                                                    
                                                    
                                                    <option value="+238">Cape Verde (+238)</option>
                                                    
                                                    
                                                    <option value="+1345">Cayman Islands (+1345)</option>
                                                    
                                                    
                                                    <option value="+236">Central African Republic (+236)</option>
                                                    
                                                    
                                                    <option value="+235">Chad (+235)</option>
                                                    
                                                    
                                                    <option value="+56">Chile (+56)</option>
                                                    
                                                    
                                                    <option value="+86">China (+86)</option>
                                                    
                                                    
                                                    <option value="+61">Christmas Island (+61)</option>
                                                    
                                                    
                                                    <option value="+672">Cocos (Keeling) Islands (+672)</option>
                                                    
                                                    
                                                    <option value="+57">Colombia (+57)</option>
                                                    
                                                    
                                                    <option value="+269">Comoros (+269)</option>
                                                    
                                                    
                                                    <option value="+242">Congo (+242)</option>
                                                    
                                                    
                                                    <option value="+242">Congo The Democratic Republic Of The (+242)</option>
                                                    
                                                    
                                                    <option value="+682">Cook Islands (+682)</option>
                                                    
                                                    
                                                    <option value="+506">Costa Rica (+506)</option>
                                                    
                                                    
                                                    <option value="+225">Cote D'Ivoire (Ivory Coast) (+225)</option>
                                                    
                                                    
                                                    <option value="+385">Croatia (Hrvatska) (+385)</option>
                                                    
                                                    
                                                    <option value="+53">Cuba (+53)</option>
                                                    
                                                    
                                                    <option value="+357">Cyprus (+357)</option>
                                                    
                                                    
                                                    <option value="+420">Czech Republic (+420)</option>
                                                    
                                                    
                                                    <option value="+45">Denmark (+45)</option>
                                                    
                                                    
                                                    <option value="+253">Djibouti (+253)</option>
                                                    
                                                    
                                                    <option value="+1767">Dominica (+1767)</option>
                                                    
                                                    
                                                    <option value="+1809">Dominican Republic (+1809)</option>
                                                    
                                                    
                                                    <option value="+670">East Timor (+670)</option>
                                                    
                                                    
                                                    <option value="+593">Ecuador (+593)</option>
                                                    
                                                    
                                                    <option value="+20">Egypt (+20)</option>
                                                    
                                                    
                                                    <option value="+503">El Salvador (+503)</option>
                                                    
                                                    
                                                    <option value="+240">Equatorial Guinea (+240)</option>
                                                    
                                                    
                                                    <option value="+291">Eritrea (+291)</option>
                                                    
                                                    
                                                    <option value="+372">Estonia (+372)</option>
                                                    
                                                    
                                                    <option value="+251">Ethiopia (+251)</option>
                                                    
                                                    
                                                    <option value="+61">External Territories of Australia (+61)</option>
                                                    
                                                    
                                                    <option value="+500">Falkland Islands (+500)</option>
                                                    
                                                    
                                                    <option value="+298">Faroe Islands (+298)</option>
                                                    
                                                    
                                                    <option value="+679">Fiji Islands (+679)</option>
                                                    
                                                    
                                                    <option value="+358">Finland (+358)</option>
                                                    
                                                    
                                                    <option value="+33">France (+33)</option>
                                                    
                                                    
                                                    <option value="+594">French Guiana (+594)</option>
                                                    
                                                    
                                                    <option value="+689">French Polynesia (+689)</option>
                                                    
                                                    
                                                    <option value="+0">French Southern Territories (+0)</option>
                                                    
                                                    
                                                    <option value="+241">Gabon (+241)</option>
                                                    
                                                    
                                                    <option value="+220">Gambia The (+220)</option>
                                                    
                                                    
                                                    <option value="+995">Georgia (+995)</option>
                                                    
                                                    
                                                    <option value="+49">Germany (+49)</option>
                                                    
                                                    
                                                    <option value="+233">Ghana (+233)</option>
                                                    
                                                    
                                                    <option value="+350">Gibraltar (+350)</option>
                                                    
                                                    
                                                    <option value="+30">Greece (+30)</option>
                                                    
                                                    
                                                    <option value="+299">Greenland (+299)</option>
                                                    
                                                    
                                                    <option value="+1473">Grenada (+1473)</option>
                                                    
                                                    
                                                    <option value="+590">Guadeloupe (+590)</option>
                                                    
                                                    
                                                    <option value="+1671">Guam (+1671)</option>
                                                    
                                                    
                                                    <option value="+502">Guatemala (+502)</option>
                                                    
                                                    
                                                    <option value="+44">Guernsey and Alderney (+44)</option>
                                                    
                                                    
                                                    <option value="+224">Guinea (+224)</option>
                                                    
                                                    
                                                    <option value="+245">Guinea-Bissau (+245)</option>
                                                    
                                                    
                                                    <option value="+592">Guyana (+592)</option>
                                                    
                                                    
                                                    <option value="+509">Haiti (+509)</option>
                                                    
                                                    
                                                    <option value="+0">Heard and McDonald Islands (+0)</option>
                                                    
                                                    
                                                    <option value="+504">Honduras (+504)</option>
                                                    
                                                    
                                                    <option value="+852">Hong Kong S.A.R. (+852)</option>
                                                    
                                                    
                                                    <option value="+36">Hungary (+36)</option>
                                                    
                                                    
                                                    <option value="+354">Iceland (+354)</option>
                                                    
                                                    
                                                    <option value="+91">India (+91)</option>
                                                    
                                                    
                                                    <option value="+62">Indonesia (+62)</option>
                                                    
                                                    
                                                    <option value="+98">Iran (+98)</option>
                                                    
                                                    
                                                    <option value="+964">Iraq (+964)</option>
                                                    
                                                    
                                                    <option value="+353">Ireland (+353)</option>
                                                    
                                                    
                                                    <option value="+972">Israel (+972)</option>
                                                    
                                                    
                                                    <option value="+39">Italy (+39)</option>
                                                    
                                                    
                                                    <option value="+1876">Jamaica (+1876)</option>
                                                    
                                                    
                                                    <option value="+81">Japan (+81)</option>
                                                    
                                                    
                                                    <option value="+44">Jersey (+44)</option>
                                                    
                                                    
                                                    <option value="+962">Jordan (+962)</option>
                                                    
                                                    
                                                    <option value="+7">Kazakhstan (+7)</option>
                                                    
                                                    
                                                    <option value="+254">Kenya (+254)</option>
                                                    
                                                    
                                                    <option value="+686">Kiribati (+686)</option>
                                                    
                                                    
                                                    <option value="+850">Korea North (+850)</option>
                                                    
                                                    
                                                    <option value="+82">Korea South (+82)</option>
                                                    
                                                    
                                                    <option value="+965">Kuwait (+965)</option>
                                                    
                                                    
                                                    <option value="+996">Kyrgyzstan (+996)</option>
                                                    
                                                    
                                                    <option value="+856">Laos (+856)</option>
                                                    
                                                    
                                                    <option value="+371">Latvia (+371)</option>
                                                    
                                                    
                                                    <option value="+961">Lebanon (+961)</option>
                                                    
                                                    
                                                    <option value="+266">Lesotho (+266)</option>
                                                    
                                                    
                                                    <option value="+231">Liberia (+231)</option>
                                                    
                                                    
                                                    <option value="+218">Libya (+218)</option>
                                                    
                                                    
                                                    <option value="+423">Liechtenstein (+423)</option>
                                                    
                                                    
                                                    <option value="+370">Lithuania (+370)</option>
                                                    
                                                    
                                                    <option value="+352">Luxembourg (+352)</option>
                                                    
                                                    
                                                    <option value="+853">Macau S.A.R. (+853)</option>
                                                    
                                                    
                                                    <option value="+389">Macedonia (+389)</option>
                                                    
                                                    
                                                    <option value="+261">Madagascar (+261)</option>
                                                    
                                                    
                                                    <option value="+265">Malawi (+265)</option>
                                                    
                                                    
                                                    <option value="+60">Malaysia (+60)</option>
                                                    
                                                    
                                                    <option value="+960">Maldives (+960)</option>
                                                    
                                                    
                                                    <option value="+223">Mali (+223)</option>
                                                    
                                                    
                                                    <option value="+356">Malta (+356)</option>
                                                    
                                                    
                                                    <option value="+44">Man (Isle of) (+44)</option>
                                                    
                                                    
                                                    <option value="+692">Marshall Islands (+692)</option>
                                                    
                                                    
                                                    <option value="+596">Martinique (+596)</option>
                                                    
                                                    
                                                    <option value="+222">Mauritania (+222)</option>
                                                    
                                                    
                                                    <option value="+230">Mauritius (+230)</option>
                                                    
                                                    
                                                    <option value="+269">Mayotte (+269)</option>
                                                    
                                                    
                                                    <option value="+52">Mexico (+52)</option>
                                                    
                                                    
                                                    <option value="+691">Micronesia (+691)</option>
                                                    
                                                    
                                                    <option value="+373">Moldova (+373)</option>
                                                    
                                                    
                                                    <option value="+377">Monaco (+377)</option>
                                                    
                                                    
                                                    <option value="+976">Mongolia (+976)</option>
                                                    
                                                    
                                                    <option value="+1664">Montserrat (+1664)</option>
                                                    
                                                    
                                                    <option value="+212">Morocco (+212)</option>
                                                    
                                                    
                                                    <option value="+258">Mozambique (+258)</option>
                                                    
                                                    
                                                    <option value="+95">Myanmar (+95)</option>
                                                    
                                                    
                                                    <option value="+264">Namibia (+264)</option>
                                                    
                                                    
                                                    <option value="+674">Nauru (+674)</option>
                                                    
                                                    
                                                    <option value="+977">Nepal (+977)</option>
                                                    
                                                    
                                                    <option value="+599">Netherlands Antilles (+599)</option>
                                                    
                                                    
                                                    <option value="+31">Netherlands The (+31)</option>
                                                    
                                                    
                                                    <option value="+687">New Caledonia (+687)</option>
                                                    
                                                    
                                                    <option value="+64">New Zealand (+64)</option>
                                                    
                                                    
                                                    <option value="+505">Nicaragua (+505)</option>
                                                    
                                                    
                                                    <option value="+227">Niger (+227)</option>
                                                    
                                                    
                                                    <option value="+234">Nigeria (+234)</option>
                                                    
                                                    
                                                    <option value="+683">Niue (+683)</option>
                                                    
                                                    
                                                    <option value="+672">Norfolk Island (+672)</option>
                                                    
                                                    
                                                    <option value="+1670">Northern Mariana Islands (+1670)</option>
                                                    
                                                    
                                                    <option value="+47">Norway (+47)</option>
                                                    
                                                    
                                                    <option value="+968">Oman (+968)</option>
                                                    
                                                    
                                                    <option value="+92">Pakistan (+92)</option>
                                                    
                                                    
                                                    <option value="+680">Palau (+680)</option>
                                                    
                                                    
                                                    <option value="+970">Palestinian Territory Occupied (+970)</option>
                                                    
                                                    
                                                    <option value="+507">Panama (+507)</option>
                                                    
                                                    
                                                    <option value="+675">Papua new Guinea (+675)</option>
                                                    
                                                    
                                                    <option value="+595">Paraguay (+595)</option>
                                                    
                                                    
                                                    <option value="+51">Peru (+51)</option>
                                                    
                                                    
                                                    <option value="+63">Philippines (+63)</option>
                                                    
                                                    
                                                    <option value="+0">Pitcairn Island (+0)</option>
                                                    
                                                    
                                                    <option value="+48">Poland (+48)</option>
                                                    
                                                    
                                                    <option value="+351">Portugal (+351)</option>
                                                    
                                                    
                                                    <option value="+1787">Puerto Rico (+1787)</option>
                                                    
                                                    
                                                    <option value="+974">Qatar (+974)</option>
                                                    
                                                    
                                                    <option value="+262">Reunion (+262)</option>
                                                    
                                                    
                                                    <option value="+40">Romania (+40)</option>
                                                    
                                                    
                                                    <option value="+70">Russia (+70)</option>
                                                    
                                                    
                                                    <option value="+250">Rwanda (+250)</option>
                                                    
                                                    
                                                    <option value="+290">Saint Helena (+290)</option>
                                                    
                                                    
                                                    <option value="+1869">Saint Kitts And Nevis (+1869)</option>
                                                    
                                                    
                                                    <option value="+1758">Saint Lucia (+1758)</option>
                                                    
                                                    
                                                    <option value="+508">Saint Pierre and Miquelon (+508)</option>
                                                    
                                                    
                                                    <option value="+1784">Saint Vincent And The Grenadines (+1784)</option>
                                                    
                                                    
                                                    <option value="+684">Samoa (+684)</option>
                                                    
                                                    
                                                    <option value="+378">San Marino (+378)</option>
                                                    
                                                    
                                                    <option value="+239">Sao Tome and Principe (+239)</option>
                                                    
                                                    
                                                    <option value="+966">Saudi Arabia (+966)</option>
                                                    
                                                    
                                                    <option value="+221">Senegal (+221)</option>
                                                    
                                                    
                                                    <option value="+381">Serbia (+381)</option>
                                                    
                                                    
                                                    <option value="+248">Seychelles (+248)</option>
                                                    
                                                    
                                                    <option value="+232">Sierra Leone (+232)</option>
                                                    
                                                    
                                                    <option value="+65">Singapore (+65)</option>
                                                    
                                                    
                                                    <option value="+421">Slovakia (+421)</option>
                                                    
                                                    
                                                    <option value="+386">Slovenia (+386)</option>
                                                    
                                                    
                                                    <option value="+44">Smaller Territories of the UK (+44)</option>
                                                    
                                                    
                                                    <option value="+677">Solomon Islands (+677)</option>
                                                    
                                                    
                                                    <option value="+252">Somalia (+252)</option>
                                                    
                                                    
                                                    <option value="+27">South Africa (+27)</option>
                                                    
                                                    
                                                    <option value="+0">South Georgia (+0)</option>
                                                    
                                                    
                                                    <option value="+211">South Sudan (+211)</option>
                                                    
                                                    
                                                    <option value="+34">Spain (+34)</option>
                                                    
                                                    
                                                    <option value="+94">Sri Lanka (+94)</option>
                                                    
                                                    
                                                    <option value="+249">Sudan (+249)</option>
                                                    
                                                    
                                                    <option value="+597">Suriname (+597)</option>
                                                    
                                                    
                                                    <option value="+47">Svalbard And Jan Mayen Islands (+47)</option>
                                                    
                                                    
                                                    <option value="+268">Swaziland (+268)</option>
                                                    
                                                    
                                                    <option value="+46">Sweden (+46)</option>
                                                    
                                                    
                                                    <option value="+41">Switzerland (+41)</option>
                                                    
                                                    
                                                    <option value="+963">Syria (+963)</option>
                                                    
                                                    
                                                    <option value="+886">Taiwan (+886)</option>
                                                    
                                                    
                                                    <option value="+992">Tajikistan (+992)</option>
                                                    
                                                    
                                                    <option value="+255">Tanzania (+255)</option>
                                                    
                                                    
                                                    <option value="+66">Thailand (+66)</option>
                                                    
                                                    
                                                    <option value="+228">Togo (+228)</option>
                                                    
                                                    
                                                    <option value="+690">Tokelau (+690)</option>
                                                    
                                                    
                                                    <option value="+676">Tonga (+676)</option>
                                                    
                                                    
                                                    <option value="+1868">Trinidad And Tobago (+1868)</option>
                                                    
                                                    
                                                    <option value="+216">Tunisia (+216)</option>
                                                    
                                                    
                                                    <option value="+90">Turkey (+90)</option>
                                                    
                                                    
                                                    <option value="+7370">Turkmenistan (+7370)</option>
                                                    
                                                    
                                                    <option value="+1649">Turks And Caicos Islands (+1649)</option>
                                                    
                                                    
                                                    <option value="+688">Tuvalu (+688)</option>
                                                    
                                                    
                                                    <option value="+256">Uganda (+256)</option>
                                                    
                                                    
                                                    <option value="+380">Ukraine (+380)</option>
                                                    
                                                    
                                                    <option value="+971">United Arab Emirates (+971)</option>
                                                    
                                                    
                                                    <option value="+44">United Kingdom (+44)</option>
                                                    
                                                    
                                                    <option value="+1">United States (+1)</option>
                                                    
                                                    
                                                    <option value="+1">United States Minor Outlying Islands (+1)</option>
                                                    
                                                    
                                                    <option value="+598">Uruguay (+598)</option>
                                                    
                                                    
                                                    <option value="+998">Uzbekistan (+998)</option>
                                                    
                                                    
                                                    <option value="+678">Vanuatu (+678)</option>
                                                    
                                                    
                                                    <option value="+39">Vatican City State (Holy See) (+39)</option>
                                                    
                                                    
                                                    <option value="+58">Venezuela (+58)</option>
                                                    
                                                    
                                                    <option value="+84">Vietnam (+84)</option>
                                                    
                                                    
                                                    <option value="+1284">Virgin Islands (British) (+1284)</option>
                                                    
                                                    
                                                    <option value="+1340">Virgin Islands (US) (+1340)</option>
                                                    
                                                    
                                                    <option value="+681">Wallis And Futuna Islands (+681)</option>
                                                    
                                                    
                                                    <option value="+212">Western Sahara (+212)</option>
                                                    
                                                    
                                                    <option value="+967">Yemen (+967)</option>
                                                    
                                                    
                                                    <option value="+38">Yugoslavia (+38)</option>
                                                    
                                                    
                                                    <option value="+260">Zambia (+260)</option>
                                                    
                                                    
                                                    <option value="+263">Zimbabwe (+263)</option>
                                                    
                                                    
                                                    <option value="+383">Kosovo (+383)</option>
                                                    
                                                    
                                                </select>
                                            </div>
                                            

                                            <span id="country_code_val" class="validation_msg"></span>
                                        </Col>

                                    
                                        <Col xl={4} md={6} class="col-12 mb-1">
                                        <br />
                                        <br />
                                            <div class="form-group">

                                                <label for="basicInput">Mobile Number</label>
                                                <input type="text" class="form-control" id="basic_id_mob_no" name="basic_mob_no" placeholder="Mobile Number" onclick="clearError('basic_mob_no_val')" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57" value=""/>
                                                    <span id="basic_mob_no_val" class="validation_msg"></span>
                                            </div>
                                            
                                        </Col>

                                        <Col xl={4} md={6} class="col-12 mb-1">
                                        <br />
                                        <br />
                                            <div class="form-group">
                                                <label for="basic_linkdin">Linkedin ID</label>
                
                                                <input type="text" class="form-control" id="basic_id_linkdin" name="basic_linkdin" placeholder="LinkedIn ID"/>
                                                <span id="basic_linkdin" class="validation_msg"></span>
                                            </div>
                                        </Col>
                                        
                                        <br />
                                        
                                        <Col xl={4} md={6} class="col-12 mb-1">
                                        <br />
                                        <br />
                                            <div class="form-group">
                                                <label for="basicInput">Country Code (Whatsapp Number)</label>
                                                
                                                <select name="wa_country_code" id="wa_country_code" class="form-control">
                                                   
                                                    
                                                    <option value="+93">Afghanistan (+93)</option>
                                                    
                                                    
                                                    <option value="+355">Albania (+355)</option>
                                                    
                                                    
                                                    <option value="+213">Algeria (+213)</option>
                                                    
                                                    
                                                    <option value="+1684">American Samoa (+1684)</option>
                                                    
                                                    
                                                    <option value="+376">Andorra (+376)</option>
                                                    
                                                    
                                                    <option value="+244">Angola (+244)</option>
                                                    
                                                    
                                                    <option value="+1264">Anguilla (+1264)</option>
                                                    
                                                    
                                                    <option value="+0">Antarctica (+0)</option>
                                                    
                                                    
                                                    <option value="+1268">Antigua And Barbuda (+1268)</option>
                                                    
                                                    
                                                    <option value="+54">Argentina (+54)</option>
                                                    
                                                    
                                                    <option value="+374">Armenia (+374)</option>
                                                    
                                                    
                                                    <option value="+297">Aruba (+297)</option>
                                                    
                                                    
                                                    <option value="+61">Australia (+61)</option>
                                                    
                                                    
                                                    <option value="+43">Austria (+43)</option>
                                                    
                                                    
                                                    <option value="+994">Azerbaijan (+994)</option>
                                                    
                                                    
                                                    <option value="+1242">Bahamas The (+1242)</option>
                                                    
                                                    
                                                    <option value="+973">Bahrain (+973)</option>
                                                    
                                                    
                                                    <option value="+880">Bangladesh (+880)</option>
                                                    
                                                    
                                                    <option value="+1246">Barbados (+1246)</option>
                                                    
                                                    
                                                    <option value="+375">Belarus (+375)</option>
                                                    
                                                    
                                                    <option value="+32">Belgium (+32)</option>
                                                    
                                                    
                                                    <option value="+501">Belize (+501)</option>
                                                    
                                                    
                                                    <option value="+229">Benin (+229)</option>
                                                    
                                                    
                                                    <option value="+1441">Bermuda (+1441)</option>
                                                    
                                                    
                                                    <option value="+975">Bhutan (+975)</option>
                                                    
                                                    
                                                    <option value="+591">Bolivia (+591)</option>
                                                    
                                                    
                                                    <option value="+387">Bosnia and Herzegovina (+387)</option>
                                                    
                                                    
                                                    <option value="+267">Botswana (+267)</option>
                                                    
                                                    
                                                    <option value="+0">Bouvet Island (+0)</option>
                                                    
                                                    
                                                    <option value="+55">Brazil (+55)</option>
                                                    
                                                    
                                                    <option value="+246">British Indian Ocean Territory (+246)</option>
                                                    
                                                    
                                                    <option value="+673">Brunei (+673)</option>
                                                    
                                                    
                                                    <option value="+359">Bulgaria (+359)</option>
                                                    
                                                    
                                                    <option value="+226">Burkina Faso (+226)</option>
                                                    
                                                    
                                                    <option value="+257">Burundi (+257)</option>
                                                    
                                                    
                                                    <option value="+855">Cambodia (+855)</option>
                                                    
                                                    
                                                    <option value="+237">Cameroon (+237)</option>
                                                    
                                                    
                                                    <option value="+1">Canada (+1)</option>
                                                    
                                                    
                                                    <option value="+238">Cape Verde (+238)</option>
                                                    
                                                    
                                                    <option value="+1345">Cayman Islands (+1345)</option>
                                                    
                                                    
                                                    <option value="+236">Central African Republic (+236)</option>
                                                    
                                                    
                                                    <option value="+235">Chad (+235)</option>
                                                    
                                                    
                                                    <option value="+56">Chile (+56)</option>
                                                    
                                                    
                                                    <option value="+86">China (+86)</option>
                                                    
                                                    
                                                    <option value="+61">Christmas Island (+61)</option>
                                                    
                                                    
                                                    <option value="+672">Cocos (Keeling) Islands (+672)</option>
                                                    
                                                    
                                                    <option value="+57">Colombia (+57)</option>
                                                    
                                                    
                                                    <option value="+269">Comoros (+269)</option>
                                                    
                                                    
                                                    <option value="+242">Congo (+242)</option>
                                                    
                                                    
                                                    <option value="+242">Congo The Democratic Republic Of The (+242)</option>
                                                    
                                                    
                                                    <option value="+682">Cook Islands (+682)</option>
                                                    
                                                    
                                                    <option value="+506">Costa Rica (+506)</option>
                                                    
                                                    
                                                    <option value="+225">Cote D'Ivoire (Ivory Coast) (+225)</option>
                                                    
                                                    
                                                    <option value="+385">Croatia (Hrvatska) (+385)</option>
                                                    
                                                    
                                                    <option value="+53">Cuba (+53)</option>
                                                    
                                                    
                                                    <option value="+357">Cyprus (+357)</option>
                                                    
                                                    
                                                    <option value="+420">Czech Republic (+420)</option>
                                                    
                                                    
                                                    <option value="+45">Denmark (+45)</option>
                                                    
                                                    
                                                    <option value="+253">Djibouti (+253)</option>
                                                    
                                                    
                                                    <option value="+1767">Dominica (+1767)</option>
                                                    
                                                    
                                                    <option value="+1809">Dominican Republic (+1809)</option>
                                                    
                                                    
                                                    <option value="+670">East Timor (+670)</option>
                                                    
                                                    
                                                    <option value="+593">Ecuador (+593)</option>
                                                    
                                                    
                                                    <option value="+20">Egypt (+20)</option>
                                                    
                                                    
                                                    <option value="+503">El Salvador (+503)</option>
                                                    
                                                    
                                                    <option value="+240">Equatorial Guinea (+240)</option>
                                                    
                                                    
                                                    <option value="+291">Eritrea (+291)</option>
                                                    
                                                    
                                                    <option value="+372">Estonia (+372)</option>
                                                    
                                                    
                                                    <option value="+251">Ethiopia (+251)</option>
                                                    
                                                    
                                                    <option value="+61">External Territories of Australia (+61)</option>
                                                    
                                                    
                                                    <option value="+500">Falkland Islands (+500)</option>
                                                    
                                                    
                                                    <option value="+298">Faroe Islands (+298)</option>
                                                    
                                                    
                                                    <option value="+679">Fiji Islands (+679)</option>
                                                    
                                                    
                                                    <option value="+358">Finland (+358)</option>
                                                    
                                                    
                                                    <option value="+33">France (+33)</option>
                                                    
                                                    
                                                    <option value="+594">French Guiana (+594)</option>
                                                    
                                                    
                                                    <option value="+689">French Polynesia (+689)</option>
                                                    
                                                    
                                                    <option value="+0">French Southern Territories (+0)</option>
                                                    
                                                    
                                                    <option value="+241">Gabon (+241)</option>
                                                    
                                                    
                                                    <option value="+220">Gambia The (+220)</option>
                                                    
                                                    
                                                    <option value="+995">Georgia (+995)</option>
                                                    
                                                    
                                                    <option value="+49">Germany (+49)</option>
                                                    
                                                    
                                                    <option value="+233">Ghana (+233)</option>
                                                    
                                                    
                                                    <option value="+350">Gibraltar (+350)</option>
                                                    
                                                    
                                                    <option value="+30">Greece (+30)</option>
                                                    
                                                    
                                                    <option value="+299">Greenland (+299)</option>
                                                    
                                                    
                                                    <option value="+1473">Grenada (+1473)</option>
                                                    
                                                    
                                                    <option value="+590">Guadeloupe (+590)</option>
                                                    
                                                    
                                                    <option value="+1671">Guam (+1671)</option>
                                                    
                                                    
                                                    <option value="+502">Guatemala (+502)</option>
                                                    
                                                    
                                                    <option value="+44">Guernsey and Alderney (+44)</option>
                                                    
                                                    
                                                    <option value="+224">Guinea (+224)</option>
                                                    
                                                    
                                                    <option value="+245">Guinea-Bissau (+245)</option>
                                                    
                                                    
                                                    <option value="+592">Guyana (+592)</option>
                                                    
                                                    
                                                    <option value="+509">Haiti (+509)</option>
                                                    
                                                    
                                                    <option value="+0">Heard and McDonald Islands (+0)</option>
                                                    
                                                    
                                                    <option value="+504">Honduras (+504)</option>
                                                    
                                                    
                                                    <option value="+852">Hong Kong S.A.R. (+852)</option>
                                                    
                                                    
                                                    <option value="+36">Hungary (+36)</option>
                                                    
                                                    
                                                    <option value="+354">Iceland (+354)</option>
                                                    
                                                    
                                                    <option value="+91">India (+91)</option>
                                                    
                                                    
                                                    <option value="+62">Indonesia (+62)</option>
                                                    
                                                    
                                                    <option value="+98">Iran (+98)</option>
                                                    
                                                    
                                                    <option value="+964">Iraq (+964)</option>
                                                    
                                                    
                                                    <option value="+353">Ireland (+353)</option>
                                                    
                                                    
                                                    <option value="+972">Israel (+972)</option>
                                                    
                                                    
                                                    <option value="+39">Italy (+39)</option>
                                                    
                                                    
                                                    <option value="+1876">Jamaica (+1876)</option>
                                                    
                                                    
                                                    <option value="+81">Japan (+81)</option>
                                                    
                                                    
                                                    <option value="+44">Jersey (+44)</option>
                                                    
                                                    
                                                    <option value="+962">Jordan (+962)</option>
                                                    
                                                    
                                                    <option value="+7">Kazakhstan (+7)</option>
                                                    
                                                    
                                                    <option value="+254">Kenya (+254)</option>
                                                    
                                                    
                                                    <option value="+686">Kiribati (+686)</option>
                                                    
                                                    
                                                    <option value="+850">Korea North (+850)</option>
                                                    
                                                    
                                                    <option value="+82">Korea South (+82)</option>
                                                    
                                                    
                                                    <option value="+965">Kuwait (+965)</option>
                                                    
                                                    
                                                    <option value="+996">Kyrgyzstan (+996)</option>
                                                    
                                                    
                                                    <option value="+856">Laos (+856)</option>
                                                    
                                                    
                                                    <option value="+371">Latvia (+371)</option>
                                                    
                                                    
                                                    <option value="+961">Lebanon (+961)</option>
                                                    
                                                    
                                                    <option value="+266">Lesotho (+266)</option>
                                                    
                                                    
                                                    <option value="+231">Liberia (+231)</option>
                                                    
                                                    
                                                    <option value="+218">Libya (+218)</option>
                                                    
                                                    
                                                    <option value="+423">Liechtenstein (+423)</option>
                                                    
                                                    
                                                    <option value="+370">Lithuania (+370)</option>
                                                    
                                                    
                                                    <option value="+352">Luxembourg (+352)</option>
                                                    
                                                    
                                                    <option value="+853">Macau S.A.R. (+853)</option>
                                                    
                                                    
                                                    <option value="+389">Macedonia (+389)</option>
                                                    
                                                    
                                                    <option value="+261">Madagascar (+261)</option>
                                                    
                                                    
                                                    <option value="+265">Malawi (+265)</option>
                                                    
                                                    
                                                    <option value="+60">Malaysia (+60)</option>
                                                    
                                                    
                                                    <option value="+960">Maldives (+960)</option>
                                                    
                                                    
                                                    <option value="+223">Mali (+223)</option>
                                                    
                                                    
                                                    <option value="+356">Malta (+356)</option>
                                                    
                                                    
                                                    <option value="+44">Man (Isle of) (+44)</option>
                                                    
                                                    
                                                    <option value="+692">Marshall Islands (+692)</option>
                                                    
                                                    
                                                    <option value="+596">Martinique (+596)</option>
                                                    
                                                    
                                                    <option value="+222">Mauritania (+222)</option>
                                                    
                                                    
                                                    <option value="+230">Mauritius (+230)</option>
                                                    
                                                    
                                                    <option value="+269">Mayotte (+269)</option>
                                                    
                                                    
                                                    <option value="+52">Mexico (+52)</option>
                                                    
                                                    
                                                    <option value="+691">Micronesia (+691)</option>
                                                    
                                                    
                                                    <option value="+373">Moldova (+373)</option>
                                                    
                                                    
                                                    <option value="+377">Monaco (+377)</option>
                                                    
                                                    
                                                    <option value="+976">Mongolia (+976)</option>
                                                    
                                                    
                                                    <option value="+1664">Montserrat (+1664)</option>
                                                    
                                                    
                                                    <option value="+212">Morocco (+212)</option>
                                                    
                                                    
                                                    <option value="+258">Mozambique (+258)</option>
                                                    
                                                    
                                                    <option value="+95">Myanmar (+95)</option>
                                                    
                                                    
                                                    <option value="+264">Namibia (+264)</option>
                                                    
                                                    
                                                    <option value="+674">Nauru (+674)</option>
                                                    
                                                    
                                                    <option value="+977">Nepal (+977)</option>
                                                    
                                                    
                                                    <option value="+599">Netherlands Antilles (+599)</option>
                                                    
                                                    
                                                    <option value="+31">Netherlands The (+31)</option>
                                                    
                                                    
                                                    <option value="+687">New Caledonia (+687)</option>
                                                    
                                                    
                                                    <option value="+64">New Zealand (+64)</option>
                                                    
                                                    
                                                    <option value="+505">Nicaragua (+505)</option>
                                                    
                                                    
                                                    <option value="+227">Niger (+227)</option>
                                                    
                                                    
                                                    <option value="+234">Nigeria (+234)</option>
                                                    
                                                    
                                                    <option value="+683">Niue (+683)</option>
                                                    
                                                    
                                                    <option value="+672">Norfolk Island (+672)</option>
                                                    
                                                    
                                                    <option value="+1670">Northern Mariana Islands (+1670)</option>
                                                    
                                                    
                                                    <option value="+47">Norway (+47)</option>
                                                    
                                                    
                                                    <option value="+968">Oman (+968)</option>
                                                    
                                                    
                                                    <option value="+92">Pakistan (+92)</option>
                                                    
                                                    
                                                    <option value="+680">Palau (+680)</option>
                                                    
                                                    
                                                    <option value="+970">Palestinian Territory Occupied (+970)</option>
                                                    
                                                    
                                                    <option value="+507">Panama (+507)</option>
                                                    
                                                    
                                                    <option value="+675">Papua new Guinea (+675)</option>
                                                    
                                                    
                                                    <option value="+595">Paraguay (+595)</option>
                                                    
                                                    
                                                    <option value="+51">Peru (+51)</option>
                                                    
                                                    
                                                    <option value="+63">Philippines (+63)</option>
                                                    
                                                    
                                                    <option value="+0">Pitcairn Island (+0)</option>
                                                    
                                                    
                                                    <option value="+48">Poland (+48)</option>
                                                    
                                                    
                                                    <option value="+351">Portugal (+351)</option>
                                                    
                                                    
                                                    <option value="+1787">Puerto Rico (+1787)</option>
                                                    
                                                    
                                                    <option value="+974">Qatar (+974)</option>
                                                    
                                                    
                                                    <option value="+262">Reunion (+262)</option>
                                                    
                                                    
                                                    <option value="+40">Romania (+40)</option>
                                                    
                                                    
                                                    <option value="+70">Russia (+70)</option>
                                                    
                                                    
                                                    <option value="+250">Rwanda (+250)</option>
                                                    
                                                    
                                                    <option value="+290">Saint Helena (+290)</option>
                                                    
                                                    
                                                    <option value="+1869">Saint Kitts And Nevis (+1869)</option>
                                                    
                                                    
                                                    <option value="+1758">Saint Lucia (+1758)</option>
                                                    
                                                    
                                                    <option value="+508">Saint Pierre and Miquelon (+508)</option>
                                                    
                                                    
                                                    <option value="+1784">Saint Vincent And The Grenadines (+1784)</option>
                                                    
                                                    
                                                    <option value="+684">Samoa (+684)</option>
                                                    
                                                    
                                                    <option value="+378">San Marino (+378)</option>
                                                    
                                                    
                                                    <option value="+239">Sao Tome and Principe (+239)</option>
                                                    
                                                    
                                                    <option value="+966">Saudi Arabia (+966)</option>
                                                    
                                                    
                                                    <option value="+221">Senegal (+221)</option>
                                                    
                                                    
                                                    <option value="+381">Serbia (+381)</option>
                                                    
                                                    
                                                    <option value="+248">Seychelles (+248)</option>
                                                    
                                                    
                                                    <option value="+232">Sierra Leone (+232)</option>
                                                    
                                                    
                                                    <option value="+65">Singapore (+65)</option>
                                                    
                                                    
                                                    <option value="+421">Slovakia (+421)</option>
                                                    
                                                    
                                                    <option value="+386">Slovenia (+386)</option>
                                                    
                                                    
                                                    <option value="+44">Smaller Territories of the UK (+44)</option>
                                                    
                                                    
                                                    <option value="+677">Solomon Islands (+677)</option>
                                                    
                                                    
                                                    <option value="+252">Somalia (+252)</option>
                                                    
                                                    
                                                    <option value="+27">South Africa (+27)</option>
                                                    
                                                    
                                                    <option value="+0">South Georgia (+0)</option>
                                                    
                                                    
                                                    <option value="+211">South Sudan (+211)</option>
                                                    
                                                    
                                                    <option value="+34">Spain (+34)</option>
                                                    
                                                    
                                                    <option value="+94">Sri Lanka (+94)</option>
                                                    
                                                    
                                                    <option value="+249">Sudan (+249)</option>
                                                    
                                                    
                                                    <option value="+597">Suriname (+597)</option>
                                                    
                                                    
                                                    <option value="+47">Svalbard And Jan Mayen Islands (+47)</option>
                                                    
                                                    
                                                    <option value="+268">Swaziland (+268)</option>
                                                    
                                                    
                                                    <option value="+46">Sweden (+46)</option>
                                                    
                                                    
                                                    <option value="+41">Switzerland (+41)</option>
                                                    
                                                    
                                                    <option value="+963">Syria (+963)</option>
                                                    
                                                    
                                                    <option value="+886">Taiwan (+886)</option>
                                                    
                                                    
                                                    <option value="+992">Tajikistan (+992)</option>
                                                    
                                                    
                                                    <option value="+255">Tanzania (+255)</option>
                                                    
                                                    
                                                    <option value="+66">Thailand (+66)</option>
                                                    
                                                    
                                                    <option value="+228">Togo (+228)</option>
                                                    
                                                    
                                                    <option value="+690">Tokelau (+690)</option>
                                                    
                                                    
                                                    <option value="+676">Tonga (+676)</option>
                                                    
                                                    
                                                    <option value="+1868">Trinidad And Tobago (+1868)</option>
                                                    
                                                    
                                                    <option value="+216">Tunisia (+216)</option>
                                                    
                                                    
                                                    <option value="+90">Turkey (+90)</option>
                                                    
                                                    
                                                    <option value="+7370">Turkmenistan (+7370)</option>
                                                    
                                                    
                                                    <option value="+1649">Turks And Caicos Islands (+1649)</option>
                                                    
                                                    
                                                    <option value="+688">Tuvalu (+688)</option>
                                                    
                                                    
                                                    <option value="+256">Uganda (+256)</option>
                                                    
                                                    
                                                    <option value="+380">Ukraine (+380)</option>
                                                    
                                                    
                                                    <option value="+971">United Arab Emirates (+971)</option>
                                                    
                                                    
                                                    <option value="+44">United Kingdom (+44)</option>
                                                    
                                                    
                                                    <option value="+1">United States (+1)</option>
                                                    
                                                    
                                                    <option value="+1">United States Minor Outlying Islands (+1)</option>
                                                    
                                                    
                                                    <option value="+598">Uruguay (+598)</option>
                                                    
                                                    
                                                    <option value="+998">Uzbekistan (+998)</option>
                                                    
                                                    
                                                    <option value="+678">Vanuatu (+678)</option>
                                                    
                                                    
                                                    <option value="+39">Vatican City State (Holy See) (+39)</option>
                                                    
                                                    
                                                    <option value="+58">Venezuela (+58)</option>
                                                    
                                                    
                                                    <option value="+84">Vietnam (+84)</option>
                                                    
                                                    
                                                    <option value="+1284">Virgin Islands (British) (+1284)</option>
                                                    
                                                    
                                                    <option value="+1340">Virgin Islands (US) (+1340)</option>
                                                    
                                                    
                                                    <option value="+681">Wallis And Futuna Islands (+681)</option>
                                                    
                                                    
                                                    <option value="+212">Western Sahara (+212)</option>
                                                    
                                                    
                                                    <option value="+967">Yemen (+967)</option>
                                                    
                                                    
                                                    <option value="+38">Yugoslavia (+38)</option>
                                                    
                                                    
                                                    <option value="+260">Zambia (+260)</option>
                                                    
                                                    
                                                    <option value="+263">Zimbabwe (+263)</option>
                                                    
                                                    
                                                    <option value="+383">Kosovo (+383)</option>
                                                    
                                                    
                                                </select>
                                            </div>
                                            
                                            <span id="wa_country_code_val_alt" class="validation_msg"></span>
                                        </Col>
                                    
                              
                                        <Col xl={4} md={6} class="col-12 mb-1">
                                        <br />
                                        <br />
                                            <div class="form-group">
                                             
                                            <Row>
                                                <Col><label for="basicInput"> Whatsapp Number</label></Col>
                                                <Col class="float-right">
                                                    <input type="checkbox" id="whatsapp_check" onclick="whatsapp_no_same()"/>
                                                    <label>Same as mobile no.</label>
                                                    </Col></Row>
                                                <input type="text" class="form-control" id="basic_id_whatsapp_number" name="basic_whatsapp_number" placeholder="10-digit mobile number" onclick="clearError('basic_mob_no_val_alt')" onkeypress="return event.charCode >= 48 &amp;&amp; event.charCode <= 57" value=""/>
                                            </div>

                                            <span id="basic_mob_no_val_alt" class="validation_msg"></span>
                                        </Col>

                                        <Col xl={4} md={6} class="col-12 mb-1">
                                        <br />
                                        <br />
                                            <div class="form-group">
                                                <label for="basic_continent">Continent</label>
                                                <select id="basic_id_continent" name="continent" type="text" placeholder="Title" class="form-control">
                                                    <option selected="" disabled="">Continent</option>
                                                    <option value="Asia">Asia</option>
                                                    <option value="Africa">Africa</option>
                                                    <option value="Europe">Europe</option>
                                                    <option value="NorthAmerica">North America</option>
                                                    <option value="SouthAmerica">South America</option>
                                                    <option value="Australia">Australia/Oceania</option>
                                                    <option value="Antarctica">Antarctica</option>
                                                </select>
                                                
                                            </div>
                                            <span id="basic_continent" class="validation_msg"></span>
                                        </Col>
                                       
                                        <br />
                                           
                                        <Col xl={4} md={6} class="col-12 mb-1">
                                        <br />
                                        <br />
                                            <div class="form-group">
                                                <label for="basic_country">Country</label>
                                                <select id="basic_id_country" name="basic_country" type="text" placeholder="Title" class="form-control">
                                                    <option selected="" disabled="">Country</option>
                                                    
                                                </select>
                                                
                                            </div>
                                            <span id="basic_country_val" class="validation_msg"></span>
                                        </Col>
                                       
                                        <Col xl={4} md={6} class="col-12 mb-1">
                                        <br />
                                        <br />
                                            <div class="form-group">
                                                <label for="basic_state">State</label>
                                                <select id="basic_id_state" name="basic_state" type="text" placeholder="Title" class="form-control">
                                                    <option selected="" disabled="">State</option>
                                                    
                                                </select>
                                            </div>
                                            <span id="basic_state_val" class="validation_msg"></span>
                                        </Col>
                                        
                                        <Col xl={4} md={6} class="col-12 mb-1">
                                        <br />
                                        <br />
                                        <div class="form-group">
                                            <label for="basic_state">City</label>
            
                                            <input type="text" class="form-control" id="basic_id_city" name="basic_city" placeholder="City" />
                                        </div>
                                        <span id="basic_city" class="validation_msg"></span>
                                        </Col>
                                        </Row>
                                        
                                        <br />
                                        <div class="col-4 mb-1">
                                            
                                            <div class="form-group">
                                                <label>Upload Resume</label>
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="File name" id="file_name_res" value="" aria-describedby="button-addon2" readonly=""/>
                                                    <div class="input-group-append" id="button-addon2">
                                                        <label for="resume_file">
                                                            <a class="btn btn-outline-primary waves-effect" type="button">Upload</a>
                                                        </label>
                                                    </div>
                                                </div>
                                                <span id="resume_file_val" class="validation_msg"></span>
                                            </div>
                                        </div>
                                        <br />
                                        <div class="col-12 mt-2">
                                            <div class="d-flex justify-content-sm-between">
                                                <div>
                                                    <button type="button" class="btn btn-primary ml-0 waves-effect waves-float waves-light" onclick="goToBackPage()">Back</button>
                                                </div>
                                                <div>
                                                    <input type="hidden" name="next"/>
                                                
                                                    <a name="save_proceed" value="save_&amp;_proceed" class="btn btn-primary  waves-effect waves-float waves-light " onclick="saveBasicDetails('yes');">Save &amp; Proceed</a>
                                                </div>
                                            </div>
                                        </div>
          </CardBody>

          <br />
        </CardBody>
      </Card>
    </>
  )
}

export default Basic
