import React from 'react'
import CardMedal from '../ui-element/CardMedal'
import { Col, Row, Card, CardBody, Button } from 'reactstrap'
import StatsCard from '../ui-element/Static'
import StatsVertical from '../../@core/components/widgets/stats/StatsVertical'
import { Circle, Send, Settings, Wind } from 'react-feather'
import Box from '../../assets/images/icons/box.svg'
import Cart from '../../assets/images/icons/shopping-cart.svg'
import Rupee from '../../assets/images/icons/rupee.png'

const Invoices = () => {
    return (
        <div>
            <Card>
                <CardBody style={{display: 'flex'}}>
                    <h6>Invoices Dashboard</h6>
                    <Button style={{marginLeft: 'auto'}} color='primary'>Add Invoice</Button>
                </CardBody>
            </Card>
            <Card>
                <CardBody style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(2, 1fr)'}}>
                    <div style={{gridArea: '1 / 1 / 2 / 2'}}className='div1'>
                        <img style={{float: 'left', marginRight: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:'10px'}} src={Cart}/>
                        <h6>0</h6>
                        <p>Orders Today</p>
                    </div>
                    <div style={{gridArea: '1 / 2 / 2 / 3'}}className='div2'>
                        <img style={{float: 'left', marginRight: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:'10px'}} src={Box}/>
                        <h6>0.00</h6>
                        <p>Billing Today</p>
                    </div>
                    <div style={{gridArea: '1 / 3 / 2 / 4'}}className='div3'>
                        <img style={{float: 'left', marginRight: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:'10px'}} src={Cart}/>
                        <h6>28</h6>
                        <p>All Orders</p>
                    </div>
                    <div style={{gridArea: '1 / 4 / 2 / 5'}}className='div4'>
                    <img src={Rupee} style={{height: '30px', alignSelf: 'center', float: 'left', marginRight: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:'10px'}} />
                        <h6>321407.00</h6>
                        <p>Total Billing</p>
                    </div>
                    <div style={{gridArea: '2 / 1 / 3 / 2'}}className='div5'>
                        <img style={{float: 'left', marginRight: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:'10px'}} src={Box}/>
                        <h6>0.00</h6>
                        <p>Earnings Today</p>
                    </div>
                    <div style={{gridArea: '2 / 2 / 3 / 3'}}className='div6'>
                        <img style={{float: 'left', marginRight: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:'10px'}} src={Cart}/>
                        <h6>312778.00</h6>
                        <p>Total Earnings</p>
                    </div>
                    <div style={{gridArea: '2 / 3 / 3 / 4'}}className='div7'>
                        <img src={Rupee} style={{height: '30px', alignSelf: 'center', float: 'left', marginRight: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:'10px'}}/>
                        <h6>8629.00</h6>
                        <p>Total Unpaid</p>
                    </div>
                </CardBody>
            </Card>

        </div>
    )
}

export default Invoices