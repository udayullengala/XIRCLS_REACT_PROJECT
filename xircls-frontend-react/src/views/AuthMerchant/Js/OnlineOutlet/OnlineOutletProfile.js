import React, { useState } from "react"
import { Card, CardBody, Container, Row, Col, Modal, ModalBody } from 'reactstrap'
import { X } from "react-feather"
import OnlineOutletNav from "./OnlineOutletNav"
import $ from 'jquery'

const OnlineOutletProfile = () => {

    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal)

    const categories = [
        {
            name: 'Food & Beverages',
            type: 'checkbox',
            subCategories: [
                {
                    type: 'checkbox',
                    label: 'Sweets',
                    items: [
                        {
                            type: 'checkbox',
                            label: 'Ice-Cream'
                        },
                        {
                            type: 'checkbox',
                            label: 'Chocolate'
                        },
                        {
                            type: 'checkbox',
                            label: 'Chocolate Packs'
                        },
                        {
                            type: 'checkbox',
                            label: 'Indian Sweets'
                        }
                    ]
                },
                {
                    type: 'checkbox',
                    label: 'Atta, Dal & Rice',
                    items: [
                        {
                            type: 'checkbox',
                            label: 'Aata'
                        },
                        {
                            type: 'checkbox',
                            label: 'Beans, Sooji & Maida'
                        },
                        {
                            type: 'checkbox',
                            label: 'Other Foods'
                        },
                        {
                            type: 'checkbox',
                            label: 'Rice'
                        }
                    ]
                },
                {
                    type: 'checkbox',
                    label: 'Masala, Oil & More',
                    items: [
                        {
                            type: 'checkbox',
                            label: 'Powdered Masala'
                        },
                        {
                            type: 'checkbox',
                            label: 'Whole Spices'
                        },
                        {
                            type: 'checkbox',
                            label: 'Salt & Sugar'
                        },
                        {
                            type: 'checkbox',
                            label: 'Ghee & Vanaspati'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Personal Care',
            type: 'checkbox',
            subCategories: [
                {
                    type: 'checkbox',
                    label: 'Sweets',
                    items: [
                        {
                            type: 'checkbox',
                            label: 'Ice-Cream'
                        },
                        {
                            type: 'checkbox',
                            label: 'Chocolate'
                        },
                        {
                            type: 'checkbox',
                            label: 'Chocolate Packs'
                        },
                        {
                            type: 'checkbox',
                            label: 'Indian Sweets'
                        }
                    ]
                },
                {
                    type: 'checkbox',
                    label: 'Atta, Dal & Rice',
                    items: [
                        {
                            type: 'checkbox',
                            label: 'Aata'
                        },
                        {
                            type: 'checkbox',
                            label: 'Beans, Sooji & Maida'
                        },
                        {
                            type: 'checkbox',
                            label: 'Other Foods'
                        },
                        {
                            type: 'checkbox',
                            label: 'Rice'
                        }
                    ]
                },
                {
                    type: 'checkbox',
                    label: 'Masala, Oil & More',
                    items: [
                        {
                            type: 'checkbox',
                            label: 'Powdered Masala'
                        },
                        {
                            type: 'checkbox',
                            label: 'Whole Spices'
                        },
                        {
                            type: 'checkbox',
                            label: 'Salt & Sugar'
                        },
                        {
                            type: 'checkbox',
                            label: 'Ghee & Vanaspati'
                        }
                    ]
                }
            ]
        }
    ]

    const hideRow = (checkId, rowId) => {
        const isChecked = $(`#${checkId}`)[0].checked
        console.log(isChecked)
        console.log(checkId)
        console.log(rowId)
        isChecked ? $(`#${rowId}`).removeClass('d-none') : $(`#${rowId}`).addClass('d-none')
    }

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
                        <Container fluid className="px-3">
                            <Row className="my-1 px-1 py-2 border">
                                <Col className="mb-2" md={12}>
                                    <h4 className="mb-0">
                                        Outlet Category : *
                                    </h4>
                                </Col>
                                {categories.map((category, key) => {
                                    return (
                                        <Col className="form-check form-check-success ps-3 mb-2" md={3}>
                                            <input onChange={() => hideRow(`top-check-${key}`, `main-row-${key}`)} className="form-check-input" id={`top-check-${key}`} type={category.type} />
                                            <label className="form-check-label" htmlFor={`top-check-${key}`}>{category.name}</label>
                                        </Col>
                                    )
                                })}
                                <Col md={12}>
                                    Do you want to add Categories? <span className="text-primary cursor-pointer" onClick={toggle}>Add</span>
                                </Col>
                            </Row>
                            <Row className="my-3 px-1 py-2 border">
                                <Col md={12} className='px-0'>
                                    <h4 className="mb-0">
                                        Outlet Subcategory : *
                                    </h4>
                                </Col>
                                {categories.map((category, key) => {
                                    return (
                                        <Col md={12} className="border rounded my-2 px-2 pt-2 d-none" id={`main-row-${key}`}>
                                            <h5 className="mb-3 fw-bold">{category.name}</h5>
                                            <Row className="my-2">
                                                {category.subCategories.map((subCategory, i) => {
                                                    return (
                                                        <Col key={i} className="mb-3" md={12}>
                                                            <Container fluid>
                                                                <Row>
                                                                    <Col md={12} className="form-check pb-1">
                                                                        <input className="form-check-input cursor-pointer" id={`subcategory-${key}${i}`} onChange={() => hideRow(`subcategory-${key}${i}`, `${key}-checksect-${i}`)} type={subCategory.type} checked={subCategory.checked} />
                                                                        <label className="form-check-label fs-6" htmlFor={`subcategory-${key}${i}`}>{subCategory.label}</label>
                                                                    </Col>
                                                                </Row>
                                                                <Row className="d-none" id={`${key}-checksect-${i}`}>
                                                                    <hr />
                                                                    {subCategory.items.map((item, j) => {
                                                                        return (
                                                                            <Col key={j} md={3} className="ps-4 my-1 form-check">
                                                                                <input id={`${item.label}-${key}${i}${j}`} type={item.type} className='form-check-input cursor-pointer' checked={item.checked} />
                                                                                <label htmlFor={`${item.label}-${key}${i}${j}`} className='form-check-label fs-6'>{item.label}</label>
                                                                            </Col>
                                                                        )
                                                                    })}
                                                                </Row>
                                                            </Container>
                                                        </Col>
                                                    )
                                                })}
                                            </Row>
                                        </Col>
                                    )
                                })}
                            </Row>
                            <Row className="my-3 px-1 py-2 border">
                                <Col md={12}>
                                    <Col className="mb-2" md={12}>
                                        <h4>
                                            Customer Profile *
                                        </h4>
                                        <p style={{ fontSize: '12px' }}>Who does your outlet cater to?</p>
                                    </Col>
                                    <Col className="my-2 form-check d-flex gap-5" md={12}>
                                        <div><input onChange={() => hideRow('outlet-men', 'men-row')} type='checkbox' id={'outlet-men'} className='form-check-input cursor-pointer' /> <label htmlFor={'outlet-men'} className='form-check-label'>Men</label></div>

                                        <div><input onChange={() => hideRow('outlet-women', 'women-row')} type='checkbox' id={'outlet-women'} className='form-check-input cursor-pointer' /> <label htmlFor={'outlet-women'} className='form-check-label'>Women</label></div>

                                        <div><input onChange={() => hideRow('outlet-kids', 'kid-row')} type='checkbox' id={'outlet-kids'} className='form-check-input cursor-pointer' /> <label htmlFor={'outlet-kids'} className='form-check-label'>Kids</label></div>
                                    </Col>
                                    <Col className="my-2" md={12}>
                                        <Container fluid className="border rounded-3 pt-1 px-1 custom-table">
                                            <Row className="px-1">
                                                <Col md={12} className='d-flex pb-1'>
                                                    <div className="d-flex align-items-center border-end px-2 fw-bold" style={{ width: '10%' }}>
                                                        For
                                                    </div>
                                                    <div className="d-flex align-items-center border-end px-2 fw-bold" style={{ width: '30%' }}>
                                                        From Age
                                                    </div>
                                                    <div className="d-flex align-items-center border-end px-2 fw-bold" style={{ width: '30%' }}>
                                                        To Age
                                                    </div>
                                                    <div className="d-flex align-items-center px-2 fw-bold" style={{ width: '30%' }}>
                                                        Ratio
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className="px-1 d-none" id={'men-row'}>
                                                <hr />
                                                <Col md={12} className='d-flex pb-1'>
                                                    <div className="d-flex align-items-center border-end px-2" style={{ width: '10%' }}>
                                                        Men
                                                    </div>
                                                    <div className="d-flex align-items-center border-end px-2" style={{ width: '30%' }}>
                                                        <input type={'text'} className='form-control' placeholder="From" />
                                                    </div>
                                                    <div className="d-flex align-items-center border-end px-2" style={{ width: '30%' }}>
                                                        <input type={'text'} className='form-control' placeholder="To Age" />
                                                    </div>
                                                    <div className="d-flex align-items-center px-2" style={{ width: '30%' }}>
                                                        <input type={'text'} className='form-control' placeholder="Percentage Value eg. 25% " />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className="px-1 d-none" id={'women-row'}>
                                                <hr />
                                                <Col md={12} className='d-flex pb-1'>
                                                    <div className="d-flex align-items-center border-end px-2" style={{ width: '10%' }}>
                                                        Women
                                                    </div>
                                                    <div className="d-flex align-items-center border-end px-2" style={{ width: '30%' }}>
                                                        <input type={'text'} className='form-control' placeholder="From" />
                                                    </div>
                                                    <div className="d-flex align-items-center border-end px-2" style={{ width: '30%' }}>
                                                        <input type={'text'} className='form-control' placeholder="To Age" />
                                                    </div>
                                                    <div className="d-flex align-items-center px-2" style={{ width: '30%' }}>
                                                        <input type={'text'} className='form-control' placeholder="Percentage Value eg. 25% " />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className="px-1 d-none" id={'kid-row'}>
                                                <hr />
                                                <Col md={12} className='d-flex pb-1'>
                                                    <div className="d-flex align-items-center border-end px-2" style={{ width: '10%' }}>
                                                        Kids
                                                    </div>
                                                    <div className="d-flex align-items-center border-end px-2" style={{ width: '30%' }}>
                                                        <input type={'text'} className='form-control' placeholder="From" />
                                                    </div>
                                                    <div className="d-flex align-items-center border-end px-2" style={{ width: '30%' }}>
                                                        <input type={'text'} className='form-control' placeholder="To Age" />
                                                    </div>
                                                    <div className="d-flex align-items-center px-2" style={{ width: '30%' }}>
                                                        <input type={'text'} className='form-control' placeholder="Percentage Value eg. 25% " />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className="px-1">
                                                <hr />
                                                <Col md={12} className='d-flex pb-1'>
                                                    <div className="d-flex align-items-center border-end px-2" style={{ width: '10%' }}>

                                                    </div>
                                                    <div className="d-flex align-items-center border-end px-2" style={{ width: '30%' }}>
                                                        Total
                                                    </div>
                                                    <div className="d-flex align-items-center border-end px-2" style={{ width: '30%' }}>
                                                        100%
                                                    </div>
                                                    <div className="d-flex align-items-center px-2" style={{ width: '30%' }}>

                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                </Col>
                            </Row>
                            <Row className="my-3 px-1 py-2 border">
                                <Col className="mb-1" md={12}>
                                    <h4>Outlet's spend range *</h4>
                                </Col>
                                <Col className="my-1" md={6}>
                                    <label htmlFor="outlet-spend-from">
                                        From
                                    </label>
                                    <input placeholder="From" type='text' id='outlet-spend-from' name='outlet-spend-from' className="form-control" />
                                </Col>
                                <Col className="my-1" md={6}>
                                    <label htmlFor="outlet-spend-to">
                                        To
                                    </label>
                                    <input placeholder="To" type='text' id='outlet-spend-to' name='outlet-spend-to' className="form-control" />
                                </Col>
                                <Col className="my-1" md={6}>
                                    <label htmlFor="outlet-spend-avg">
                                        What is your average spend range?
                                    </label>
                                    <input placeholder="What is your average spend range?" type='text' id='outlet-spend-avg' name='outlet-spend-avg' className="form-control" />
                                </Col>
                                <Col className="my-1" md={6}>
                                    <label htmlFor="avg-transactions">
                                        Your average number of monthly transactions?
                                    </label>
                                    <input placeholder="Your average number of monthly transactions?" type='text' id='avg-transactions' name='avg-transactions' className="form-control" />
                                </Col>
                            </Row>
                            <Row className="my-3 px-1 py-2 border">
                                <Col className="mb-1" md={12}>
                                    <h4>Add Tags *</h4>
                                </Col>
                                <Col className="my-1" md={12}>
                                </Col>
                            </Row>
                            <Row className="my-2 mx-0">
                                <Col s={6}><button className="btn btn-primary rounded-2">Back</button></Col>
                                <Col s={6} className='text-end'><button className="btn btn-primary rounded-2 mx-2">Save</button><button className="btn btn-primary rounded-2">Save & Proceed</button></Col>
                            </Row>

                        </Container>
                    </CardBody>
                </Card>
                <Modal isOpen={modal} toggle={toggle} centered className="online-outlet">
                    <ModalBody>
                        <div className="d-flex justify-content-between mb-1">
                            <h5 className="mb-0">Add Industry</h5><span className="cursor-pointer" onClick={toggle}><X size={15} /></span>
                        </div>
                    </ModalBody>
                </Modal>
            </Container>

        </>
    )
}

export default OnlineOutletProfile