import React from "react"
import { Container, Card, Col, Row, CardBody } from "reactstrap"
import { Link } from 'react-router-dom'
import '../Css/Cart.css'

const Cart = () => {
    return (
        <>
            <Container fluid className="px-0 plan-cart">
                <Card>
                    <CardBody>
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="mb-0">Cart</h4>
                            <button className="btn btn-primary" ><Link className="text-white" to='/merchant/cross_marketing'>Add More Products</Link></button>
                        </div>
                    </CardBody>
                </Card>
                <Row>
                    <Col md={8} >
                        <Card>
                            <Row >
                                <Col md={4} className="py-2 align-items-center justify-content-center d-flex">
                                    <img src="https://www.xircls.com/static/images/website-slide/Infiniti-logo.jpg" alt="" style={{ width: '60%' }} />
                                </Col>
                                <Col md={4} className="py-2 px-4 px-md-0 border-end">
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <h5>XIRCLS-Infinity</h5>
                                    </div>
                                    <div style={{ marginBottom: '2rem' }}>
                                        <h5 style={{ color: '#309b90' }}>Infinity Frow Plus</h5>
                                    </div>
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <h5>Cost per Offer Issuance: ₹ 0.66</h5>
                                    </div>
                                    <div>
                                        <h5>Cost per Offer Click: ₹ 1.00</h5>
                                    </div>
                                </Col>
                                <Col md={4} className="text-center " style={{ paddingRight: '2rem', paddingTop: '1.5rem' }}>
                                    <div>
                                        <h3 style={{ color: '#7367f0', marginBottom: '1.5rem' }}>₹ 2499.0</h3>
                                    </div>
                                    <div>
                                        <button className="btn bg-light-secondary" style={{ width: '100%', marginBottom: '1.5rem', backgroundColor: 'lightgrey' }}>Remove</button>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary" style={{ width: '100%' }}>More Details</button>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <CardBody>
                                <Row className="mt-2">
                                    <h4>Price Details</h4>
                                </Row>
                                <Row>
                                    <Col><h5>Total MRP</h5></Col>
                                    <Col className="text-end"><h5>₹2499.0</h5></Col>
                                </Row>
                                <Row>
                                    <Col><h5>SGST</h5></Col>
                                    <Col className="text-end"><h5>₹224.91</h5></Col>
                                </Row>
                                <Row>
                                    <Col><h5>CGST</h5></Col>
                                    <Col className="text-end"><h5>₹224.91</h5></Col>
                                </Row>
                                <Row>
                                    <Col><h5>Integration Charges</h5></Col>
                                    <Col className="text-end"><h5 style={{ color: '#309b90' }}>Free</h5></Col>
                                </Row>
                                <Row>
                                    <Col><h5>Total</h5></Col>
                                    <Col className="text-end"><h5>₹2948.82</h5></Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col><b>Total(Bound)</b></Col>
                                    <Col className="text-end mb-1">₹2949.00</Col>
                                </Row>
                                <Row>
                                    <Col><button className="btn btn-primary" style={{ width: '100%' }}>Checkout</button></Col>
                                </Row>
                            </CardBody>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Cart