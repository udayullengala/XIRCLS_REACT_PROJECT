import React from 'react'
import { Container, Card, CardBody, Row, Col } from 'reactstrap'
import Select from 'react-select'
import '../Css/IssueOffers.css'

const IssueOffers = () => {

    return (
        <>
            <div className='issue-offers'>
                <Card>
                    <CardBody>
                        <h3 className='mb-0'>Issue/Redeem Offers</h3>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <Container>
                            <h4 className='mb-3'>Issue Offer To Customer</h4>
                            <Row>
                                <Col md={4} className='mb-3'>
                                    <label>
                                        Title
                                    </label>
                                    <Select options={[
                                        { value: 'Mr', label: 'Mr' },
                                        { value: 'Mrs', label: 'Mrs' },
                                        { value: 'Ms', label: 'Ms' }
                                    ]}
                                        closeMenuOnSelect={true}
                                        placeholder={'Title'}
                                    />
                                </Col>
                                <Col md={4} className='mb-3'>
                                    <label>
                                        First Name
                                    </label>
                                    <div>
                                        <input type='text' placeholder='First Name' className='form-control' />
                                    </div>
                                </Col>
                                <Col md={4} className='mb-3'>
                                    <label>
                                        Last Name
                                    </label>
                                    <div>
                                        <input type='text' placeholder='Last Name' className='form-control' />
                                    </div>
                                </Col>
                                <Col md={4} className='mb-3'>
                                    <label>
                                        Email
                                    </label>
                                    <div>
                                        <input type='text' placeholder='Email' className='form-control' />
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mt-3'>
                                <Col md={12} className='d-flex justify-content-between'>
                                    <div>
                                        <button className='btn btn-primary'>Back</button>
                                    </div>
                                    <div className='d-flex gap-2'>
                                        <button className='btn btn-primary'>Cancel</button>
                                        <button className='btn btn-primary'>Next</button>
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