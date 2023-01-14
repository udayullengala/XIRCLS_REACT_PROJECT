import React, { useState } from "react"
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import { Plus, X } from "react-feather"
import OfferCampaign from "./OfferCampaign"
import '../../Css/OfferValue.css'
const OfferValue = () => {

    const [container, setContainer] = useState('false')
    const [acqInput, setAcqInput] = useState([{ discount: '', min: '', max: '' }])
    const [retInput, setRetInput] = useState([{ discount: '', min: '', max: '' }])

    const addRow = (a) => {
        a === 1 ? setAcqInput([...acqInput, { discount: '', min: '', max: '' }]) : setRetInput([...retInput, { discount: '', min: '', max: '' }])
    }
    const removeRow = (i, r) => {
        if (r === 1) {
            const newAcqInput = [...acqInput]
            newAcqInput.splice(i, 1)
            setAcqInput(newAcqInput)
        }
        if (r === 2) {
            const newRetInput = [...retInput]
            newRetInput.splice(i, 1)
            setRetInput(newRetInput)
        }
    }

    return (
        <>
            <Container fluid className="offercampaign px-0">
                <Card>
                    <CardBody>
                        <Container fluid>
                            <OfferCampaign />
                            <Row className="my-5 px-0 mx-0">
                                <Col xs={12} className="d-flex flex-column">
                                    <label htmlFor="offer-title">
                                        Default offer set title
                                    </label>
                                    <input type='text' id='offer-title' name='offer-title' className="form-control" />
                                </Col>
                            </Row>
                            <Row className="my-3 my-3 px-0 mx-0">
                                <h4>Your Offers will be categorized under</h4>
                                <p className="mb-0">Kids and Babycare</p>
                                <ul style={{ paddingLeft: '3rem' }}>
                                    <li>
                                        Apparel
                                    </li>
                                </ul>
                            </Row>
                            <Row className="my-3 px-0 mx-0">
                                <h4>Your Offer Spend Range</h4>
                                <Col md={6}>
                                    <label htmlFor="spend-range-from">
                                        From
                                    </label>
                                    <input placeholder="From" type='text' id='spend-range-from' name='spend-range-from' className="form-control" />
                                </Col>
                                <Col md={6}>
                                    <label htmlFor="spend-range-to">
                                        To
                                    </label>
                                    <input placeholder="To" type='text' id='spend-range-to' name='spend-range-to' className="form-control" />
                                </Col>
                            </Row>
                            <Row className="my-3 px-0 mx-0">
                                <Col s={12} className='text-end'><span onClick={() => setContainer(!container)}><button className='btn-primary btn'>{container ? 'Create Spend Brackets' : 'Reset Spend Range'}</button></span></Col>
                            </Row>
                            <Container className={`px-1 ${container ? 'd-none' : ''} `}>
                                <div className="border rounded-3 my-3 px-2">
                                    <Row className="py-1">
                                        <Col s={6} className='d-flex align-items-center'>
                                            <h3 className="mb-0">Acquisition Offers</h3>
                                        </Col>
                                        <Col s={6} className='text-end'>
                                            <button className="btn btn-primary rounded-2 mx-2">Recommended Values</button><button className="btn btn-primary rounded-2">Reset</button>
                                        </Col>
                                    </Row>
                                    <Row className="py-1 border-top border-bottom">
                                        <Col s={3}><label>Discount Offered (%)</label></Col>
                                        <Col s={3}><label>Minimum Spend</label></Col>
                                        <Col s={3}><label>Maximum Spend</label></Col>
                                        <Col s={3}></Col>
                                    </Row>
                                    <Container fluid className="px-0">
                                        {acqInput.map((acqValue, i) => {
                                            return (
                                                <Row key={i} className="py-1 row-cols-4">
                                                    <Col><input id={`acq-discount${i}`} className="form-control" /></Col>
                                                    <Col><input id={`acq-min${i}`} className="form-control" /></Col>
                                                    <Col><input id={`acq-max${i}`} className="form-control" /></Col>
                                                    <Col className='d-flex align-items-center'>
                                                        <Col md={6} className='p-0'>
                                                            {acqInput.length - 1 === i && acqInput.length < 4 && <div onClick={() => addRow(1)} className="rounded-circle cursor-pointer bg-light-success mx-auto" style={{ padding: '0.5rem', width: '38px', height: '38px' }}>
                                                                <Plus />
                                                            </div>}
                                                        </Col>
                                                        <Col md={6} className='p-0'>
                                                            {i > 0 && <div onClick={() => removeRow(i, 1)} disabled className="rounded-circle cursor-pointer bg-light-danger mx-auto" style={{ padding: '0.5rem', width: '38px', height: '38px' }}>
                                                                <X />
                                                            </div>}
                                                        </Col>
                                                    </Col>
                                                </Row>)
                                        })}
                                    </Container>
                                </div>
                                <div className="border rounded-3 my-3 px-2">
                                    <Row className="py-1">
                                        <Col s={6} className='d-flex align-items-center'>
                                            <h3 className="mb-0">Retention Offers</h3>
                                        </Col>
                                        <Col s={6} className='btnbox text-end'>
                                            <button className=" btn btn-primary rounded-2 mx-2">Recommended Values</button><button className="btn btn-primary rounded-2">Reset</button>
                                        </Col>
                                    </Row>
                                    <Row className="py-1 border-top border-bottom">
                                        <Col s={3}><label>Discount Offered (%)</label></Col>
                                        <Col s={3}><label>Minimum Spend</label></Col>
                                        <Col s={3}><label>Maximum Spend</label></Col>
                                        <Col s={3}></Col>
                                    </Row>
                                    <Container fluid className="px-0">
                                        {retInput.map((retValue, i) => {
                                            return (
                                                <Row key={i} className="py-1 row-cols-4">
                                                    <Col><input id={`ret-discount${i}`} className="form-control" /></Col>
                                                    <Col><input id={`ret-min${i}`} className="form-control" /></Col>
                                                    <Col><input id={`ret-max${i}`} className="form-control" /></Col>
                                                    <Col className='d-flex align-items-center'>
                                                        <Col md={6} className='p-0'>
                                                            {retInput.length - 1 === i && retInput.length < 4 && <div onClick={() => addRow(2)} className="rounded-circle cursor-pointer bg-light-success mx-auto" style={{ padding: '0.5rem', width: '38px', height: '38px' }}>
                                                                <Plus />
                                                            </div>}
                                                        </Col>
                                                        <Col md={6} className='p-0'>
                                                            {i > 0 && <div onClick={() => removeRow(i, 2)} disabled className="rounded-circle cursor-pointer bg-light-danger mx-auto" style={{ padding: '0.5rem', width: '38px', height: '38px' }}>
                                                                <X />
                                                            </div>}
                                                        </Col>
                                                    </Col>
                                                </Row>)
                                        })}
                                    </Container>
                                </div>
                            </Container>
                        </Container>
                        <Container className="containerbox">
                            <Row className="rowbox px-1 my-2">
                                <Col s={6} className='colbox'><button className="btn btn-primary rounded-2">Back</button></Col>
                                <Col s={6} className='colbox2 text-end'><button className="btn btn-primary rounded-2 mx-2">Save</button><button className="btn btn-primary rounded-2">Save & Proceed</button></Col>
                            </Row>
                        </Container>
                    </CardBody>
                </Card>
            </Container>


        </>
    )
}

export default OfferValue