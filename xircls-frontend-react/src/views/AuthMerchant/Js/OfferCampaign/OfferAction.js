import React from "react"
import { Row, Col, Container, Card, CardBody } from 'reactstrap'
import Png from '../../images/XIRCLS.png'
import OfferCampaign from "./OfferCampaign"

const OfferAction = () => {

    return (
        <>
            <Container fluid className="offercampaign px-0">
                <Card>
                    <CardBody>
                        <Container fluid>
                            <OfferCampaign />
                            <Row className="px-1">
                                <Col xs={12}>
                                    <h4>Optimize your offers to promote action. Boost your click-through rate.</h4>
                                    <hr />
                                </Col>
                                <Col xs={6}>
                                    <div className='mb-2 mt-0'>
                                        <label htmlFor="select-offer">
                                            Choose offer design Template
                                        </label>
                                        <select id='select-offer' class="form-select" aria-label="Default select example">
                                            <option selected>Design 1</option>
                                            <option value="1">Design 2</option>
                                            <option value="2">Design 3</option>
                                            <option value="3">Design 4</option>
                                        </select>
                                    </div>
                                    <div className='my-2'>
                                        <label htmlFor="call-action">
                                            Call to action
                                        </label>
                                        <select id='call-action' class="form-select" aria-label="Default select example">
                                            <option selected>Call to action 1</option>
                                            <option value="1">Call to action 2</option>
                                            <option value="2">Call to action 3</option>
                                            <option value="3">Call to action 4</option>
                                        </select>
                                    </div>
                                    <div className='mb-2'>
                                        <label htmlFor="acq-emb-url">
                                            Acquisition Embed URL
                                        </label>
                                        <input placeholder="Acquisition Embed URL" type='text' id='acq-emb-url' name='acq-emb-url' className="form-control" />
                                    </div>
                                    <div className='mb-2'>
                                        <label htmlFor="ret-emb-url">
                                            Retention Embed URL
                                        </label>
                                        <input placeholder="Retention Embed URL" type='text' id='ret-emb-url' name='ret-emb-url' className="form-control" />
                                    </div>
                                </Col>
                                <Col xs={6}>
                                    <div className="border p-1 mb-2">
                                        <h4 className="text-center border-bottom pb-1">Acquisition Offer</h4>
                                        <Row className='cursor-pointer form-check mx-0 py-1 px-0 text-white d-flex align-items-center my-1 rounded' style={{ backgroundColor: 'black' }}>
                                            <Col md={2}><img width='30px' src={Png} alt="logo" /></Col>
                                            <Col md={8} className='text-center fs-3' style={{ textShadow: '0px 0px 15px rgba(255, 255, 255, 1)' }} >Company Name</Col>
                                        </Row>
                                        <div className="overflow-hidden rounded" style={{ width: '100%', aspectRatio: '16/9' }}>
                                            <img style={{ width: '100%', textShadow: '0px 0px 10px white' }} src="https://images.pexels.com/photos/14263365/pexels-photo-14263365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                        </div>
                                        <div className="border mt-1 d-flex justify-content-between" style={{ backgroundColor: '#19d895', padding: '0.55rem 1rem' }}>
                                            <div className="text-white">
                                                <p className="mb-0 fw-bold">Offer Title</p>
                                                <span style={{ fontSize: '10px' }}>Terms & Conditions</span>
                                            </div>
                                            <button className="btn btn-light fs-4" style={{ color: '#19d895' }}>Shop Now</button>
                                        </div>
                                    </div>
                                    <div className="border p-1 mb-2">
                                        <h4 className="text-center border-bottom pb-1">Retention Offer</h4>
                                        <Row className='cursor-pointer form-check mx-0 py-1 px-0 text-white d-flex align-items-center my-1 rounded' style={{ backgroundColor: 'black' }}>
                                            <Col md={2}><img width='30px' src={Png} alt="logo" /></Col>
                                            <Col md={8} className='text-center fs-3' style={{ textShadow: '0px 0px 15px rgba(255, 255, 255, 1)' }} >Company Name</Col>
                                        </Row>
                                        <div className="overflow-hidden rounded" style={{ width: '100%', aspectRatio: '16/9' }}>
                                            <img style={{ width: '100%', textShadow: '0px 0px 10px white' }} src="https://images.pexels.com/photos/14263365/pexels-photo-14263365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                        </div>
                                        <div className="border mt-1 d-flex justify-content-between" style={{ backgroundColor: '#19d895', padding: '0.55rem 1rem' }}>
                                            <div className="text-white">
                                                <p className="mb-0 fw-bold">Offer Title</p>
                                                <span style={{ fontSize: '10px' }}>Terms & Conditions</span>
                                            </div>
                                            <button className="btn btn-light fs-4" style={{ color: '#19d895' }}>Call to Action</button>
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
                    </CardBody>
                </Card>
            </Container>
        </>

    )
}

export default OfferAction
