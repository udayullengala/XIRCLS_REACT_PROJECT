import React from "react"
import { Card, CardBody, Container, Row, Col } from 'reactstrap'
import '../Css/Company.css'

const Company = () => {

    return (
        <>
            <Container fluid className="company px-0">
                <Card>
                    <CardBody>
                        <h3 className="mb-0">Edit Company</h3>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <Container fluid className="px-1">
                            <Row className="my-2 mx-0">
                                <Col md={12}>
                                    <div className="my-2 pt-2 px-2 border rounded">
                                        <h4>Basic Details</h4>
                                        <hr />
                                        <Row>
                                            <Col md={4} className='mb-3'>
                                                <label htmlFor="company-name">
                                                    Company Name
                                                </label>
                                                <input placeholder="Company Name" type='text' id='company-name' name='company-name' className="form-control" />
                                            </Col>
                                            <Col md={4} className='mb-3'>
                                                <label htmlFor="company-type">
                                                    Company Type
                                                </label>
                                                <input placeholder="Company Type" type='text' id='company-type' name='company-type' className="form-control" />
                                            </Col>
                                            <Col md={4} className='mb-3'>
                                                <label htmlFor="company-website">
                                                    Company Website (optional)
                                                </label>
                                                <input placeholder="Company Website (optional)" type='text' id='company-website' name='company-website' className="form-control" />
                                            </Col>
                                            <Col md={4} className='mb-3'>
                                                <label htmlFor="company-email">
                                                    Company Email
                                                </label>
                                                <input placeholder="Company Email" type='text' id='company-email' name='company-email' className="form-control" />
                                            </Col>
                                            <Col md={4} className='mb-3'>
                                                <label htmlFor="landline-number">
                                                    Landline Number
                                                </label>
                                                <input placeholder="Landline Number" type='text' id='landline-number' name='landline-number' className="form-control" />
                                            </Col>
                                            <Col md={4} className='mb-3'>
                                                <label htmlFor="mobile-number">
                                                    Mobile Number
                                                </label>
                                                <input placeholder="Mobile Number" type='text' id='mobile-number' name='mobile-number' className="form-control" />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="my-2 pt-2 px-2 border rounded">
                                        <h4>Address</h4>
                                        <hr />
                                        <Row>
                                            <Col md={4} className='mb-3'>
                                                <label htmlFor="address-line-1">
                                                    Address Line 1
                                                </label>
                                                <input placeholder="Address Line 1" type='text' id='address-line-1' name='address-line-1' className="form-control" />
                                            </Col>
                                            <Col md={4} className='mb-3'>
                                                <label htmlFor="address-line-2">
                                                    Address Line 2
                                                </label>
                                                <input placeholder="Address Line 2" type='text' id='address-line-2' name='address-line-2' className="form-control" />
                                            </Col>
                                            <Col md={4} className='mb-3'>
                                                <label htmlFor="comp-city">
                                                    City
                                                </label>
                                                <input placeholder="City" type='text' id='comp-city' name='comp-city' className="form-control" />
                                            </Col>
                                            <Col md={4} className='mb-3'>
                                                <label htmlFor="comp-state">
                                                    State/Province
                                                </label>
                                                <input placeholder="State/Province" type='text' id='comp-state' name='comp-state' className="form-control" />
                                            </Col>
                                            <Col md={4} className='mb-3'>
                                                <label htmlFor="comp-country">
                                                    Country
                                                </label>
                                                <input placeholder="Country" type='text' id='comp-country' name='comp-country' className="form-control" />
                                            </Col>
                                            <Col md={4} className='mb-3'>
                                                <label htmlFor="comp-pin">
                                                    Pincode
                                                </label>
                                                <input placeholder="Pincode" type='text' id='comp-pin' name='comp-pin' className="form-control" />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="my-2 pt-2 px-2 border rounded">
                                        <h4>Personal</h4>
                                        <hr />
                                        <Row>
                                            <Col md={4} className='mb-3'>
                                                <label htmlFor="comp-cin">
                                                    CIN
                                                </label>
                                                <input placeholder="CIN" type='text' id='comp-cin' name='comp-cin' className="form-control" />
                                            </Col>
                                            <Col md={4} className='mb-3'>
                                                <label htmlFor="comp-pan-card">
                                                    PAN Card
                                                </label>
                                                <input placeholder="PAN Card" type='text' id='comp-pan-card' name='comp-pan-card' className="form-control" />
                                            </Col>
                                            <Col md={4} className='mb-3'>
                                                <label htmlFor="comp-tax-reg">
                                                    Tax registration/VAT/GSTIN
                                                </label>
                                                <input placeholder="Tax registration/VAT/GSTIN" type='text' id='comp-tax-reg' name='comp-tax-reg' className="form-control" />
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="my-2 pt-2 px-2 border rounded">
                                        <h4>Select categories your company operates in:</h4>
                                        <hr />
                                        <Row>
                                            <Col md={4} className='mb-3 form-check form-check-success ps-3'>
                                                <input type="checkbox" className='cursor-pointer form-check-input' id="comp-category-1" name="company-category" />
                                                <label className="cursor-pointer form-check-label" htmlFor="comp-category-1">Company Category 1</label>
                                            </Col>
                                            <Col md={4} className='mb-3 form-check form-check-success ps-3'>
                                                <input type="checkbox" className='cursor-pointer form-check-input' id="comp-category-2" name="company-category" />
                                                <label className="cursor-pointer form-check-label" htmlFor="comp-category-2">Company Category 2</label>
                                            </Col>
                                            <Col md={4} className='mb-3 form-check form-check-success ps-3'>
                                                <input type="checkbox" className='cursor-pointer form-check-input' id="comp-category-3" name="company-category" />
                                                <label className="cursor-pointer form-check-label" htmlFor="comp-category-3">Company Category 3</label>
                                            </Col>
                                            <Col md={4} className='mb-3 form-check form-check-success ps-3'>
                                                <input type="checkbox" className='cursor-pointer form-check-input' id="comp-category-4" name="company-category" />
                                                <label className="cursor-pointer form-check-label" htmlFor="comp-category-4">Company Category 4</label>
                                            </Col>
                                            <Col md={4} className='mb-3 form-check form-check-success ps-3'>
                                                <input type="checkbox" className='cursor-pointer form-check-input' id="comp-category-5" name="company-category" />
                                                <label className="cursor-pointer form-check-label" htmlFor="comp-category-5">Company Category 5</label>
                                            </Col>
                                            <Col md={4} className='mb-3 form-check form-check-success ps-3'>
                                                <input type="checkbox" className='cursor-pointer form-check-input' id="comp-category-6" name="company-category" />
                                                <label className="cursor-pointer form-check-label" htmlFor="comp-category-6">Company Category 6</label>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="px-1 my-2">
                                <Col xs={6}><button className="btn btn-primary rounded-2">Back</button></Col>
                                <Col xs={6} className='text-end'><button className="btn btn-primary rounded-2 mx-2">Save</button><button className="btn btn-primary rounded-2">Save & Proceed</button></Col>
                            </Row>
                        </Container>
                    </CardBody>
                </Card>
            </Container>
        </>
    )
}

export default Company