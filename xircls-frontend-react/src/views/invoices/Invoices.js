import React from 'react'
import { Card, CardBody, Button, Badge } from 'reactstrap'
import { ChevronDown, Info, CheckCircle, Save, Settings, ShoppingCart, Box } from 'react-feather'
import DataTable from 'react-data-table-component'

// create a component for actions column
// create show text and select input 
// create view all button
// create text input for search invoice
// add filter icon

const Invoices = () => {

    const Actions = () => {
        <div>
            <span></span>
            <span></span>
            <span></span>
        </div>
}

const Customer = (props) => {
    return (
        <div className='customer-container'>
            <h6 className='initials'>{props.initials}</h6>{' '}
            <h6>{props.name}</h6>
            <small className='text-muted'>{props.email}</small>
        </div>
    )
}
    
    const UnpaidAlt = () => {
        return (
            <>
                <Save color='#877ef2' className='unpaid-alt-icon'/>
                <Badge color='' pill className='unpaid-alt'>Unpaid</Badge>
            </>
        )
    }

    const Unpaid = () => {
        return (
            <>
                <Info color='#ea5454' className='unpaid-icon'/>
                <Badge color='' pill className='unpaid'>Unpaid</Badge>
            </>
        )
    }

    const Paid = () => {
        return (
            <>
                <CheckCircle color='#81dca9' className='paid-icon'/>
                <Badge color='' pill className='paid'>Paid</Badge>
            </>
        )
    }

    const columns = [
        {
            name: 'Invoice Id',
            selector: row => row.id,
            sortable: true
        },
        {
            name: 'Invoice Date',
            selector: row => row.date,
            sortable: true
        },
        {
            name: 'Customer',
            selector: row => row.customer,
            sortable: true,
            grow: 3
        },
        {
            name: 'Amount',
            selector: row => row.amount,
            sortable: true
        },
        {
            name: 'Status',
            selector: row => row.status
        },
        {
            name: 'Actions',
            selector: row => row.actions
        }

    ]

    const data = [
        {
            id: 'AA-2023-023',
            date: '05-12-2022',
            customer: <Customer
                initials='NH'
                name='Nasser Hussain'
                email='nasser.hussain@rugbyindia.in'
            />,
            amount: '₹2400',
            status: <Unpaid />,
            actions: 'test'
        }, 
        {
            id: 'AA-2023-022',
            date: '09-11-2022',
            customer: <Customer
                initials='RH'
                name='Rajesh Ghela'
                email='collabortion@dynamocks.com'
            />,
            amount: '₹2949',
            status: <Paid />,
            actions: 'test'
        }, 
        {
            id: 'AA-2023-021',
            date: '09-11-2022',
            customer: <Customer
                initials='NK'
                name='Nilesh Karnani'
                email='hello@beyours.in'
            />,
            amount: '₹4720',
            status: <Paid />,
            actions: 'test'
        }, 
        {
            id: 'AA-2023-020',
            date: '09-11-2022',
            customer: <Customer
                initials='NC'
                name='Nikhil Chib'
                email='nikhilchib@gmail.com'
            />,
            amount: '₹2360',
            status: <Paid />,
            actions: 'test'
        }, 
        {
            id: 'AA-2023-019',
            date: '04-11-2022',
            customer: <Customer
                initials='RS'
                name='Reshma Shelar'
                email='reshma@perlingobal.com'
            />,
            amount: '₹41890',
            status: <Paid />,
            actions: 'test'
        }, 
        {
            id: 'AA-2023-018',
            date: '14-10-2022',
            customer: <Customer
                initials='PB'
                name='Paras Batra'
                email='paras@leafstudios.com'/>,
            amount: '₹3548',
            status: <UnpaidAlt />,
            actions: 'test'
        }, 
        {
            id: 'AA-2023-017',
            date: '11-10-2022',
            customer: <Customer
                initials='NH'
                name='Nasser Hussain'
                email='nasser.hussain@rugbyindia.in'
            />,
            amount: '₹6020',
            status: <Paid />,
            actions: 'test'
        }, 
        {
            id: 'AA-2023-016',
            date: '17-10-2022',
            customer: <Customer
                initials='MS'
                name='Manasi Sheth'
                email='manasi@injawellness.com'/>,
            amount: '₹4407',
            status: <Paid />,
            actions: 'test'
        }, 
        {
            id: 'AA-2023-015',
            date: '14-10-2022',
            customer: <Customer
                initials='AM'
                name='Ankit Mittal'
                email='ankit.mittal@beardo.in'/>,
            amount: '₹323',
            status: <UnpaidAlt />,
            actions: 'test'
        }, 
        {
            id: 'AA-2023-014',
            date: '18-09-2022',
            customer: <Customer
                initials='CS'
                name='Chaitanya Sinh'
                email='chait.sinh@alaconcierge.com'/>,
            amount: '₹17700',
            status: <Paid />,
            actions: 'test'
        }
    ]

    return (
        <div>
            <Card>
                <CardBody style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <h6>Invoices Dashboard</h6>
                    <Button className='add-invoice' color='primary'>Add Invoice</Button>
                    <a href="#">
                        <Settings color='#877ef2' className='settings-icon'/>
                    </a>
                </CardBody>
            </Card>
            <Card>
                
                <CardBody>
                    <div className="row">
                        <div className='col'>
                            <div className="row" style={{wrap: 'noWrap'}}>
                                <div className="col-2"><ShoppingCart size={25} color='#877ef2' style={{backgroundColor: '#efecfe'}} className='metrics-icons'/></div>
                                <div className="col">
                                    <h6>0</h6>
                                    <small className='text-muted metrics-subhead'>Orders Today</small>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="row" style={{wrap: 'noWrap'}}>
                                <div className="col-2"><Box size={25} color='#e95355' className='metrics-icons' style={{backgroundColor: '#fdebeb'}}/></div>
                                <div className="col">
                                    <h6>₹0.00</h6>
                                    <small className='text-muted metrics-subhead'>Billing Today</small>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="row" style={{wrap: 'noWrap'}}>
                                <div className="col-2"><ShoppingCart style={{backgroundColor: '#e4f7ed'}} size={25} color='#27c66f' className='metrics-icons'/></div>
                                <div className="col">
                                    <h6>28</h6>
                                    <small className='text-muted metrics-subhead'>All Orders</small>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                        <div className="row" style={{wrap: 'noWrap'}}>
                            <div className="col-2"><h1 className='rupee-symbol metrics-icons' style={{backgroundColor: '#fff3e7'}}>₹</h1></div>
                                <div className="col">
                                    <h6>321407.00</h6>
                                    <small className='text-muted metrics-subhead'>Total Billing</small>
                                </div>
                        </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className='col'>
                            <div className="row" style={{wrap: 'noWrap'}}>
                                <div className="col-2"><Box size={25} color='#e95355' className='metrics-icons' style={{backgroundColor: '#fdebeb'}}/></div>
                                <div className="col">
                                    <h6>₹0.00</h6>
                                    <small className='text-muted metrics-subhead'>Earnings Today</small>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="row" style={{wrap: 'noWrap'}}>
                                <div className="col-2"><ShoppingCart style={{backgroundColor: '#e4f7ed'}} size={25} color='#27c66f' className='metrics-icons'/></div>
                                <div className="col">
                                    <h6>312778.00</h6>
                                    <small className='text-muted metrics-subhead'>Total Earnings</small>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="row" style={{wrap: 'noWrap'}}>
                            <div className="col-2"><h1 className='rupee-symbol metrics-icons' style={{backgroundColor: '#fff3e7'}}>₹</h1></div>
                                <div className="col">
                                    <h6>8629.00</h6>
                                    <small className='text-muted metrics-subhead'>Total Unpaid</small>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="row" style={{wrap: 'noWrap', display: 'none'}}>
                                <div className="col-2"><h1 style={{backgroundColor: '#fff3e7'}} className='rupee-symbol metrics-icons'>₹</h1></div>
                                <div className="col">
                                    <h6>8629.00</h6>
                                    <small className='text-muted metrics-subhead'>Total Unpaid</small>
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


            <DataTable 
                responsive
                pagination
                title='Invoices'
                columns={columns}
                data={data}
            />
            
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