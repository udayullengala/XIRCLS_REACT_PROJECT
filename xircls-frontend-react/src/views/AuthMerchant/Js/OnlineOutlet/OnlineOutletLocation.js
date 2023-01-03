import React, { useState } from "react"
import Select from 'react-select'
import { Card, CardBody, Container, Row, Col } from 'reactstrap'
import OnlineOutletNav from "./OnlineOutletNav"

const OnlineOutletLocation = () => {
    const [locCountry, setLocCountry] = useState(false)
    const [locState, setLocState] = useState(false)
    const [locCity, setLocCity] = useState(false)
    const [city, setCity] = useState([])
    // const [cityInput, setCityInput] = useState([{ name: '' }])

    const locationInputs = (type) => {
        if (type === 1) {
            setLocCountry(true)
            setLocState(false)
            setLocCity(false)
        }
        if (type === 2) {
            setLocCountry(false)
            setLocState(false)
            setLocCity(false)
        }
        if (type === 3) {
            setLocCountry(false)
            setLocState(true)
            setLocCity(false)
        }
        if (type === 4) {
            setLocCountry(false)
            setLocState(false)
            setLocCity(true)
        }
    }

    console.log(city)

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
                                    <Col md={12}>
                                        <Row className="mb-2">
                                            <div>
                                                <h4>What's your operational reach? </h4>
                                                <hr />
                                            </div>
                                        </Row>
                                    </Col>
                                    <Col md={12}>
                                        <Row className="mb-3">
                                            <div className='d-flex' style={{ gap: '2rem' }}>
                                                <div className='cursor-pointer form-check'>
                                                    <input type='radio' name='outlet-location-radio' id='outlet-location-radio1' className=' form-check-input cursor-pointer' onClick={() => locationInputs(1)} />
                                                    <label htmlFor='outlet-location-radio1' className='cursor-pointer form-check-label' onClick={() => locationInputs(1)}>Global</label>
                                                </div>
                                                <div className='cursor-pointer custom-control form-check' onClick={() => locationInputs(2)}>
                                                    <input defaultChecked={!locCity && !locState && !locCountry} type='radio' name='outlet-location-radio' id='outlet-location-radio2' className=' form-check-input cursor-pointer' onClick={() => locationInputs(2)} />
                                                    <label htmlFor='outlet-location-radio2' className='cursor-pointer form-check-label' onClick={() => locationInputs(2)}>Pan {'company location country'}</label>
                                                </div>
                                                <div className='cursor-pointer form-check'>
                                                    <input type='radio' name='outlet-location-radio' id='outlet-location-radio3' className=' form-check-input cursor-pointer' onClick={() => locationInputs(3)} />
                                                    <label htmlFor='outlet-location-radio3' className='cursor-pointer form-check-label' onClick={() => locationInputs(3)}>State</label>
                                                </div>
                                                <div className='cursor-pointer custom-control form-check'>
                                                    <input type='radio' name='outlet-location-radio' id='outlet-location-radio4' className=' form-check-input cursor-pointer' onClick={() => locationInputs(4)} />
                                                    <label htmlFor='outlet-location-radio4' className='cursor-pointer form-check-label' onClick={() => locationInputs(4)}>City</label>
                                                </div>
                                            </div>
                                        </Row>
                                    </Col>
                                    <Col md={12} className={`mb-3 ${!locCountry && 'd-none'}`}>
                                        <Row>
                                            <Col md={4}>
                                                <div className="d-flex justify-content-between">
                                                    <label>
                                                        Country
                                                    </label>
                                                </div>
                                                <Select options={[
                                                    { value: 'country 1', label: 'country 1' },
                                                    { value: 'country 2', label: 'country 2' },
                                                    { value: 'country 3', label: 'country 3' }
                                                ]}
                                                    closeMenuOnSelect={false}
                                                    isMulti
                                                    placeholder={'Select Country'}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={12} className={`mb-3 ${!locState && 'd-none'}`}>
                                        <Row>
                                            <Col md={4}>
                                                <label>
                                                    Country
                                                </label>
                                                <Select options={[
                                                    { value: 'country 1', label: 'country 1' },
                                                    { value: 'country 2', label: 'country 2' },
                                                    { value: 'country 3', label: 'country 3' }
                                                ]}
                                                    closeMenuOnSelect={true}
                                                    placeholder={'Select Country'}
                                                />
                                            </Col>
                                            <Col md={4}>
                                                <div className="d-flex justify-content-between">
                                                    <label>
                                                        State / Province
                                                    </label>
                                                </div>
                                                <Select options={[
                                                    { value: 'state 1', label: 'state 1' },
                                                    { value: 'state 2', label: 'state 2' },
                                                    { value: 'state 3', label: 'state 3' }
                                                ]}
                                                    closeMenuOnSelect={false}
                                                    isMulti
                                                    placeholder={'Select State / Province'}
                                                />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={12} className={`mb-3 ${!locCity && 'd-none'}`}>
                                        <Row>
                                            <Col md={4}>
                                                <label>
                                                    Country
                                                </label>
                                                <Select options={[
                                                    { value: 'country 1', label: 'country 1' },
                                                    { value: 'country 2', label: 'country 2' },
                                                    { value: 'country 3', label: 'country 3' }
                                                ]}
                                                    closeMenuOnSelect={true}
                                                    placeholder={'Select Country'}
                                                    onChange = {(e) => {
                                                        console.log(e.value)
                                                    }}
                                                />
                                            </Col>
                                            <Col md={4}>
                                                <label>
                                                    State / Province
                                                </label>
                                                <Select options={[
                                                    { value: 'state 1', label: 'state 1' },
                                                    { value: 'state 2', label: 'state 2' },
                                                    { value: 'state 3', label: 'state 3' }
                                                ]}
                                                    closeMenuOnSelect={true}
                                                    placeholder={'Select State / Province'}
                                                />
                                            </Col>
                                            <Col md={4}>
                                                <div className="d-flex justify-content-between">
                                                    <label>
                                                        City
                                                    </label>
                                                </div>
                                                <Select options={[
                                                    { value: 'city 1', label: 'city 1' },
                                                    { value: 'city 2', label: 'city 2' },
                                                    { value: 'city 3', label: 'city 3' }
                                                ]}
                                                    closeMenuOnSelect={false}
                                                    isMulti
                                                    placeholder={'Select City'}
                                                    onChange={(e) => {
                                                        setCity([...city, e.value])
                                                    }}
                                                />
                                            </Col>
                                        </Row>
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

export default OnlineOutletLocation