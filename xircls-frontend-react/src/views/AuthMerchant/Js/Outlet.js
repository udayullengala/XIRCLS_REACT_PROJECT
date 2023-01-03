import React from "react"
import { ArrowRight, Check, Edit2, Facebook, Globe, Instagram, Linkedin, Tag, Twitter, X } from 'react-feather'
import { Card, CardBody, Col, Container, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'
import man from '../images/man.png'
import woman from '../images/woman.png'
import kid from '../images/kid.png'
import '../Css/Outlet.css'

const Outlet = () => {

    // Modal parameters
    const [modal, setModal] = React.useState(false)
    const toggle = () => setModal(!modal)
    const handleClose = () => setModal(false)

    const [toggleInput1, setTogleInput1] = React.useState(false)
    const [toggleInput2, setTogleInput2] = React.useState(false)
    const [toggleInput3, setTogleInput3] = React.useState(false)
    const [toggleInput4, setTogleInput4] = React.useState(false)
    const [toggleInput5, setTogleInput5] = React.useState(false)
    const [toggleInput6, setTogleInput6] = React.useState(false)
    const [toggleInput7, setTogleInput7] = React.useState(false)
    const [toggleInput8, setTogleInput8] = React.useState(false)


    const backImg = {
        backgroundImage: `url('https://www.xircls.com/static/outlets/outlet_cover_pic/main/outlet_cover_pic_408.png')`,
        position: 'relative',
        height: '75vh',
        width: '100%',
        backgroundSize: 'cover',
        overflow: 'hidden',
        backgroundRepeat: 'no-repeat'
    }

    return (

        <div className="outlet_edit">
            <Row>
                <Col xl='12'>
                    <Card style={backImg}>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h2>JMD Insurance</h2>
                                </div>
                                <div>
                                    <button className="btn btn-primary">Edit</button>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Container fluid className='px-0    '>
                <Row className="match-height">
                    <Col xl='4'>
                        <Card className="h-100">
                            <CardBody className="d-flex justify-content-center align-items-center" >
                                <div >
                                    <img src="https://www.xircls.com/static/outlets/outlet_logo/main/outlet_logo_408.png" alt="" style={{ width: '230px' }} />
                                </div>
                                
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl='4' >
                        <Card className="h-100 position-relative">
                            <div className="position-absolute top-0 w-100 d-flex justify-content-end p-1" >
                                <label htmlFor="" >{toggleInput8 ? <Check size={18} style={{ cursor: 'pointer' }} onClick={() => setTogleInput8(!toggleInput8)} /> : <Edit2 size={18} style={{ cursor: 'pointer' }} onClick={() => setTogleInput8(!toggleInput8)} />}</label>
                            </div>
                            <CardBody>
                                <div>
                                    <h5>About us</h5>
                                    <p>We're here for all your vehicular insurance needs! <a style={{ color: '#5e50ee' }} onClick={toggle}>Read more</a></p>
                                </div>
                                <div className='mt-2'>
                                    <h5>Loaction:</h5>
                                    <p className={`${toggleInput8 && 'form-control'} `} contentEditable={toggleInput8 && true}>Mumbai, Maharashtra</p>
                                </div>
                                <div className='mt-2'>
                                    <h5>Email:</h5>
                                    <p>xircls@gmail.com</p>
                                </div>
                                <div>
                                    <h5>Phone:</h5>
                                    <p className={`${toggleInput8 && 'form-control'} `} contentEditable={toggleInput8 && true}>9874365746</p>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl='4'>
                        <Row className="px-1 pb-1">
                            <Card className="mb-1 ">
                                <CardBody>
                                    <h5> Social Links</h5>
                                    <div className="mt-5">
                                        <Row>
                                            <Col xl='6' className="mx-auto mb-2">
                                                <div>
                                                    <a href="" style={{ textDecoration: 'none', color: '#5e50ee' }}>
                                                        <Twitter style={{ fill: '#5e50ee' }} /> @twitter
                                                    </a>
                                                </div>
                                            </Col>
                                            <Col xl='6' className="mx-auto mb-2">
                                                <div><a href="" style={{ textDecoration: 'none', color: '#5e50ee' }}><Facebook style={{ fill: '#5e50ee' }} /> @facebook</a></div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xl='6' className="mx-auto mb-2">
                                                <div><a href="" style={{ textDecoration: 'none', color: '#5e50ee' }}><Instagram /> @instagram</a></div>
                                            </Col>
                                            <Col xl='6' className="mx-auto mb-2">
                                                <div><a href="" style={{ textDecoration: 'none', color: '#5e50ee' }}><Linkedin style={{ fill: '#5e50ee' }} /> @linkedin</a></div>
                                            </Col>
                                        </Row>
                                    </div>
                                </CardBody>
                            </Card>
                            <a href="" className="mx-auto card-button my-1">
                                <div className="d-flex justify-content-center">
                                    <h5 className="my-2">Go to the Website <span>
                                        <ArrowRight id='arrowMove' />
                                    </span> </h5>
                                </div>
                            </a>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Row>
                <Col xl='6'>
                    <Card>
                        <CardBody className="position-relative">
                            <div className="position-absolute top-0 w-100 d-flex justify-content-end p-1" style={{ right: 0 }} >
                                <label htmlFor="" >{toggleInput2 ? <Check size={18} style={{ cursor: 'pointer' }} onClick={() => setTogleInput2(!toggleInput2)} /> : <Edit2 size={18} style={{ cursor: 'pointer' }} onClick={() => setTogleInput2(!toggleInput2)} />}</label>
                            </div>
                            <h5>Category </h5>
                            <p className={`${toggleInput2 && 'border-primary'} form-control mb-0`} contentEditable={toggleInput2 && true}>Auto Services</p>

                        </CardBody>
                    </Card>
                </Col>
                <Col xl='6'>
                    <Card>
                        <CardBody className="position-relative">
                            <div className="position-absolute top-0 w-100 d-flex justify-content-end p-1" style={{ right: 0 }} >
                                <label htmlFor="sub">{toggleInput1 ? <Check size={18} style={{ cursor: 'pointer' }} onClick={() => setTogleInput1(!toggleInput1)} /> : <Edit2 size={18} style={{ cursor: 'pointer' }} onClick={() => setTogleInput1(!toggleInput1)} />}</label>
                            </div>
                            <h5>Sub-category</h5>
                            <p id='sub' className={`${toggleInput1 && 'border-primary'} form-control mb-0`} contentEditable={toggleInput1 && true} >other</p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl='6'>
                    <Card>
                        <CardBody className="position-relative">
                            <div className="position-absolute top-0 w-100 d-flex justify-content-end p-1" style={{ right: 0 }} >
                                <label htmlFor="" >{toggleInput6 ? <Check size={18} style={{ cursor: 'pointer' }} onClick={() => setTogleInput6(!toggleInput6)} /> : <Edit2 size={18} style={{ cursor: 'pointer' }} onClick={() => setTogleInput6(!toggleInput6)} />}</label>
                            </div>
                            <h5 className="mb-0">Customer Profile</h5>
                            <Row className="match-height">
                                <Col>
                                    <img className="opacity-50 position-relative top-50 mx-1" width='15px' src={man} />
                                    <p className={`${toggleInput6 && 'border-primary'} form-control mb-0 ps-3 d-flex align-items-center gap-1`} contentEditable={toggleInput6 && true}>18 - 75 years</p>
                                </Col>
                                <Col>
                                    <img className="opacity-50 position-relative top-50 mx-1" width='15px' src={woman} />
                                    <p className={`${toggleInput6 && 'border-primary'} form-control mb-0 ps-3 d-flex align-items-center gap-1`} contentEditable={toggleInput6 && true}>18 - 75 years</p>
                                </Col>
                                <Col>
                                    <img className="opacity-50 position-relative top-50 mx-1" width='15px' src={kid} />
                                    <p className={`${toggleInput6 && 'border-primary'} form-control mb-0 h-100 ps-3 d-flex align-items-center gap-1`} contentEditable={toggleInput6 && true}></p>
                                </Col>

                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl='6'>
                    <Card>
                        <CardBody className="position-relative">
                            <div className="position-absolute top-0 w-100 d-flex justify-content-end p-1" style={{ right: 0 }} >
                                <label htmlFor="" >{toggleInput3 ? <Check size={18} style={{ cursor: 'pointer' }} onClick={() => setTogleInput3(!toggleInput3)} /> : <Edit2 size={18} style={{ cursor: 'pointer' }} onClick={() => setTogleInput3(!toggleInput3)} />}</label>
                            </div>
                            <h5>Delivery Locations</h5>
                            <p className={`${toggleInput3 && 'border-primary'} form-control mb-0`} contentEditable={toggleInput3 && true}><Globe /> India</p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="match-height">
                <Col>
                    <Card>
                        <CardBody className="position-relative">
                            <div className="position-absolute top-0 w-100 d-flex justify-content-end p-1" style={{ right: 0 }} >
                                <label htmlFor="" >{toggleInput5 ? <Check size={18} style={{ cursor: 'pointer' }} onClick={() => setTogleInput5(!toggleInput5)} /> : <Edit2 size={18} style={{ cursor: 'pointer' }} onClick={() => setTogleInput5(!toggleInput5)} />}</label>
                            </div>
                            <h5> Company Info </h5>
                            <p className={`${toggleInput5 && 'border-primary'} form-control mb-1`} contentEditable={toggleInput5 && true}>Company: JMD VFM Cars India Pvt. Ltd.</p>
                            <p className={`${toggleInput5 && 'border-primary'} form-control mb-1`} contentEditable={toggleInput5 && true}>Type:</p>
                            <p className={`${toggleInput5 && 'border-primary'} form-control mb-1`} contentEditable={toggleInput5 && true}>Website: <span><a href="" style={{ textDecoration: 'none', color: '#5e50ee' }}>https://www.jmdcars.com/ </a></span></p>

                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody className="position-relative">
                            <div className="position-absolute top-0 w-100 d-flex justify-content-end p-1" style={{ right: 0 }} >
                                <label htmlFor="" >{toggleInput4 ? <Check size={18} style={{ cursor: 'pointer' }} onClick={() => setTogleInput4(!toggleInput4)} /> : <Edit2 size={18} style={{ cursor: 'pointer' }} onClick={() => setTogleInput4(!toggleInput4)} />}</label>
                            </div>
                            <h5>Address</h5>
                            <p className={`${toggleInput4 && 'border-primary'} form-control mb-0`} contentEditable={toggleInput4 && true}>East View Building, 4th Rd</p>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl='12'>
                    <Card>
                        <CardBody className="position-relative">
                            <div className="position-absolute top-0 w-100 d-flex justify-content-end p-1" style={{ right: 0 }} >
                                <label htmlFor="" >{toggleInput7 ? <Check size={18} style={{ cursor: 'pointer' }} onClick={() => setTogleInput7(!toggleInput7)} /> : <Edit2 size={18} style={{ cursor: 'pointer' }} onClick={() => setTogleInput7(!toggleInput7)} />}</label>
                            </div>
                            <h5>Tags</h5>
                            <Row>
                                <p className={`${toggleInput7 && 'border-primary'} form-control p-2`} contentEditable={toggleInput7 && true}><Tag /> <span className="px-2">autoinsurance</span></p>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Modal isOpen={modal}
                toggle={toggle}
                modalTransition={{ timeout: 100 }}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                keyboard={false}
                show={modal}

            >
                <Container >
                    <Row>
                        <ModalHeader>
                            About us
                            <span style={{ float: 'right', position: 'relative', cursor: 'pointer', top: '-5px', right: '-375px' }} onClick={handleClose}><X /></span>
                        </ModalHeader>
                        <ModalBody>
                            <p>We're here for all your vehicular insurance needs!</p>
                        </ModalBody>
                    </Row>
                </Container>

            </Modal>


        </div>
    )
}

export default Outlet
