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
                <CardBody style={{display: 'flex', justifyItems: 'space-between'}}>
                        <img src={Cart}/>
                    <div>
                        <h6>0</h6>
                        <p>Orders Today</p>
                    </div>
                        <img src={Box}/>
                    <div>
                        <h6>0.00</h6>
                        <p>Billing Today</p>
                    </div>
                        <img src={Cart}/>
                    <div>
                        <h6>28</h6>
                        <p>All Orders</p>
                    </div>
                        <img src={Rupee}/>
                    <div>
                        <h6>321407.00</h6>
                        <p>Total Billing</p>
                    </div>
                        <img src={Box}/>
                    <div>
                        <h6>0.00</h6>
                        <p>Earnings Today</p>
                    </div>
                        <img src={Cart}/>
                    <div>
                        <h6>312778.00</h6>
                        <p>Total Earnings</p>
                    </div>
                        <img src={Rupee}/>
                    <div>
                        <h6>8629.00</h6>
                        <p>Total Unpaid</p>
                    </div>
                </CardBody>
            </Card>

        </div>
    )
}

export default Invoices