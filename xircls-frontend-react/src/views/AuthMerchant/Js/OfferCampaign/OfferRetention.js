import React from 'react'
import { Paperclip, Trash } from 'react-feather'
import { Row, Col, Container, Card, CardBody } from 'reactstrap'
import OfferCampaign from './OfferCampaign'

const OfferRetention = () => {

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
                                        <div className='text-white d-flex align-items-center'><div className='bg-info p-1 d-flex justify-content-center align-items-center rounded-circle' style={{ height: '15px', width: '15px' }}>1</div><span className='mx-1 text-dark'>Retention offer 1:6% off on spend above ₹100</span></div>
                                        <hr />
                                        <div className='mb-3'>
                                            <label htmlFor="ret1-offer-title">
                                                Offer Title
                                            </label>
                                            <input placeholder="Offer Title" type='text' id='ret1-offer-title' name='ret1-offer-title' className="form-control" />
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="ret1-offer-code">
                                                Offer Code
                                            </label>
                                            <input placeholder="Offer Code" type='text' id='ret1-offer-code' name='ret1-offer-code' className="form-control" />
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="ret1-offer-description">
                                                Offer Description
                                            </label>
                                            <textarea placeholder="Offer Description" type='text' id='ret1-offer-description' name='ret1-offer-description' className="form-control" />
                                        </div>
                                        <div className='mb-3'>
                                            <h5>Set Offer Expiry</h5>
                                            <div className='d-flex' style={{ gap: '2rem' }}>
                                                <div className='cursor-pointer form-check'>
                                                    <input type='radio' name='ret1-radio' id='ret1-radio1' className=' form-check-input' />
                                                    <label htmlFor='ret1-radio1' className='cursor-pointer form-check-label'>Days</label>
                                                </div>
                                                <div className='cursor-pointer custom-control form-check'>
                                                    <input type='radio' name='ret1-radio' id='ret1-radio2' className=' form-check-input' />
                                                    <label htmlFor='ret1-radio2' className='cursor-pointer form-check-label'>Date</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="ret1-offer-valid-days">
                                                How many days is this offer valid for?
                                            </label>
                                            <input type='text' id='ret1-offer-valid-days' name='ret1-offer-valid-days' className="form-control" />
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
                                            <label htmlFor="ret1-offer-tnc">
                                                Add outlet details Terms and Conditions (Online)
                                            </label>
                                            <textarea type='text' id='ret1-offer-tnc' name='ret1-offer-tnc' className="form-control" />
                                        </div>
                                        <div>
                                            <h5>Upload Offer Image</h5>
                                            <p className='fs-6 mb-2'>640px X 325px PNG/JPEG/GIF Format</p>
                                            <h6>Offer 1</h6>
                                            <div className='box d-flex align-items-center' style={{ gap: '2rem' }}>
                                                <div className='cursor-pointer form-check'>
                                                    <img width='50px' src="https://www.xircls.com/static/images/website-slide/logo12.jpg" alt="logo" />
                                                </div>
                                                <div>
                                                    <label htmlFor='ret1-file1' className='btn btn-success'><Paperclip size='15' color='white' /></label>
                                                    <input type='file' name='ret1-file' id='ret1-file1' className='d-none' />
                                                </div>
                                                <div className='btn btn-danger'><Trash size='15' color='white' /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-2 p-2 border">
                                        <p className='text-white d-flex align-items-center'><div className='bg-info p-1 d-flex justify-content-center align-items-center rounded-circle' style={{ height: '15px', width: '15px' }}>2</div><span className='mx-1 text-dark'>Retention offer 2:6% off on spend above ₹1326</span></p>
                                        <hr />
                                        <div className='mb-3'>
                                            <label htmlFor="ret2-offer-title">
                                                Offer Title
                                            </label>
                                            <input placeholder="Offer Title" type='text' id='ret2-offer-title' name='ret2-offer-title' className="form-control" />
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="ret2-offer-code">
                                                Offer Code
                                            </label>
                                            <input placeholder="Offer Code" type='text' id='ret2-offer-code' name='ret2-offer-code' className="form-control" />
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="ret2-offer-description">
                                                Offer Description
                                            </label>
                                            <textarea placeholder="Offer Description" type='text' id='ret2-offer-description' name='ret2-offer-description' className="form-control" />
                                        </div>
                                        <div className='mb-3'>
                                            <h5>Set Offer Expiry</h5>
                                            <div className='d-flex' style={{ gap: '2rem' }}>
                                                <div className='cursor-pointer form-check'>
                                                    <input type='radio' name='ret2-radio' id='ret2-radio1' className=' form-check-input' />
                                                    <label htmlFor='ret2-radio1' className='cursor-pointer form-check-label'>Days</label>
                                                </div>
                                                <div className='cursor-pointer custom-control form-check'>
                                                    <input type='radio' name='ret2-radio' id='ret2-radio2' className=' form-check-input' />
                                                    <label htmlFor='ret2-radio2' className='cursor-pointer form-check-label'>Date</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor="ret2-offer-valid-days">
                                                How many days is this offer valid for?
                                            </label>
                                            <input type='text' id='ret2-offer-valid-days' name='ret2-offer-valid-days' className="form-control" />
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
                                            <label htmlFor="ret2-offer-tnc">
                                                Add outlet details Terms and Conditions (Online)
                                            </label>
                                            <textarea type='text' id='ret2-offer-tnc' name='ret2-offer-tnc' className="form-control" />
                                        </div>
                                        <div>
                                            <h5>Upload Offer Image</h5>
                                            <p className='fs-6 mb-2'>640px X 325px PNG/JPEG/GIF Format</p>
                                            <h6>Offer 2</h6>
                                            <div className='box d-flex align-items-center' style={{ gap: '2rem' }}>
                                                <div className='cursor-pointer form-check'>
                                                    <img width='50px' src="https://www.xircls.com/static/images/website-slide/logo12.jpg" alt="logo" />
                                                </div>
                                                <div>
                                                    <label htmlFor='ret1-file2' className='btn btn-success'><Paperclip size='15' color='white' /></label>
                                                    <input type='file' name='ret1-file' id='ret1-file2' className='d-none' />
                                                </div>
                                                <div className='btn btn-danger'><Trash size='15' color='white' /></div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                        </Container>
                        <Container className='btncontainer'>
                            <Row className="boxbtn px-1 my-2">
                                <Col s={6} className="boxbtn1"><button className="btn1 btn btn-primary rounded-2">Back</button></Col>
                                <Col s={6} className='btnx2 text-end'><button className="btn2 btn btn-primary rounded-2 mx-2">Save</button><button className="btn3 btn btn-primary rounded-2">Save & Proceed</button></Col>
                            </Row>
                        </Container>
                    </CardBody >
                </Card >
            </Container >
        </>
    )

}

export default OfferRetention