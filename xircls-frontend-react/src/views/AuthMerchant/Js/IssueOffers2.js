import React from "react"
import { Container, Card, CardBody, Row, Col } from 'reactstrap'
import Select from 'react-select'
import '../Css/IssueOffers.css'

const IssueOffers = () => {

    return (
        <>
            <div className="issue-offers">
                <Card>
                    <CardBody>
                        <h3 className="mb-0">Issue/Redeem Offers</h3>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <Container>
                            <h4 className="mb-2">Issue Offer To Customer</h4>
                            <Row className="border pt-2 px-2 mb-2">
                                <h5 className="fs-4 mb-2">Customer Address Details</h5>
                                <Col className="mb-3" md={4}>
                                    <label>
                                        Country
                                    </label>
                                    <Select options={[
                                        { value: 'country 1', label: 'country 1' },
                                        { value: 'country 2', label: 'country 2' },
                                        { value: 'country 3', label: 'country 3' }
                                    ]}
                                        closeMenuOnSelect={true}
                                        placeholder={'Country'}
                                    />
                                </Col>
                                <Col className="mb-3" md={4}>
                                    <label>
                                        State
                                    </label>
                                    <Select options={[
                                        { value: 'state 1', label: 'state 1' },
                                        { value: 'state 2', label: 'state 2' },
                                        { value: 'state 3', label: 'state 3' }
                                    ]}
                                        closeMenuOnSelect={true}
                                        placeholder={'State'}
                                    />
                                </Col>
                                <Col className="mb-3" md={4}>
                                    <label>
                                        City
                                    </label>
                                    <Select options={[
                                        { value: 'city 1', label: 'city 1' },
                                        { value: 'city 2', label: 'city 2' },
                                        { value: 'city 3', label: 'city 3' }
                                    ]}
                                        closeMenuOnSelect={true}
                                        placeholder={'City'}
                                    />
                                </Col>
                                <Col className="mb-3" md={4}>
                                    <label>
                                        Pincode
                                    </label>
                                    <div>
                                        <input type='text' placeholder="Pincode" className="form-control" />
                                    </div>
                                </Col>
                            </Row>
                            <Row className="border pt-2 px-2 mb-2">
                                <h5 className="fs-4 mb-2">Customer Billing Details</h5>
                                <Col className="mb-3" md={4}>
                                    <label>
                                        Billing Amount
                                    </label>
                                    <div>
                                        <input type='text' placeholder="Billing Amount" className="form-control" />
                                    </div>
                                </Col>
                                <Col className="mb-3" md={4}>
                                    <label>
                                        Offer Code
                                    </label>
                                    <div>
                                        <input type='text' placeholder="Offer Code" className="form-control" />
                                    </div>
                                </Col>
                            </Row>
                            <Row className="border pt-2 px-2 mb-2">
                                <h5 className="fs-4 mb-2">Customer Referral Details</h5>
                                <Col className="mb-3" md={4}>
                                    <label>
                                        Referral's Name
                                    </label>
                                    <div>
                                        <input type='text' placeholder="Referral's Name" className="form-control" />
                                    </div>
                                </Col>
                                <Col className="mb-3" md={4}>
                                    <label>
                                        Referral's Email
                                    </label>
                                    <div>
                                        <input type='text' placeholder="Referral's Email" className="form-control" />
                                    </div>
                                </Col>
                                <Col className="mb-3" md={4}>
                                    <label>
                                        Referral's Phone Number
                                    </label>
                                    <div>
                                        <input type='text' placeholder="Referral's Phone Number" className="form-control" />
                                    </div>
                                </Col>
                                <Col className="mb-3" md={4}>
                                    <label>
                                        Referral's Offers
                                    </label>
                                    <div>
                                        <input type='text' placeholder="Referral's Offers" className="form-control" />
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col md={12} className="d-flex justify-content-between">
                                    <div>
                                        <button className="btn btn-primary">Back</button>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <button className="btn btn-primary">Cancel</button>
                                        <button className="btn btn-primary">IssueOffers</button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default IssueOffers