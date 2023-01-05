import React from 'react'
import { Card, CardBody, Button, Table, Badge, Pagination, PaginationItem, PaginationLink, Select } from 'reactstrap'
import { ChevronDown, Info, CheckCircle, Save } from 'react-feather'
import Box from '../../assets/images/icons/box.svg'
import Cart from '../../assets/images/icons/shopping-cart.svg'
import Rupee from '../../assets/images/icons/rupee.svg'
import DataTable from 'react-data-table-component'


const Invoices = () => {
    return (
        <div>
            <Card>
                <CardBody style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h6>Invoices Dashboard</h6>
                    <Button color='primary'>Add Invoice</Button>
                </CardBody>
            </Card>
            <Card>
                
                <CardBody>
                    <div class="row">
                        <div className='col'>
                            <div class="row" style={{wrap: 'noWrap'}}>
                                <div class="col-2"><img src={Cart}/></div>
                                <div class="col">
                                    <h6>0</h6>
                                    <p>Orders Today</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div class="row" style={{wrap: 'noWrap'}}>
                                <div class="col-2"><img src={Box}/></div>
                                <div class="col">
                                    <h6>₹0.00</h6>
                                    <p>Billing Today</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div class="row" style={{wrap: 'noWrap'}}>
                                <div class="col-2"><img src={Cart}/></div>
                                <div class="col">
                                    <h6>28</h6>
                                    <p>All Orders</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                        <div class="row" style={{wrap: 'noWrap'}}>
                            <div class="col-2"><h1>₹</h1></div>
                                <div class="col">
                                    <h6>321407.00</h6>
                                    <p>Total Billing</p>
                                </div>
                        </div>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div className='col'>
                            <div class="row" style={{wrap: 'noWrap'}}>
                                <div class="col-2"><img src={Box}/></div>
                                <div class="col">
                                    <h6>₹0.00</h6>
                                    <p>Earnings Today</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div class="row" style={{wrap: 'noWrap'}}>
                                <div class="col-2"><img src={Cart}/></div>
                                <div class="col">
                                    <h6>312778.00</h6>
                                    <p>Total Earnings</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div class="row" style={{wrap: 'noWrap'}}>
                                <div class="col-2"><h1>₹</h1></div>
                                <div class="col">
                                    <h6>8629.00</h6>
                                    <p>Total Unpaid</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div class="row" style={{wrap: 'noWrap', display: 'none'}}>
                                <div class="col-2"><img src={Rupee} style={{height: '30px', alignSelf: 'center'}}/></div>
                                <div class="col">
                                    <h6>8629.00</h6>
                                    <p>Total Unpaid</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>


            <Card>
                <CardBody style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center'}}>

                    <h6>Calendar</h6>
                    <a style={{color: '#5f5974'}} href="#"><ChevronDown/></a>
                    
                </CardBody>
            </Card>

            <Card>
                <CardBody style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
                    <h6>No Orders Today</h6>
                </CardBody>
            </Card>

            <DataTable />
            
            {/* <Card>
                <CardBody>

                    <div id="table-header" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom: '1rem'}}>
                        <div style={{display: 'inline-flex', justifyContent: 'center'}}>
                            <p>Show</p>
                                <select class='form-select' style={{marginLeft: '2rem', width:'70px'}}>
                                    <option>10</option>
                                    <option>20</option>
                                    <option>30</option>
                                    <option>40</option>
                                    <option>50</option>
                            </select>
                            
                        </div>
                        <div>
                            <h6 style={{justifyContent: 'center'}}>Invoices</h6>
                        </div>
                        <Button color='primary'>View All</Button>
                    </div>

                    <Table bordered hover responsive>
                        <thead>
                            <tr>
                            <th>
                                Invoice Id
                            </th>
                            <th>
                                Invoice Date
                            </th>
                            <th>
                                Customer
                            </th>
                            <th>
                                Amount
                            </th>
                            <th>
                                Status
                            </th>
                            <th>
                                Actions
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">
                                <a href="#">AA-2023-023</a>
                            </th>
                            <td>
                                05-12-2022
                            </td>
                            <td>
                                Nasser Hussain
                            </td>
                            <td>
                                &#8377;2400
                            </td>
                            <td>
                                <Info color='#ea5454'/><Badge color='danger' pill>Unpaid</Badge>
                            </td>
                            <td>
                                @mdo
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">
                                <a href="#">AA-2023-022</a>
                            </th>
                            <td>
                                09-11-2022
                            </td>
                            <td>
                                Rajesh Ghela
                            </td>
                            <td>
                                &#8377;2949
                            </td>
                            <td>
                            <CheckCircle color='#81dca9'/><Badge color='success' pill>Paid</Badge>
                            </td>
                            <td>
                                @fat
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">
                                <a href="#">AA-2023-021</a>
                            </th>
                            <td>
                                09-11-2022
                            </td>
                            <td>
                                Nilesh Karnani
                            </td>
                            <td>
                                &#8377;4720
                            </td>
                            <td>
                                <CheckCircle color='#81dca9'/><Badge color='success' pill>Paid</Badge>
                            </td>
                            <td>
                                @twitter
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">
                                <a href="#">AA-2023-020</a>
                            </th>
                            <td>
                                07-11-2022
                            </td>
                            <td>
                                Nikhil Chib
                            </td>
                            <td>
                                &#8377;2360
                            </td>
                            <td>
                                <CheckCircle color='#81dca9'/><Badge color='success' pill>Paid</Badge>
                            </td>
                            <td>
                                @twitter
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">
                                <a href="#">AA-2023-019</a>
                            </th>
                            <td>
                                04-11-2022
                            </td>
                            <td>
                                Reshma Shelar
                            </td>
                            <td>
                                &#8377;41890
                            </td>
                            <td>
                            <CheckCircle color='#81dca9'/><Badge color='success' pill>Paid</Badge>
                            </td>
                            <td>
                                @twitter
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">
                                <a href="#">AA-2023-018</a>
                            </th>
                            <td>
                                14-10-2022
                            </td>
                            <td>
                                Paras Batra
                            </td>
                            <td>
                                &#8377;3548
                            </td>
                            <td>
                                <Save color='#8d83f2'/><Badge color='primary' pill>Unpaid</Badge>
                            </td>
                            <td>
                                @twitter
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">
                                <a href="#">AA-2023-017</a>
                            </th>
                            <td>
                                11-10-2022
                            </td>
                            <td>
                                Nasser Hussain
                            </td>
                            <td>
                                &#8377;6020
                            </td>
                            <td>
                            <CheckCircle color='#81dca9'/><Badge color='success' pill>Paid</Badge>
                            </td>
                            <td>
                                @twitter
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">
                                <a href="#">AA-2023-016</a>
                            </th>
                            <td>
                                17-10-2022
                            </td>
                            <td>
                                Manasi Sheth
                            </td>
                            <td>
                                &#8377;4407
                            </td>
                            <td>
                            <CheckCircle color='#81dca9'/><Badge color='success' pill>Paid</Badge>
                            </td>
                            <td>
                                @twitter
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">
                                <a href="#">AA-2023-015</a>
                            </th>
                            <td>
                                17-10-2022
                            </td>
                            <td>
                                Ankit Mittal
                            </td>
                            <td>
                                &#8377;323
                            </td>
                            <td>
                            <Save color='#8d83f2'/><Badge color='primary' pill>Unpaid</Badge>
                            </td>
                            <td>
                                @twitter
                            </td>
                            </tr>
                            <tr>
                            <th scope="row">
                                <a href="#">AA-2023-014</a>
                            </th>
                            <td>
                                18-09-2022
                            </td>
                            <td>
                                Chaitanya Sinh
                            </td>
                            <td>
                                &#8377;17700
                            </td>
                            <td>
                            <CheckCircle color='#81dca9'/><Badge color='success' pill>Paid</Badge>
                            </td>
                            <td>
                                @twitter
                            </td>
                            </tr>
                        </tbody>
                        </Table>
                </CardBody>
            </Card> */}

        </div>
    )
}

export default Invoices