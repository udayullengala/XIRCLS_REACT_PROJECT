import React from "react"
import { Card, CardBody, Container, Row, Col } from 'reactstrap'
import OnlineOutletNav from "./OnlineOutletNav"

const OnlineOutletSocial = () => {

    return (
        <>
            <Container fluid className="online-outlet px-0">
                <Card>
                    <CardBody>
                        <h3 className="mb-0">Edit Online Outlet</h3>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <OnlineOutletNav />
                        <Container fluid>
                            <div className="border rounded my-2 mx-1 px-2 pt-2">
                                <Row>
                                    <Col md={12} className='mb-1'>
                                        <h4>Social Links</h4>
                                        <hr />
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <label htmlFor="outlet-social-facebook">
                                            Facebook
                                        </label>
                                        <input placeholder="www.facebook.com" type='text' id='outlet-social-facebook' name='outlet-social-facebook' className="form-control" />
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <label htmlFor="outlet-social-twitter">
                                            Twitter
                                        </label>
                                        <input placeholder="www.twitter.com" type='text' id='outlet-social-twitter' name='outlet-social-twitter' className="form-control" />
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <label htmlFor="outlet-social-linkedin">
                                            Linkedin
                                        </label>
                                        <input placeholder="www.linkedin.com" type='text' id='outlet-social-linkedin' name='outlet-social-linkedin' className="form-control" />
                                    </Col>
                                    <Col md={6} className='mb-3'>
                                        <label htmlFor="outlet-social-instagram">
                                            Instagram
                                        </label>
                                        <input placeholder="www.instagram.com" type='text' id='outlet-social-instagram' name='outlet-social-instagram' className="form-control" />
                                    </Col>
                                </Row>
                            </div>
                            <Row className="my-2 mx-0">
                                <Col s={6}><button className="btn btn-primary rounded-2">Back</button></Col>
                                <Col s={6} className='text-end'><button className="btn btn-primary rounded-2 mx-2">Save</button><button className="btn btn-primary rounded-2">Save & Proceed</button></Col>
                            </Row>

                        </Container>
                    </CardBody>
                </Card>
            </Container>

        </>
    )
}

export default OnlineOutletSocial