import React from "react"
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import $ from 'jquery'
import '../Css/cmstrat.css'


const Cmstrat = () => {

    function cardSelect(id) {
        $('.borderremover').removeClass("borderAdd")
        $(`#${id}`).addClass("borderAdd")
    }

    return (
        <>
            <Container fluid className="cmstrat m-0 p-0 rounded-0">
                <Row className="h-100 w-100 m-0 p-0">
                    <Col md={12} className="h-100" style={{ padding: '2rem' }}>
                        <Row>
                            <h4 className="title mb-2 fs-4 text-center" style={{ fontWeight: '600' }}>Select Your Cross-Marketing Strategy</h4>
                        </Row>
                        <Row>
                            <div id='selectcms' className="box d-flex justify-content-evenly">
                                <div>
                                    <Card id='cms1' onClick={() => cardSelect('cms1')} className="item my-2 rounded-4 borderremover" style={{ width: '25rem', boxShadow: '0px 0px 15px rgba(0,0,0,0.1)', cursor: 'pointer', position: 'relative' }}>
                                        <CardBody className="px-3 text-center">
                                            <img className="mb-3" src='https://www.xircls.com/static/images/website-slide/Infiniti-logo.jpg' width='90' />
                                            <div className="mb-3">
                                                <h4>Infiniti</h4>
                                                <h5>Acquisition + Loyalty in 1 Single Campaign!</h5>
                                            </div>
                                            <p className="text-justify mb-3">A cost-effective two-way cross-marketing campaign where you: Reward your customers with offers from non-competing partner businesses Precisely direct your offers at your target
                                                demographic when they buy from partner businesses.</p>
                                            <button className="btn text-white w-100" style={{ backgroundColor: '#359b8e' }}>Learn More</button>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div>
                                    <Card id='cms2' onClick={() => cardSelect('cms2')} className="item my-2 rounded-4 borderremover" style={{ width: '25rem', boxShadow: '0px 0px 15px rgba(0,0,0,0.1)', cursor: 'pointer', position: 'relative' }}>
                                        <CardBody className="px-3 text-center">
                                            <img className="mb-3" src='https://www.xircls.com/static/images/website-slide/Sniper-logo.jpg' width='90' />
                                            <div className="mb-3">
                                                <h4>Sniper</h4>
                                                <h5>Acquisition + Loyalty in 1 Single Campaign!</h5>
                                            </div>
                                            <p className="text-justify mb-3">A cost-effective two-way cross-marketing campaign where you: Reward your customers with offers from non-competing partner businesses Precisely direct your offers at your target demographic when they buy from partner businesses.</p>
                                            <button className="btn text-white w-100" style={{ backgroundColor: '#359b8e' }}>Learn More</button>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div>
                                    <Card id='cms3' onClick={() => cardSelect('cms3')} className="item my-2 rounded-4 borderremover" style={{ width: '25rem', boxShadow: '0px 0px 15px rgba(0,0,0,0.1)', cursor: 'pointer', position: 'relative' }}>
                                        <CardBody className="px-3 text-center">
                                            <img className="mb-3" src='https://www.xircls.com/static/images/website-slide/Infiniti-logo.jpg' width='90' />
                                            <div className="mb-3">
                                                <h4>SemperFi</h4>
                                                <h5>Acquisition + Loyalty in 1 Single Campaign!</h5>
                                            </div>
                                            <p className="text-justify mb-3">A cost-effective two-way cross-marketing campaign where you: Reward your customers with offers from non-competing partner businesses Precisely direct your offers at your target demographic when they buy from partner businesses.</p>
                                            <button className="btn text-white w-100" style={{ backgroundColor: '#359b8e' }}>Learn More</button>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </Row>
                        <Row className="w-100 text-right px-1">
                            <button className='btn btnp waves waves-effect waves-dark text-white fs-5' style={{ width: '12.5%', marginLeft: 'auto', backgroundColor: '#19d895' }}>Proceed</button>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Cmstrat 