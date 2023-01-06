import React, { useState } from "react"
import { X } from "react-feather"
import { Container, Card, CardBody, Row, Col, Modal } from 'reactstrap'
import '../Css/CreateNetwork.css'

const CreateNetwork = (args) => {

    const [modal, setModal] = useState(false)
    const [merchantEmail, setMerchantEmail] = useState('')
    const [err1, setErr1] = useState(false)
    const [err2, setErr2] = useState(false)

    const validate = () => {
        if (merchantEmail === '') {
            setErr1(true)
            setErr2(false)
        } else if (!(/\S+@\S+\.\S+/.test(merchantEmail))) {
            setErr1(false)
            setErr2(true)
        } else {
            setModal(!modal)
            setErr1(false)
            setErr2(false)
        }
    }

    const changeMerchantEmail = (event) => {
        setMerchantEmail(event.target.value)
        setErr1(false)
        setErr2(false)
    }

    return (
        <>
            <div className="create-network">
                <Card>
                    <CardBody>
                        <h3 className="mb-0">Invite a Business</h3>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <Container fluid className="px-0 py-1">
                            <Row className="">
                                <Col md={12} className='colbox d-flex flex-column justify-content-center align-items-center'>
                                    <h4>Invite Merchants You Know</h4>
                                    <p>Add your associates as Preferred Partners in your cross-marketing campaigns</p>
                                    <div style={{ width: '35%' }} className='inputbox position-relative mb-2'>
                                        <input className="form-control" type='text' placeholder="Enter Email Id" value={merchantEmail} onChange={event => changeMerchantEmail(event)} />
                                        {err1 && <span className={`text-danger`}>Please enter an email first</span>}
                                        {err2 && <span className={`text-danger`}>Invalid email address</span>}
                                        <button onClick={validate} className="btn btn-primary position-absolute top-0 end-0">Send</button>
                                    </div>
                                    <p className="text-primary anchor cursor-pointer">Do This Later</p>
                                </Col>
                                <Modal className="products modal-md" isOpen={modal} toggle={() => setModal(!modal)} {...args}>
                                    <Container className="position-relative p-1">
                                        <span onClick={() => setModal(!modal)} className="position-absolute top-0 end-0 p-1 cursor-pointer">
                                            <X size={20} />
                                        </span>
                                        <Row className="py-1">
                                            <h5 className="mb-0 text-center">Email address found on XIRCLS. Are you looking for...?</h5>
                                        </Row>
                                        <Row className="px-1 py-2 ">
                                            <Col md={12} className="text-center mb-1">
                                                <img width={75} src={'https://www.xircls.com/static/images/website-slide/logo12.jpg'} />
                                            </Col>
                                            <Col md={12} className="text-center">
                                                <p><span className="fw-bold text-black">Company name:</span> XIRCLS</p>
                                                <p><span className="fw-bold text-black">Category</span>: Marketing | Professional Tools</p>
                                                <p><span className="fw-bold text-black">Email</span>: {merchantEmail}</p>
                                            </Col>
                                        </Row>
                                        <Row className="px-1 pb-2">
                                            <p className="text-primary anchor text-center cursor-pointer mb-0">View Profile</p>
                                        </Row>
                                        <div className="px-1 pt-2 pb-1 text-end">
                                            <button className="btn btn-primary" onClick={() => setModal(!modal)}>
                                                Proceed anyway
                                            </button>
                                        </div>
                                    </Container>
                                </Modal>
                            </Row>
                        </Container>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default CreateNetwork