import React from 'react'
import { Paperclip, Trash } from 'react-feather'
import { Row, Col, Container, Card, CardBody } from 'reactstrap'
import OfferCampaign from './OfferCampaign'

const OfferAcquisition = () => {

    return (
        <>
            <Container fluid className="offercampaign px-0">
                <Card>
                    <CardBody>
                        <Container fluid>
                            <OfferCampaign />
                            <Row className="my-3 px-0 mx-0">
                                <Col md={12}>
                                    <h4>Add Titles & Description to your Offers</h4>
                                    <div className="my-2 p-2 border">
                                        <div className='text-white d-flex align-items-center'><div className='bg-info p-1 d-flex justify-content-center align-items-center rounded-circle' style={{ height: '15px', width: '15px' }}>1</div><span className='mx-1 text-dark'>Acquisition offer 1:6% off on spend above ₹100</span></div>
                                        <hr />
                                        <div className='mb-3'>
                                            <label htmlFor="acq1-offer-title">
                                                Offer Title
                                            </label>
                                            <input placeholder="Offer Title" type='text' id='acq1-offer-title' name='acq1-offer-title' className="form-control" />
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="acq1-offer-code">
                                                Offer Code
                                            </label>
                                            <input placeholder="Offer Code" type='text' id='acq1-offer-code' name='acq1-offer-code' className="form-control" />
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="acq1-offer-description">
                                                Offer Description
                                            </label>
                                            <textarea placeholder="Offer Description" type='text' id='acq1-offer-description' name='acq1-offer-description' className="form-control" />
                                        </div>
                                        <div className='mb-3'>
                                            <h5>Set Offer Expiry</h5>
                                            <div className='d-flex' style={{ gap: '2rem' }}>
                                                <div className='cursor-pointer form-check'>
                                                    <input type='radio' name='acq1-radio' id='acq1-radio1' className=' form-check-input' />
                                                    <label htmlFor='acq1-radio1' className='cursor-pointer form-check-label'>Days</label>
                                                </div>
                                                <div className='cursor-pointer custom-control form-check'>
                                                    <input type='radio' name='acq1-radio' id='acq1-radio2' className=' form-check-input' />
                                                    <label htmlFor='acq1-radio2' className='cursor-pointer form-check-label'>Date</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="acq1-offer-valid-days">
                                                How many days is this offer valid for?
                                            </label>
                                            <input type='text' id='acq1-offer-valid-days' name='acq1-offer-valid-days' className="form-control" />
                                        </div>
                                        <div className='mb-3'>
                                            <h5 className='fs-4' style={{ fontWeight: '800' }}>XIRCLS TERMS AND CONDITIONS</h5>
                                            <ol style={{ fontWeight: '600' }} type="1">
                                                <li>To redeem this offer, login to the website/mobile app of the business with the same mobile number & email address on which this offer was received.</li>
                                                <li>This offer cannot be combined with any other offer on the website/mobile app.</li>
                                                <li>This offer can be applied only on a single purchase.</li>
                                                <li>Appointment/reservation is subject to availability.</li>
                                                <li>The service provider XIRCLS is not liable for deficiency in service or any other damages.</li>
                                            </ol>
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="acq1-offer-tnc">
                                                Add outlet details Terms and Conditions (Online)
                                            </label>
                                            <textarea type='text' id='acq1-offer-tnc' name='acq1-offer-tnc' className="form-control" />
                                        </div>
                                        <div>
                                            <h5>Upload Offer Image</h5>
                                            <p className='fs-6 mb-2'>640px X 325px PNG/JPEG/GIF Format</p>
                                            <h6>Offer 1</h6>
                                            <div className='d-flex align-items-center' style={{ gap: '2rem' }}>
                                                <div className='cursor-pointer form-check'>
                                                    <img width='50px' src="https://www.xircls.com/static/images/website-slide/logo12.jpg" alt="logo" />
                                                </div>
                                                <div>
                                                    <label htmlFor='acq1-file1' className='btn btn-success'><Paperclip size='15' color='white' /></label>
                                                    <input type='file' name='acq1-file' id='acq1-file1' className='d-none' />
                                                </div>
                                                <div className='btn btn-danger'><Trash size='15' color='white' /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-2 p-2 border">
                                        <p className='text-white d-flex align-items-center'><div className='bg-info p-1 d-flex justify-content-center align-items-center rounded-circle' style={{ height: '15px', width: '15px' }}>2</div><span className='mx-1 text-dark'>Acquisition offer 2:6% off on spend above ₹1326</span></p>
                                        <hr />
                                        <div className='mb-3'>
                                            <label htmlFor="acq2-offer-title">
                                                Offer Title
                                            </label>
                                            <input placeholder="Offer Title" type='text' id='acq2-offer-title' name='acq2-offer-title' className="form-control" />
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="acq2-offer-code">
                                                Offer Code
                                            </label>
                                            <input placeholder="Offer Code" type='text' id='acq2-offer-code' name='acq2-offer-code' className="form-control" />
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="acq2-offer-description">
                                                Offer Description
                                            </label>
                                            <textarea placeholder="Offer Description" type='text' id='acq2-offer-description' name='acq2-offer-description' className="form-control" />
                                        </div>
                                        <div className='mb-3'>
                                            <h5>Set Offer Expiry</h5>
                                            <div className='d-flex' style={{ gap: '2rem' }}>
                                                <div className='cursor-pointer form-check'>
                                                    <input type='radio' name='acq2-radio' id='acq2-radio1' className=' form-check-input' />
                                                    <label htmlFor='acq2-radio1' className='cursor-pointer form-check-label'>Days</label>
                                                </div>
                                                <div className='cursor-pointer custom-control form-check'>
                                                    <input type='radio' name='acq2-radio' id='acq2-radio2' className=' form-check-input' />
                                                    <label htmlFor='acq2-radio2' className='cursor-pointer form-check-label'>Date</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="acq2-offer-valid-days">
                                                How many days is this offer valid for?
                                            </label>
                                            <input type='text' id='acq2-offer-valid-days' name='acq2-offer-valid-days' className="form-control" />
                                        </div>
                                        <div className='mb-3'>
                                            <h5 className='fs-4' style={{ fontWeight: '800' }}>XIRCLS TERMS AND CONDITIONS</h5>
                                            <ol style={{ fontWeight: '600' }} type="1">
                                                <li>To redeem this offer, login to the website/mobile app of the business with the same mobile number & email address on which this offer was received.</li>
                                                <li>This offer cannot be combined with any other offer on the website/mobile app.</li>
                                                <li>This offer can be applied only on a single purchase.</li>
                                                <li>Appointment/reservation is subject to availability.</li>
                                                <li>The service provider XIRCLS is not liable for deficiency in service or any other damages.</li>
                                            </ol>
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="acq2-offer-tnc">
                                                Add outlet details Terms and Conditions (Online)
                                            </label>
                                            <textarea type='text' id='acq2-offer-tnc' name='acq2-offer-tnc' className="form-control" />
                                        </div>
                                        <div>
                                            <h5>Upload Offer Image</h5>
                                            <p className='fs-6 mb-2'>640px X 325px PNG/JPEG/GIF Format</p>
                                            <h6>Offer 2</h6>
                                            <div className='d-flex align-items-center' style={{ gap: '2rem' }}>
                                                <div className='cursor-pointer form-check'>
                                                    <img width='50px' src="https://www.xircls.com/static/images/website-slide/logo12.jpg" alt="logo" />
                                                </div>
                                                <div>
                                                    <label htmlFor='acq1-file2' className='btn btn-success'><Paperclip size='15' color='white' /></label>
                                                    <input type='file' name='acq1-file' id='acq1-file2' className='d-none' />
                                                </div>
                                                <div className='btn btn-danger'><Trash size='15' color='white' /></div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Container>
                                <Row className="px-1 my-2">
                                    <Col s={6}><button className="btn btn-primary rounded-2">Back</button></Col>
                                    <Col s={6} className='text-end'><button className="btn btn-primary rounded-2 mx-2">Save</button><button className="btn btn-primary rounded-2">Save & Proceed</button></Col>
                                </Row>
                            </Container>
                        </Container>
                    </CardBody>
                </Card>
            </Container>
        </>
    )

}

export default OfferAcquisition
